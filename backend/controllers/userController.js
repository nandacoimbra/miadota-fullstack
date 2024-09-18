import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//jwt token
const criaToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
//loga um usuário
const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await userModel.findOne({ email });

        //caso não tenha encontrado o usuario com esse email
        if (!usuario) {
            return res.json({ success: false, message: "O usuário não existe" })
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        //caso não tenha encontrado o usuario com esse email
        if (!senhaCorreta) {
            return res.json({ success: false, message: "Credenciais inválidas" })
        }

        const token = criaToken(usuario._id);
        res.json({ success: true, token })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

//cadastro de usuario
const cadastraUsuario = async (req, res) => {
    const { nome, telefone, email, senha } = req.body;

    try {
        //verifica se o email já foi cadastrado por outro usuario
        const emailExiste = await userModel.findOne({ email });
        if (emailExiste) {
            return res.json({ success: false, message: "Usuario já existe!" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Informe um endereço de e-mail válido" })
        }

        if (senha.length < 8) {
            return res.json({ success: false, message: "Informe uma senha mais forte" })
        }

        //encriptar a senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(senha, salt);

        //criando o novo usuario
        const novoUsuario = new userModel({
            nome: nome,
            telefone: telefone,
            email: email,
            senha: hashedPassword

        })

        const usuario = await novoUsuario.save();
        const token = criaToken(usuario._id);
        res.json({ success: true, token })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

const buscaUsuarioPorId = async (req, res) => {
    try {
        // O ID do usuário é obtido do middleware de autenticação
        const idUsuario = req.user._id;

        // Busca o usuário no banco
        const usuario = await userModel.findById(idUsuario).select("_id nome email telefone cidade estado");

        // Verifica se o usuário existe
        if (!usuario) {
            return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }

        // Retorna o usuário encontrado
        return res.status(200).json({ success: true, data: usuario });
    } catch (error) {
        console.error("Erro ao buscar usuário por ID:", error);
        return res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
}

// Atualiza os dados do usuário
const atualizaUsuario = async (req, res) => {
    try {
        const idUsuario = req.user._id; // ID do usuário autenticado no token
        const novosDados = req.body; // Dados que serão atualizados enviados pelo frontend

        // Atualiza o usuário com os novos dados
        const usuarioAtualizado = await userModel.findByIdAndUpdate(idUsuario, novosDados, { new: true }).select("nome email telefone cidade estado");

        // Verifica se o usuário foi encontrado
        if (!usuarioAtualizado) {
            return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }

        // Retorna os dados atualizados do usuário
        return res.status(200).json({ success: true, data: usuarioAtualizado });
    } catch (error) {
        console.error("Erro ao atualizar dados do usuário:", error);
        return res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
};

const adicionaPetDeInteresse = async (req, res) => {

    const { idPet } = req.body;
    const { _id } = req.user;

    try {
        const usuario = await userModel.findById(_id);
        // Verifica se o usuário foi encontrado
        if (!usuario) {
            return res.status(404).json({ success: false, message: "Usuário não encontrado" });
        }

        //verifica se o pet já esta na lista de interesse
        if (usuario.petsTenhoInteresse.includes(idPet)) {
            return res.json({ success: false, message: "Pet já adicionado à lista de interesse" });
        }
        //add o id do pet ao array petsTenhoInteresse
        usuario.petsTenhoInteresse.push(idPet);
        await usuario.save();
        res.json({ success: true, message: "Pet adicionado à lista de interesse", usuario });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao adicionar pet de interesse" });
    }
}

const listaPetsDeInteresse = async (req, res) => {
    try {
        //busca o id do usuário logado a partir do middleware de auth
        const { _id } = req.user;

        // Encontra o usuário pelo ID e popula o campo petsTenhoInteresse com os detalhes dos pets
        const usuario = await userModel.findById(_id).populate('petsTenhoInteresse').populate({
            path: 'petsTenhoInteresse',
            populate: {
                path: 'responsavel',
                select: 'nome email telefone cidade estado'
            }
        });
        if (!usuario) {
            return res.status(404).json({ success: false, message: "Usuário não encontrado" });
        }

        // Verifica se a lista de pets de interesse está vazia
        if (usuario.petsTenhoInteresse.length === 0) {
            return res.status(200).json({ success: true, message: "Nenhum pet na lista de interesse" });
        }

        // Retorna a lista de pets de interesse
        res.status(200).json({ success: true, data: usuario.petsTenhoInteresse });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Erro ao buscar lista de pets de interesse" });
    }
}

const obterUsuariosPorPetInteresse = async (req,res) => {
    const { idPet } = req.params;

    try {
        // Busca direta no modelo de usuários que têm interesse no pet especificado
        const usuarios = await userModel.find({
            petsTenhoInteresse: idPet
        }).select('nome email cidade estado telefone');;

        res.json({
            success: true,
            data:usuarios
        });
    } catch (error) {
        console.error("Erro ao obter usuários com interesse no pet:", error);
        res.status(500).json({
            success: false,
            message: 'Erro ao buscar usuários'
        });
    }
};

export { loginUsuario, cadastraUsuario, adicionaPetDeInteresse, listaPetsDeInteresse, buscaUsuarioPorId, obterUsuariosPorPetInteresse, atualizaUsuario }
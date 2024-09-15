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
    const { nome, email, senha } = req.body;

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

const adicionaPetDeInteresse = async (req, res) => {
    
    const { idPet } = req.body;
    const { idUsuario } = req.user;

    try {
        const usuario = await userModel.findById(idUsuario);
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

export { loginUsuario, cadastraUsuario, adicionaPetDeInteresse }
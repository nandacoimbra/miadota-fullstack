import petModel from '../models/petModel.js'
import userModel from '../models/userModel.js';

//file system já disponível no node
import fs from 'fs'

//add pet
const addPet = async (req, res) => {
    let nomeArquivoImagem = `${req.file.filename}`;

    const pet = new petModel({
        nome: req.body.nome,
        especie: req.body.especie,
        sexo: req.body.sexo,
        cidade: req.body.cidade,
        estado: req.body.estado,
        descricao: req.body.descricao,
        responsavel: req.user._id,
        imagem: nomeArquivoImagem
    })

    try {
        const petSalvo = await pet.save();
        await userModel.findByIdAndUpdate(req.user._id, {
            $push: { petsCadastrados: petSalvo._id }
        })

        res.json({ success: true, message: "Pet cadastrado com sucesso!", data: petSalvo });


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" })
    }

}

// lista de todos os pets para adocao
const listaPets = async (req, res) => {
    try {
        //retorna dados do mongo
        const pets = await petModel.find({});
        res.json({ success: true, data: pets });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

//remove um pet

const removePet = async (req, res) => {
    try {
        const pet = await petModel.findById(req.body.id);
        //remove a imagem do pet da pasta uploads
        fs.unlink(`uploads/${pet.imagem}`, () => { });
        //encontra o pet pelo id no mongo e deleta
        await petModel.findByIdAndDelete(req.body.id);
        res.json({ sucess: true, message: "Pet excluído!" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

//altera o status do pet para aprovado=true, disponivel para adocao
const alteraPet = async (req, res) => {
    try {
        const petId = req.params.id;
        const petStatusAtualizado = await petModel.findByIdAndUpdate(
            petId, //id do pet
            req.body, //muda o status para true
            { new: true } //retorna o documento atualizado
        )

        if (!petStatusAtualizado) {
            return res.json({ message: "Pet não encontrado" })
        }

        res.json({ success: true, data: petStatusAtualizado, message: "Status do pet alterado com sucesso" })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao alterar status do pet" })
    }
}
const buscaPet = async (req, res) => {
    try {
        const petId = req.params.id;
        const pet = await petModel.findById(petId);

        if (!pet) {
            return res.status(404).json({ success: false, message: "Nenhum pet encontrado" });

        }

        res.json({ success: true, data: pet })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao recuperar pet" })
    }
}

//filtra pets por query params
const filtraPets = async (req, res) => {
    try {

        //parametros extraidos das query (se houver)
        const { status, adotado, especie, cidade, estado, sexo, aprovado, _id, adotante } = req.query;
        let filtro = {};

        if (status) {
            filtro.status = status;
        }

        if (especie) {
            filtro.especie = especie; // Filtra por espécie 
        }

        if (cidade) {
            filtro.cidade = cidade; // Filtra por cidade
        }

        if (sexo) {
            filtro.sexo = sexo; // Filtra por sexo 
        }
        if (aprovado) {
            filtro.aprovado = aprovado; // Filtra por aprovado 
        }
        if (_id) {
            filtro._id = _id; // Filtra por id 
        }
        if (adotante) {
            filtro.adotante = adotante; // Filtra por adotante 
        }

        const pets = await petModel.find(filtro).populate("responsavel").populate("adotante");

        if (!pets || pets.length === 0) {
            return res.status(404).json({ success: false, message: "Nenhum pet encontrado" });

        }


        // Retorna os pets encontrados
        res.status(200).json({ success: true, data: pets });


    } catch (error) {
        console.log("Erro ao buscar pets", error);
        res.status(500).json({ success: false, message: "Erro ao buscar pets" });
    }
}

const buscaPetsPorResponsavel = async (req, res) => {
    const { _id } = req.user;

    try {
        // Busca direta no modelo de pets com base no ID do responsável
        const pets = await petModel.find({ responsavel: _id });
        res.json({
            success: true,
            data: pets
        });
    } catch (error) {
        console.error("Erro ao buscar pets por responsável:", error);
        res.status(500).json({
            success: false,
            message: 'Erro ao buscar pets'
        });
    }
}

export { addPet, listaPets, buscaPet, removePet, alteraPet, filtraPets, buscaPetsPorResponsavel }
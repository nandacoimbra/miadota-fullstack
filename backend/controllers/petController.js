import { Console } from 'console';
import petModel from '../models/petModel.js'
//file system já disponível no node
import fs from 'fs'

//add pet
const addPet = async (req, res) => {
    let nomeArquivoImagem = `${req.file.filename}`;

    const pet = new petModel({
        especie: req.body.species,
        nome: req.body.name,
        sexo: req.body.sex,
        cidade: req.body.city,
        estado: req.body.state,
        descricao: req.body.description,
        imagem: nomeArquivoImagem,
        status: true
    })

    try {
        await pet.save();
        res.json({ success: true, message: "pet adicionado" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
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
        res.json({success:false,message:"Error"});
    }
}

export { addPet, listaPets, removePet }
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

export { addPet }
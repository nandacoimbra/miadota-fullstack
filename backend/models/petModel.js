import mongoose from "mongoose";

// Definição do schema para a tabela de pets
const petSchema = new mongoose.Schema({
    especie: { type: String, required: true },
    nome: { type: String, required: true },
    sexo: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    descricao: { type: String },
    imagem: { type: String, required: true },
    status: { type: Boolean, default: true } // true = disponível para adoção
});

const Pet = mongoose.models.Pet || mongoose.model('Pet', petSchema);

export default Pet;

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
    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  // Referencia o modelo de usuário
        required: true
    },
    aprovado: { type: Boolean, default: false }, // true = disponível para adoção
    adotado: { type: Boolean, default: false }, // true = adotado
    status: { type: String, default: 'CADASTRADO' },
    observacaoStatus: { type: String, default: '' },
    adotante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

});

const Pet = mongoose.models.Pet || mongoose.model('Pet', petSchema);

export default Pet;

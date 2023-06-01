const mongoose = require('mongoose');

const dadoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    nascimento : String,
    telefone: Number,
    endereco: String,
    cidade: String,
    estado: String,
    status: Boolean,
    image : Buffer
});

module.exports = mongoose.model('dados', dadoSchema);

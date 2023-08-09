const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
    nomeEscola: String,
    cnpj: String,
    email: String
}) 

module.exports = Usuario
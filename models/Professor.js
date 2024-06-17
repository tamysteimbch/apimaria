const mongoose = require('mongoose')

const Professor = mongoose.model('Professor', {
    codProfessor: String,
    nome: String,
    email: String,
    cpf: String,
    materias: Array,
    anos: Array,
    foto: String,
    codProvas: Array,
    codQuestoes: Array,
    codEscola: String
}) 

module.exports = Professor
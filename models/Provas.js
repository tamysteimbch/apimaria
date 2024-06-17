const mongoose = require('mongoose')

const Provas = mongoose.model('Provas', {
    codProva: String,
    codQuestao: Array,
    conteudo: Array,
    turma: String,
    dificuldade: String,
    codProfessor: String,
    materia: String
}) 

module.exports = Provas
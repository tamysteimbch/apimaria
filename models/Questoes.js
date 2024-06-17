const mongoose = require('mongoose')

const Questoes = mongoose.model('Questoes', {
    codQuestao: String,
    enunciado: String,
    multEscolha: Boolean,
    alternativas: Array,
    conteudo: Array,
    turma: Array,
    foto: String,
    dificuldade: String,
    referencia: String,
    compartilhar: Boolean,
    codProfessor: String,
    materia: String
}) 

module.exports = Questoes
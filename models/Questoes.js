const mongoose = require('mongoose')

const Questoes = mongoose.model('Questoes', {
    enunciado: String,
    multiplaEscolha: String,
    respostas: Array,
    conteudo: Array,
    turma: Array,
    foto: String,
    dificuldade: String,
    compartilhar: String,
    codProfessor: String
}) 

module.exports = Questoes
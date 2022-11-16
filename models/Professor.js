const mongoose = require('mongoose')

const Professor = mongoose.model('Professor', {
    name: String,
    cpf: String,
    app: Boolean
}) 

module.exports = Professor
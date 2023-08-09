const router = require('express').Router()
const Questoes= require('../models/Questoes')

// create
router.post('/', async (req, res) => {

    const{
        enunciado, multiplaEscolha, respostas, conteudo, turma, 
        foto, dificuldade, compartilhar, codProfessor
    } = req.body
    const questoes = {
        enunciado,
        multiplaEscolha,
        respostas,
        conteudo,
        turma,
        foto,
        dificuldade,
        compartilhar,
        codProfessor
    }

    if(!enunciado || !dificuldade || !conteudo) {
        res.status(422).json({ error: 'Dados obrigatórios faltando'})
        return
    }

    try {
    
        await Questoes.create(questoes)

        res.status(201).json({message: 'Questão cadastrado com sucesso'})

    } catch (error){
        req.statusCode(500).json({error: error})
    }

})

// read
router.get('/', async (req, res) => {
    try {

        const questoes = await Questoes.find()

        res.status(200).json(questoes)

    } catch (error){

        req.statusCode(500).json({error: error})

    }
})

router.get('/:id', async (req,res) => {

    const id = req.params.id

    try {

        const questoes = await Questoes.findOne({_id: id})

        if(!questoes) {
            res.status(422).json({ message: 'Questão não encontrada' })
            return
        }

        res.status(200).json(questoes)

    } catch (error) {
        req.status(500).json({error: error})
    }

})

// update

router.patch('/:id', async(req, res) => {

    const id = req.params.id
    const{
        enunciado, multiplaEscolha, respostas, conteudo, turma, 
        foto, dificuldade, compartilhar, codProfessor
    } = req.body

    const questoes = {
        enunciado,
        multiplaEscolha,
        respostas,
        conteudo,
        turma,
        foto,
        dificuldade,
        compartilhar,
        codProfessor
    }

    try {

        const updatedQuestoes = await Questoes.updateOne({_id: id}, questoes)

        if(updatedQuestoes.matchedCount === 0) {
            res.status(422).json({ message: 'Questão não encontrada' })
            return
        }

        res.status(200).json(questoes)

    } catch (error) {
        req.status(500).json({error: error})
    }

})

module.exports = router
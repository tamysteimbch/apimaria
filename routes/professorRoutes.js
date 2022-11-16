const router = require('express').Router()
const Professor= require('../models/Professor')

// create
router.post('/', async (req, res) => {

    const{name, cpf, app} = req.body
    const professor = {
        name,
        cpf,
        app
    }

    if(!name) {
        res.status(422).json({ error: 'nome obrigatório'})
        return
    }

    try {
    
        await Professor.create(professor)

        res.status(201).json({message: 'Professor inserido'})

    } catch (error){
        req.statusCode(500).json({error: error})
    }

})

// read
router.get('/', async (req, res) => {
    try {

        const professor = await Professor.find()

        res.status(200).json(professor)

    } catch (error){

        req.statusCode(500).json({error: error})

    }
})

router.get('/:id', async (req,res) => {

    const id = req.params.id

    try {

        const professor = await Professor.findOne({_id: id})

        if(!professor) {
            res.status(422).json({ message: 'Usuário não encontrado' })
            return
        }

        res.status(200).json(professor)

    } catch (error) {
        req.status(500).json({error: error})
    }

})

// update

router.patch('/:id', async(req, res) => {

    const id = req.params.id
    const{ name, cpf, app } = req.body

    const professor = {
        name,
        cpf,
        app
    }

    try {

        const updatedProfessor = await Professor.updateOne({_id: id}, professor)

        if(updatedProfessor.matchedCount === 0) {
            res.status(422).json({ message: 'Usuário não encontrado' })
            return
        }

        res.status(200).json(professor)

    } catch (error) {
        req.status(500).json({error: error})
    }

})

module.exports = router
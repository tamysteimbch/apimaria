const router = require('express').Router()
const Provas= require('../models/Provas')

// create
router.post('/', async (req, res) => {
    try {
        const {
            codProva, 
            codQuestao, 
            conteudo, 
            turma, 
            dificuldade, 
            codProfessor, 
            materia
        } = req.body;

        const novaProva = await Provas.create({ codProva, codQuestao, conteudo, turma, dificuldade, codProfessor, materia });

        res.status(201).json({ message: 'Prova adicionada com sucesso!', prova: novaProva });
    } catch (error) {
        console.error('Erro ao adicionar prova:', error);
        res.status(500).json({ error: 'Erro ao adicionar prova' });
    }
});

// read
router.get('/', async (req, res) => {
    try {
        const provas = await Provas.find(); 

        res.status(200).json(provas);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const prova = await Provas.findOne({ _id: id });

        if (!prova) {
            return res.status(404).json({ message: 'Prova não encontrada' });
        }

        res.status(200).json(prova);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { codProva, codQuestao, conteudo, turma, dificuldade, materia } = req.body;

    const prova = {
        codProva,
        codQuestao,
        conteudo,
        turma,
        dificuldade,
        materia,
    };

    try {
        const updatedProva = await Provas.findByIdAndUpdate(id, prova, { new: true });

        if (!updatedProva) {
            return res.status(404).json({ message: 'Prova não encontrada' });
        }

        res.status(200).json(updatedProva);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router
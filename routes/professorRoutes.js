const router = require('express').Router()
const Professor= require('../models/Professor')

// create
router.post('/', async (req, res) => {
    const {
        codProfessor, nome, email, cpf, materias, anos, foto, codProvas, codQuestoes, codEscola
    } = req.body;

    const professor = {
        codProfessor,
        nome,
        email,
        cpf,
        materias,
        anos,
        foto,
        codProvas,
        codQuestoes,
        codEscola
    };

    if (!nome || !cpf || !email) {
        res.status(422).json({ error: 'Dados obrigatórios faltando' });
        return;
    }

    try {
        await Professor.create(professor);
        res.status(201).json({ message: 'Professor cadastrado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// read
router.get('/', async (req, res) => {
    try {
        const professores = await Professor.find(); // Aqui presumi que você quer buscar todos os professores

        res.status(200).json(professores);
    } catch (error) {
        res.status(500).json({ error: error.message }); // Ajustado para usar res.status() corretamente
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const professor = await Professor.findOne({ _id: id });

        if (!professor) {
            return res.status(404).json({ message: 'Professor não encontrado' });
        }

        res.status(200).json(professor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { nome, email, foto } = req.body;

    const professor = {
        nome,
        email,
        foto,
    };

    try {
        const updatedProfessor = await Professor.updateOne({ _id: id }, professor);

        if (updatedProfessor.n === 0) {
            return res.status(404).json({ message: 'Professor não encontrado' });
        }

        res.status(200).json(professor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router
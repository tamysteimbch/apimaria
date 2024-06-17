const router = require('express').Router()
const Questoes= require('../models/Questoes')

// create
router.post('/', async (req, res) => {
    const {
        codQuestao, enunciado, multEscolha, alternativas, conteudo, turma,
        foto, dificuldade, referencia, compartilhar, codProfessor
    } = req.body;

    try {
        // Verifica se os dados obrigatórios estão presentes
        if (!enunciado) {
            return res.status(422).json({ error: 'Dados obrigatórios faltando' });
        }

        // Cria um novo objeto de questão com os dados recebidos
        const novaQuestao = await Questoes.create({
            codQuestao,
            enunciado,
            multEscolha, 
            alternativas,
            conteudo,
            turma,
            foto,
            dificuldade,
            referencia,
            compartilhar,
            codProfessor
        });

        res.status(201).json({ message: 'Questão cadastrada com sucesso', questao: novaQuestao });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// read
router.get('/', async (req, res) => {
    try {
        // Busca todas as questões
        const questoes = await Questoes.find();

        res.status(200).json(questoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        // Busca uma questão pelo ID específico
        const questao = await Questoes.findById(id);

        if (!questao) {
            return res.status(404).json({ message: 'Questão não encontrada' });
        }

        res.status(200).json(questao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const {
        enunciado, multEscolha, alternativas, conteudo, turma,
        foto, dificuldade, referencia, compartilhar, codProfessor
    } = req.body;

    try {
        // Verifica se os dados obrigatórios estão presentes
        if (!enunciado || !dificuldade || !conteudo) {
            return res.status(422).json({ error: 'Dados obrigatórios faltando' });
        }

        // Atualiza a questão no banco de dados
        const questaoAtualizada = await Questoes.findByIdAndUpdate(id, {
            codQuestao,
            enunciado,
            multEscolha, 
            alternativas,
            conteudo,
            turma,
            foto,
            dificuldade,
            referencia,
            compartilhar,
            codProfessor
        }, { new: true });

        if (!questaoAtualizada) {
            return res.status(404).json({ message: 'Questão não encontrada' });
        }

        res.status(200).json({ message: 'Questão atualizada com sucesso', questao: questaoAtualizada });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router
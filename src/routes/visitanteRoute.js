const express = require('express');
const router = express.Router();
const { graficoPorGenero, graficoPorCidade, listarTodos, listarUm } = require('../controllers/visitanteController');

router.get('/grafico-por-genero', async (req, res) => {
    res.send(await graficoPorGenero());
    // #swagger.tags = ['Visitantes por gênero']
    // #swagger.summary = 'Este endpoit devolve um array de objetos contendo o nome do gênero e o total'
});

router.get('/grafico-por-cidade', async (req, res) => {
    res.send(await graficoPorCidade());
});

router.get('/', async (req, res) => {
    res.send(await listarTodos());
});

router.get('/:id', async (req, res) => {
    res.send(await listarUm(req.params.id));
});

module.exports = router;
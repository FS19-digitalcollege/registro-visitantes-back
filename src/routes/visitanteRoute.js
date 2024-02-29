const express = require('express');
const router = express.Router();
const { graficoPorGenero, graficoPorCidade } = require('../controllers/visitanteController');

router.get('/grafico-por-genero', async (req, res) => {
    res.send(await graficoPorGenero());
});

router.get('/grafico-por-cidade', async (req, res) => {
    res.send(await graficoPorCidade());
});

module.exports = router;
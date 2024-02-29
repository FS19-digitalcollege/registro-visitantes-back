const { execute } = require('../services/index');

const graficoPorGenero = async () => {
    return await execute("SELECT COUNT(*) as total, visitante_genero as genero FROM visitantes GROUP BY visitante_genero;");
}

const graficoPorCidade = async () => {
    return await execute("SELECT COUNT(*) as total, visitante_cidade as cidade FROM visitantes GROUP BY visitante_cidade;");
}

module.exports = {
    graficoPorGenero,
    graficoPorCidade
}
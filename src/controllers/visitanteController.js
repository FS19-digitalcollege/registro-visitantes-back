const { execute } = require('../services/index');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const graficoPorGenero = async () => {
    return await execute("SELECT COUNT(*) as total, visitante_genero as genero FROM visitantes GROUP BY visitante_genero;");
}

const graficoPorCidade = async () => {
    return await execute("SELECT COUNT(*) as total, visitante_cidade as cidade FROM visitantes GROUP BY visitante_cidade;");
}

const listarTodos = async () => {
    return prisma.visitantes.findMany();
}

const listarUm = async (id) => {
    return prisma.visitantes.findFirst({ where: { visitante_id: id}});
}

module.exports = {
    graficoPorGenero,
    graficoPorCidade,
    listarTodos,
    listarUm
}
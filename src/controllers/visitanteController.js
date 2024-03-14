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
    return await prisma.visitantes.findMany();
}

const listarUm = async (id) => {
    return await prisma.visitantes.findFirst({ where: { visitante_id: id}});
}

const criarVisitante = async (dados) => {
    // return await prisma.visitantes.create(dados);
    return await execute(`INSERT INTO visitantes (visitante_nome,visitante_genero,visitante_bairro,visitante_cidade,visitante_cpf,visitante_profissao,visitante_idade, visitante_data) VALUES ('${dados.visitante_nome}','${dados.visitante_genero}','${dados.visitante_bairro}','${dados.visitante_cidade}','${dados.visitante_cpf}','${dados.visitante_profissao}','${dados.visitante_idade}','2024-03-14 09:57:00');`);
}

module.exports = {
    graficoPorGenero,
    graficoPorCidade,
    listarTodos,
    listarUm,
    criarVisitante
}
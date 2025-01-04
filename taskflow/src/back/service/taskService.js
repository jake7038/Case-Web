import database from "../database/index.js";

async function createTask(nome, descricao, data, etapa1, etapa2, etapa3, listaId) {
    const newtask = { nome, descricao, data, etapa1, etapa2, etapa3, lista_id: listaId };
    await database("task").insert(newtask);
    return "Tarefa criada com sucesso!";
}

export default {createTask};
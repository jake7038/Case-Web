import database from "../database/index.js";

async function createLista(nome, quadroId) {
    const novaLista = { nome, quadro_id: quadroId };
    await database("lista").insert(novaLista);
    return "Lista criada com sucesso!";
}

async function readListas(quadroId) {
    const listas = await database("lista").select("*").where({ quadro_id: quadroId });

    if (listas.length === 0) {
        throw new Error("Nenhuma lista encontrada");
    }

    return listas;
}

async function updateLista(id, nome) {
    const listaExistente = await database("lista").select("*").where({ id }).first();

    if (!listaExistente) {
        throw new Error("Lista não encontrada");
    }

    await database("lista").update({ nome }).where({ id });
    return "Lista atualizada com sucesso!";
}

async function deleteLista(id) {
    const listaExistente = await database("lista").select("*").where({ id }).first();

    if (!listaExistente) {
        throw new Error("Lista não encontrada");
    }

    await database("lista").delete().where({ id });
    return "Lista excluída com sucesso!";
}

export default { createLista, readListas, updateLista, deleteLista };

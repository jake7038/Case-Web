import database from "../database/index.js";

async function createQuadro(nome, descricao, usuario_id) {
    
    const quadro = {
        nome: nome,
        descricao: descricao,
        usuario_id: usuario_id
    }

    await database("quadro").insert(quadro);

    return "Registrado!"
}

async function readQuadros(userId) {
    const quadros = await database("quadros")
        .select("*")
        .where({ usuario_id: userId });

    if (quadros.length === 0) {
        throw new Error("Nenhum quadro encontrado para este usuário.");
    }

    return quadros;
}

async function updateQuadro(quadroId, nome, descricao, userId) {
    const quadro = await database("quadros")
        .select("*")
        .where({ id: quadroId, usuario_id: userId })
        .first();

    if (!quadro) {
        throw new Error("Quadro não encontrado ou não pertence ao usuário.");
    }

    const quadroAtualizado = {
        nome: nome,
        descricao: descricao,
    };

    await database("quadros")
        .update(quadroAtualizado)
        .where({ id: quadroId });

    return "Quadro atualizado com sucesso!";
}

async function deleteQuadro(quadroId, userId) {
    const quadro = await database("quadros")
        .select("*")
        .where({ id: quadroId, usuario_id: userId })
        .first();

    if (!quadro) {
        throw new Error("Quadro não encontrado ou não pertence ao usuário.");
    }

    await database("quadros")
        .delete()
        .where({ id: quadroId });

    return "Quadro excluído com sucesso!";
}

export default { createQuadro, readQuadros, updateQuadro, deleteQuadro };

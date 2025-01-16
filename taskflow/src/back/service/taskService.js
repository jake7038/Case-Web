import database from "../database/index.js";

async function createTask(nome, descricao, data, etapa1, etapa2, etapa3, lista_id) {
    const newTask = {
        nome,
        descricao,
        data,
        etapa1,
        etapa2,
        etapa3,
        estado: false, // Inicia sempre como false
        lista_id
    };

    const [taskId] = await database("task").insert(newTask);
    return { id: taskId, ...newTask };
}

async function readTasks(lista_id) {
    const tasks = await database("task").where({ lista_id }).select("*");
    if (tasks.length === 0) {
        throw new Error("Nenhuma tarefa encontrada para esta lista.");
    }
    return tasks;
}

async function updateTask(id, nome, descricao, data, etapa1, etapa2, etapa3, estado) {
    const task = await database("task").where({ id }).first();
    if (!task) {
        throw new Error("Tarefa não encontrada.");
    }
    if(data == ""){
        data = task.data;
    }

    const updatedTask = {
        nome: nome || task.nome,
        descricao: descricao || task.descricao,
        data: data || task.data,
        etapa1:  etapa1 || task.etapa1,
        etapa2:  etapa2 || task.etapa2,
        etapa3:  etapa3 || task.etapa3,
        estado:  estado || task.estado,
    };

    await database("task").update(updatedTask).where({ id });
    return { id, ...updatedTask };
}

async function deleteTask(id) {
    const task = await database("task").where({ id }).first();
    if (!task) {
        throw new Error("Tarefa não encontrada.");
    }

    await database("task").delete().where({ id });
}

export default { createTask, readTasks, updateTask, deleteTask };

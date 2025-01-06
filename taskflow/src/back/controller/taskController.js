import taskService from "../service/taskService.js";

async function createTask(req, res) {
    try {
        const { lista_id } = req.params; // Pega lista_id da URL
        const { nome, descricao, data, etapa1, etapa2, etapa3 } = req.body;
        const task = await taskService.createTask(nome, descricao, data, etapa1, etapa2, etapa3, lista_id);
        res.json({ message: "Tarefa criada com sucesso!", task });
    } catch (error) {
        res.json({ erro: error.message });
    }
}

async function readTasks(req, res) {
    try {
        const { lista_id } = req.params; // Pega lista_id da URL
        const tasks = await taskService.readTasks(lista_id);
        res.json({ registros: tasks });
    } catch (error) {
        res.json({ erro: error.message });
    }
}


async function updateTask(req, res) {
    try {
        const { id } = req.params;
        const { nome, descricao, data, estado, lista_id } = req.body;
        const updatedTask = await taskService.updateTask(id, nome, descricao, data, estado, lista_id);
        res.json({ message: "Tarefa atualizada com sucesso!", updatedTask });
    } catch (error) {
        res.json({ erro: error.message });
    }
}

async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        await taskService.deleteTask(id);
        res.json({ message: "Tarefa excluída com sucesso!" });
    } catch (error) {
        res.json({ erro: error.message });
    }
}

export { createTask, readTasks, updateTask, deleteTask };

import taskService from "../service/taskService.js"

async function createTask(req, res) {
    try {
        const { nome, descricao, data, etapa1, etapa2, etapa3} = req.body;
        const {listaId} = req.params; 
        
        if (!nome ) {
            throw new Error("Nome tem que ser preenchido");
        }

        const message = await taskService.createTask(nome, descricao, data, etapa1, etapa2, etapa3, listaId);

        res.json({message: message})
    } catch (e) {
        res.json({erro: e.message})
    }
}

export {createTask};
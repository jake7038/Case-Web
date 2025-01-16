import listaService from "../service/listaService.js";

async function createLista(req, res) {
    try {
        const { nome } = req.body;
        const quadroId = req.params.quadroId;

        if (!nome || !quadroId) {
            return res.json({ erro: "Nome e quadroId são obrigatórios" });
        }

        const message = await listaService.createLista(nome, quadroId);
        
        res.json({message: message})
    } catch (e) {
        res.json({ erro: e.message });
    }
}

async function readListas(req, res) {
    try {
        const quadroId = req.params.quadroId;
        const listas = await listaService.readListas(quadroId);
        res.json({ registros: listas });
    } catch (e) {
        res.json({ erro: e.message });
    }
}

async function updateLista(req, res) {
    try {
        const { nome } = req.body;
        const id = req.params.id;

        if (!nome) {
            return res.status(400).json({ erro: "Nome é obrigatório" });
        }

        const message = await listaService.updateLista(id, nome);
        res.json({ message });
    } catch (e) {
        res.json({ erro: e.message });
    }
}

async function deleteLista(req, res) {
    try {
        const id = req.params.id;
        const message = await listaService.deleteLista(id);
        res.json({ message });
    } catch (e) {
        res.json({ erro: e.message });
    }
}

export { createLista, readListas, updateLista, deleteLista };

import quadroService from "../service/quadroService.js";

async function createQuadro(req, res) {
    try {
        const { nome, descricao } = req.body;
        const userId = req.id; 
        
        if (!nome ) {
            throw new Error("Nome tem que ser preenchido");
        }

        const message = await quadroService.createQuadro(nome, descricao, userId);

        res.json({message: message})
    } catch (e) {
        res.json({erro: e.message})
    }
}

async function readQuadros(req, res) {
    try {
        const userId = req.id; 
        const quadros = await quadroService.readQuadros(userId);

        res.json({ registros: quadros });
    } catch (e) {
        res.json({ erro: e.message });
    }
}

async function updateQuadro(req, res) {
    try {
        const { nome, descricao } = req.body;
        const quadroId = req.params.id;
        const userId = req.id; 


        const message = await quadroService.updateQuadro(quadroId, nome, descricao, userId);

        res.json({ message });
    } catch (e) {
        res.json({ erro: e.message });
    }
}

async function deleteQuadro(req, res) {
    try {
        const quadroId = req.params.id;
        const userId = req.id; 

        const message = await quadroService.deleteQuadro(quadroId, userId);

        res.json({ message });
    } catch (e) {
        res.json({ erro: e.message });
    }
}

export { createQuadro, readQuadros, updateQuadro, deleteQuadro };

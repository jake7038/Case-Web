import userService from "../service/userService.js";
import { sendEmail } from "../email/index.js";

async function readUser(req, res) {
    try {
        const usuarios = await userService.readUser();
        res.json({ registros: usuarios });
    } catch (e) {
        res.json({ erro: e.message });
    }
}

async function readUserById(req,res){
    try{
        const id = req.id;
        const usuario = await userService.readUserById(id);
        res.json({registro: usuario})
    } catch(e){
        res.json({erro: e.message})
    }
}





async function createUser(req,res){
    try{
        const { nome, email, senha, foto } = req.body;
        const message = await userService.createUser(nome, email, senha, foto);

        res.json({message: message})
        
    } catch(e){
        res.status(401).json({erro: e.message})
    }
}



async function updateUser(req,res){
    try{
        const { nome, email, senha, foto } = req.body;
        const id = req.params.id
        const message = await userService.updateUser(id, nome, email, senha, foto);

        res.json({message: message})

    } catch(e){
        res.json({erro: e.message})
    }
}


async function deleteUser(req,res){
    try{
        const id = req.params.id;
        const message = await userService.deleteUser(id);

        res.json({message: message})
    } catch(e){
        res.json({erro: e.message})
    }
}

async function login(req,res){
    try{
        const {email, senha } = req.body;
        if (!email || !senha) {
            return res.status(400).json({ erro: "E-mail e senha são obrigatórios" });
        }
        const token = await userService.login(email, senha);

        res.status(200).json({ token }); 

    } catch(e){
        res.status(401).json({ erro: e.message });
    }
}

async function readUserInfo(req, res) {
    try {
        const id = req.id; 
        const usuario = await userService.readUserInfo(id);

        res.json({ usuario }); // Retorna tudo do usuário
    } catch (e) {
        res.json({ erro: e.message }); 
    }
}

    const handleSendEmail = async (req, res) => {
    const { email: recipientEmail, senha } = req.body;
    if (!recipientEmail || !senha) {
        return res.status(400).json({ error: "Email e senha são obrigatórios." });
    }
        
    try {
        await sendEmail(recipientEmail, senha);
        await userService.updateSenha(recipientEmail,senha);
        res.status(200).json({ message: "Email enviado com sucesso!" });

    } catch (error) {
        console.error("Erro ao enviar email:", error);
        res.status(500).json({ error: "Erro ao enviar email. Tente novamente mais tarde." });
    }
    };




export { readUser, createUser, readUserById, updateUser, deleteUser, login, readUserInfo, handleSendEmail };

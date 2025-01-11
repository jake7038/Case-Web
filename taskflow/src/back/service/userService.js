import database from "../database/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


async function readUser(){
    const usuario = await database("usuario").select("*");

    if(usuario.length===0){
        throw new Error("Sem usuários");
    }

    return usuario

}

async function readUserById(id){
    const usuario = await database("usuario").select("*").where({id:id}).first();

    if(!usuario){
        throw new Error("Desconhecido");
    }

    return usuario
}

async function createUser(nome, email, senha, foto) {

    const val = 0
    const existingUser = await database("usuario").where({ email: email }).first();


    if (existingUser) {
        val = 1;
        return "Este email já está registrado!";
    }
    
    if(val == 0){
         const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(senha, salt);

    const usuario = {
        nome: nome,
        email: email,
        senha: hash,
        foto: foto
    }

    await database("usuario").insert(usuario);

    return "Registrado!"
    }
       
    
    
}


async function updateUser(id, nome, email, senha, foto) {
  
    const busca = await database("usuario").select("*").where({id:id}).first();

    if(!busca){
        throw new Error("Desconhecido");
    }

    const val = 0
    const existingUser = await database("usuario").where({ email: email }).first();
    if (existingUser) {
        val = 1;
        return "Este email já está registrado!";
    }

    if(val == 0){
    let hash
    if(senha){
        const salt = bcrypt.genSaltSync();
        hash = bcrypt.hashSync(senha, salt)
    }

    const usuario_novo = {
        nome: nome || busca.nome,
        email: email || busca.email, 
        senha: hash || busca.senha,
        foto: foto || busca.foto,
    }

    await database("usuario").update(usuario_novo).where({id:id})

    return "Atualizado!"
}
}


async function deleteUser(id){
    const usuario = await database("usuario").select("*").where({id:id}).first();

    if(!usuario){
        throw new Error("Desconhecido");
    }

    await database("usuario").delete().where({id:id})

    return "Deletado!"

}


async function login(email, senha) {
    const usuario = await database("usuario").select("*").where({email:email}).first();

    if(!usuario){
        throw new Error("Desconhecido");
    }

    const comparePass = bcrypt.compareSync(senha, usuario.senha);
    if(!comparePass){
        throw new Error("Senha errada");
    }

    const payload = {
        id: usuario.id
    }

    const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '24h'});
    return token;
}

async function readUserInfo(id) { //puxa as informações do usuário... embora pela lógica devesse puxar puxar só o nome eu acho.
    const usuario = await database("usuario").select("nome").where({ id: id }).first();

    if (!usuario) {
        throw new Error("Usuário não encontrado");
    }

    return usuario.nome;
}


export default { readUser, createUser, readUserById, updateUser, deleteUser, login, readUserInfo } ;

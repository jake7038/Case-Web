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

async function updateUser(id, nome, email, senha, foto) {

    const busca = await database("usuario").select("*").where({id:id}).first();

    if(!busca){
        throw new Error("Desconhecido");
    }

    let hash
    if(senha){
        const salt = bcrypt.genSaltSync();
        hash = bcrypt.hashSync(senha, salt)
    }

    const usuario_novo = {
        nome: nome,
        email: email,
        senha: hash,
        foto: foto
    }

    await database("usuario").update(usuario_novo).where({id:id})

    return "Atualizado!"
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

/*
async function readUserById(id){
    const usuario = await database("usuario").select("*").where({id:id}).first();

    if(!usuario){
        throw new Error("Desconhecido");
    }

    return usuario
}

async function createUser(nome, idade, email, senha) {

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(senha, salt);

    const usuario = {
        nome: nome,
        idade: idade,
        email: email,
        senha: hash
    }

    await database("usuario").insert(usuario);

    return "Registado!"
}

async function updateUser(id, nome, idade, email, senha) {

    const busca = await database("usuario").select("*").where({id:id}).first();

    if(!busca){
        throw new Error("Desconhecido");
    }

    let hash
    if(senha){
        const salt = bcrypt.genSaltSync();
        hash = bcrypt.hashSync(senha, salt)
    }

    const usuario_novo = {
        nome: nome,
        idade: idade,
        email: email,
        senha: hash
    }

    await database("usuario").update(usuario_novo).where({id:id})

    return "Atualizado!"
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

module.exports = {
    readUser,
    createUser,
    readUserById,
    updateUser,
    deleteUser,
    login
}
*/
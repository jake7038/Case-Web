import express from "express";
import "dotenv/config";


const porta = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

const app = express();

app.listen(porta,host, () => {

    console.log(`executando na porta ${porta}`)

})


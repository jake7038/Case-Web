import express from "express";

const porta = 3000;
const host = "localhost";

const app = express();

app.listen(porta,host, () => {

    console.log(`executando na porta ${porta}`)

})


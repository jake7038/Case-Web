import express from "express";
import 'dotenv/config';
import routes from "./routes.js";


const porta = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(porta,host, () => {

    console.log(`Executando na porta: ${porta}`)

})


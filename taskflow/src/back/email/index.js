import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config({ path: '../../../.env' });

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass:  process.env.EMAIL_PASSWORD,
    }
})

transport.sendMail({
    from: 'taskflow.emailrecupera@gmail.com',
    to: '',
    subject: 'teste foi',
    html: '<h1>Oi Erick:) </h1>',
    text: 'Funcionou!'
})
.then(() => console.log("email enviado sem erros"))
.catch((e) => console.log(`deu erro ao enviar o email ${process.env.EMAIL_USER} e ${process.env.EMAIL_PASSWORD}`, e));
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config({ path: '../../../.env' });

export const sendEmail = async (recipientEmail, senha) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
        },
    });
    
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipientEmail,
        subject: "Recuperação de Senha - TaskFlow",
        html: `<h1>Esse é um E-mail automático do TaskFlow</h1>
            <p>Sua nova senha é: <strong>${senha}</strong></p>
            <p>Por favor, faça login e altere sua senha o mais rápido possível.</p>`,
    };
    await transporter.sendMail(mailOptions);
};
import React from "react";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";




const FormEsqueciSenha = () => {
    const [email, setEmail] = useState("");
    const changeurl = useNavigate();

    const goLogin = () => {
    changeurl("/"); 
    };

    const enviarEmail = async (e) => {
        e.preventDefault(); 

        const recipientEmail = email;
        const now = new Date(); //senha se basea na hora do sistema... não é o ideal mas é randomico o bastante para esse projeto
        const senha = 'a' + `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
        try {
            const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: recipientEmail, senha }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
            alert(data.message); 
            } else {
            alert(`Erro: ${data.error}`);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao enviar email.");
        }
        };

    return (
        <div>
            <form action="" onSubmit={enviarEmail} className="grid">
                <div className="row mb-3 w-100">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-sm" placeholder="E-mail"></input>
                </div>
                <div className="row pt-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 text-center">
                        <button type="submit"  className="btn btn-primary w-100">Enviar</button>    
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 text-center pt-3 pb-3">
                        <button type="button" onClick={()=> goLogin()} className="btn btn-danger w-50">Voltar</button>    
                    </div>

                </div>
            </form>
        </div>
    );
};



export default FormEsqueciSenha;
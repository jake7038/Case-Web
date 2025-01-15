import React from "react";

const enviarEmail = async () => {
    const recipientEmail = "rafacosta.dev@gmail.com";
    const now = new Date(); //senha se basea na hora do sistema... não é o ideal mas é randomico o bastante para esse projeto
    const senha = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
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


const FormEsqueciSenha = () => {
    return (
        <div>
            <form action="" className="grid">
                <div className="row mb-3 w-100">
                        <input type="email" className="form-control form-control-sm" placeholder="E-mail"></input>
                </div>
                <div className="row pt-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 text-center">
                        <button type="button" onClick={()=> enviarEmail()} className="btn btn-primary w-50">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormEsqueciSenha;
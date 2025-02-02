import { useState } from "react";
import Paragrafo from "../Paragrafo";
import { useNavigate } from "react-router-dom"; 
import { ToastContainer,toast } from "react-toastify";

//css feito com css
const FormEntrar = () => {
    const [formData, setFormData] = useState({
        email: "",
        senha: ""
    });

    const janela = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Login realizado com sucesso!", {
                    onClose: () => {
                        localStorage.setItem("token", data.token);
                        janela("/dashboard");
                    }
                });
            } else {
                toast.error(`Erro: ${data.erro}`);
            }
        } catch (error) {
            toast.error("Erro ao realizar login: " + error.message);
        }
    };

    return (
    <form onSubmit={handleSubmit} className="grid">
        <div className="row mb-3 w-100">
        <input
            type="email"
            name="email"
            className="form-control form-control-sm"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
        />
        </div>

        <div className="row mb-3 w-100">
        <input
            type="password"
            name="senha"
            className="form-control form-control-sm"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
        />
        </div>

        <div className="row pt-4">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-center">
            <button type="submit" className="btn btn-primary w-50 mb-3">
            Entrar
            </button>
            <div onClick={()=> janela("/esqueci-senha")}>
            <Paragrafo cursor="pointer" >Esqueceu a Senha?</Paragrafo>
            </div>
            
        </div>

        <div className="col-md-3"></div>
        </div>

        <div className="text-center pt-4">
        </div>
        <ToastContainer autoClose={2000} position="top-center"></ToastContainer>
    </form>
    );
};

export default FormEntrar;
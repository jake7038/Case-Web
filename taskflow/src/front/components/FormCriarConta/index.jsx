import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";

const Form = () =>  {
        const [formData, setFormData] = useState({
            nome: "",
            email: "",
            senha: ""
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault(); 
            if (!formData.nome || !formData.email || !formData.senha) {
                toast.error("Um ou mais campos estão vazios")
            }
            else if((formData.senha.length < 4 && formData.senha.length > 0)|| formData.senha === "1234" || formData.senha === "4321" || !/[a-zA-Z]/.test(formData.senha) || !/[0-9]/.test(formData.senha)){
                toast.error("Senha muito fraca, ela deve conter ao menos um número e uma letra!");
            }else{
                try {
                    const response = await fetch("http://localhost:3000/user", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formData) 
                    });
        
                    const data = await response.json();
                    if (response.ok) {
                        toast.success("Conta criada com sucesso!");
                    } else {
                        toast.error(`Erro: ${data.erro}`);
                    }
                } catch (error) {
                    toast.error("Erro ao criar conta: " + error.message);
                }
            }
            
        };
    
    return (
    
    <form onSubmit={handleSubmit} className="grid">
    <div className="row mb-3 w-100">
    <input type="text"
            name="nome"
            className="form-control form-control-sm"
            placeholder="Nome do usuário"
            value={formData.nome}
            onChange={handleChange}/>
    </div>
    
    <div className="row mb-3 w-100 ">
    <input  type="email"
            name="email"
            className="form-control form-control-sm"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}/>
    </div>
    

    
    <div className="row mb-3 w-100">
    <input  type="password"
            name="senha"
            className="form-control form-control-sm"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}/>
    </div>

    <div className="row pt-4">
    <div className="col-md-3"></div>
    <div className="col-md-6 text-center">
    <button type="submit" className="btn btn-primary w-50">Criar Conta</button>
    </div>
    <div className="col-md-3"></div>
    </div>
    
    <ToastContainer autoClose={2000} position="top-center"></ToastContainer>
    </form>

);
};

export default Form;
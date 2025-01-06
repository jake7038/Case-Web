import { useState } from "react";


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
                    alert("Conta criada com sucesso!");
                } else {
                    alert(`Erro: ${data.erro}`);
                }
            } catch (error) {
                alert("Erro ao criar conta: " + error.message);
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
    
    
    </form>

);
};

export default Form;
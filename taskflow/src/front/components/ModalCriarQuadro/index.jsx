import { DivModal, DivOverlay } from "./styles";
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ModalCriarQuadro  = ({isOpen, userId, closeModal}) => {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        usuario_id: userId
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const closeButton = () => {
        closeModal();
    };

    const Submit = async (e) => {
        e.preventDefault(); 



        if (!formData.nome) {
            alert("Nome do Quadro é necessário para criar o quadro!");
            return;
        }

        const dataToSend = { ...formData, usuario_id: userId };

        try {
            const response = await fetch("http://localhost:3000/quadros", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(dataToSend) 
            });

            const data = await response.json();
            if (response.ok) {
                alert("Quadro criado com sucesso!");
            } else {
                alert(`Erro: ${data.erro}`);
            }
        } catch (error) {
            alert("Erro ao criar quadro: " + error.message);
        }
    };

    if(isOpen){
        return (
            <DivOverlay>
                <DivModal style={{height:'330px', width:'600px'}}>
                    
                    <div className="row pt-4">
                        <div className="col-md-4"></div>
                            <div className="col-md-4 text-center">
                                <h3>Criar Quadro</h3>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <FontAwesomeIcon icon={faX} onClick={closeButton} color="#e14c4c" style={{cursor:'pointer'}}></FontAwesomeIcon>
                            </div>
                            <div className="col-md-12">
                                <Paragrafo>Nome do Quadro</Paragrafo>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control mb-4 form-control-sm w-100"
                                    placeholder="Nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
    
                                <Paragrafo>Descrição do Quadro</Paragrafo>
                                <input
                                    type="text"
                                    name="descricao"
                                    className="form-control mb-4 form-control-sm w-100"
                                    placeholder="Descrição"
                                    value={formData.descricao}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-8 text-center">
                                <button onClick={Submit} className="btn btn-primary w-50">
                                    Salvar as mudanças
                                </button>
                            </div>
                            <div className="col-md-2"></div>
                    </div>
    
                </DivModal>
            </DivOverlay>
            
        );
    
    } else{
        return null
    }
    
}

export default ModalCriarQuadro;
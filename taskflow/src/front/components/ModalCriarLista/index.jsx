import { DivModal, DivOverlay } from "./styles";
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ModalCriarLista  = ({isOpen, quadroId, closeModal}) => {

    const [formData, setFormData] = useState({
        nome: "",
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
            alert("Preencha o nome da lista!");
            return;
        }

        const dataToSend = { nome: formData.nome, quadro_id: quadroId };


        try {
            const response = await fetch(`http://localhost:3000/quadros/${quadroId}/listas`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(dataToSend),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Lista criada com sucesso!");
                window.location.reload();
            } else {
                alert(`Erro: ${data.erro}`);
            }
        } catch (error) {
            alert("Erro ao criar lista: " + error.message);
        }
    };


    if(isOpen){
        return (
            <DivOverlay>
                <DivModal style={{height:'250px', width:'600px'}}>
                    <div className="row pt-4">
                        <div className="col-md-4"></div>
                            <div className="col-md-4 text-center">
                                <h3 fontSize={24}>Criar Lista</h3>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <FontAwesomeIcon icon={faX} onClick={closeButton} color="#e14c4c" style={{cursor:'pointer'}}></FontAwesomeIcon>
                            </div>
                            <div className="col-md-12">
                                <Paragrafo>Nome da Lista</Paragrafo>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control mb-4 form-control-sm w-100"
                                    placeholder="Nome do Quadro"
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-8 text-center">
                                <button  className="btn btn-primary w-50" onClick={Submit}>
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

export default ModalCriarLista;
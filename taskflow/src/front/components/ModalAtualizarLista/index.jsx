import { DivModal, DivOverlay } from "./styles";
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import e from "cors";


const ModalAtualizarLista  = ({isOpen, listaId, closeModal}) => {

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
            alert("digite um novo nome");
            return;
        }

        const dataToSend = { ...formData, lista_id: listaId };

        try {
            const response = await fetch(`http://localhost:3000/listas/${listaId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(dataToSend) 
            });

            const data = await response.json();
            if (response.ok) {
                alert("Lista Alterada com sucesso!");
                window.location.reload();
            } else {
                alert(`Erro: ${data.erro}`);
            }
        } catch (error) {
            alert("Erro ao alterar a lista: " + error.message);
        }
    };

    const deleteLista = async(e) => {
        e.preventDefault();

        const resp = confirm("Tem certeza que deseja excluir Toda a Lista? As tasks atreladas a ela também serão excluidas.");
        if(resp){
            
                try {
                    const response = await fetch(`http://localhost:3000/listas/${listaId}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
        
                    if (response.ok) {
                        alert("Lista Deletada com sucesso!");
                        window.location.reload();
                    } else {
                        const data = await response.json();
                        alert(`Erro ao deletar Lista: ${data.message}`);
                    }
                } catch (error) {
                    console.error("Erro ao deletar Lista:", error);
                    alert("Erro ao deletar a Lista.");
                }
            }
        };

    if(isOpen){
        return (
            <DivOverlay>
                <DivModal style={{height:'310px', width:'620px'}}>
                    <div  className="row pt-4">
                        <div className="col-md-4"></div>
                            <div className="col-md-4 text-center">
                                <h3>Atualizar Lista</h3>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <FontAwesomeIcon icon={faX} onClick={closeButton} color="#e14c4c" style={{cursor:'pointer'}}></FontAwesomeIcon>
                            </div>
                            <div className="col-md-12">
                                <Paragrafo>Novo Nome da Lista</Paragrafo>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control mb-4 form-control-sm w-100"
                                    placeholder="Nome da Lista"
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-8 text-center" style={{display:'grid', marginLeft:'5.7rem'}}>
                                <button onClick={Submit}   className="btn mt-2 btn-primary w-50">
                                    Salvar as mudanças
                                </button>
                                <button onClick={deleteLista} className="btn mt-3 btn-danger w-50">
                                    Excluir Lista
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

export default ModalAtualizarLista;
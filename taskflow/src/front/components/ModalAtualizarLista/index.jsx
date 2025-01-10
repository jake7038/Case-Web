import { DivModal, DivOverlay } from "./styles";
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import { useState } from "react";


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


    if(isOpen){
        return (
            <DivOverlay>
                <DivModal  >
                    <div  className="row pt-4">
                        <div className="col-md-4"></div>
                            <div className="col-md-4 text-center">
                                <Titulo fontSize={24}>Atualizar Lista</Titulo>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <button onClick={closeButton} type="button" className="btn btn-danger">X</button>
                            </div>
                            <div className="col-md-12">
                                <Paragrafo>Novo Nome da Lista</Paragrafo>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control mb-5 form-control-sm w-100"
                                    placeholder="Nome da Lista"
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-8 text-center">
                                <button onClick={Submit}    className="btn mt-5 btn-primary w-100">
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

export default ModalAtualizarLista;
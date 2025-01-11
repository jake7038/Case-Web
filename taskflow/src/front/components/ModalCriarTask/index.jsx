import { useState } from "react";
import PropTypes from "prop-types";
import Titulo from "../Titulo";
import { DivModal, DivOverlay } from "./styles";
import Paragrafo from "../Paragrafo";
import InputMask from "react-input-mask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCircleInfo } from "@fortawesome/free-solid-svg-icons";


const ModalCriarTask = ({ isOpen, listaId, closeModal }) => {
    const [formData, setFormData] = useState({
        nomeTask: "",
        descricaoTask: "",
        data: "",
        etapas: [""],
    });

    const closeButton = () => {
        closeModal();
    };

    const modificaData = (data) => {
        const [dia, mes, ano] = data.split("/"); 
        return `${ano}-${mes}-${dia}`; 
    };

    //post não está funcionando, alterar corretamente a URL e passar corretamente cada etapa
    const submit = async (e) => {
        e.preventDefault();
        if(!formData.nomeTask || !formData.data){
            alert("Tasks tem que ter ao menos Nome e Data!")
            return
        }
        try {
            const response = await fetch(`http://localhost:3000/listas/${listaId}/task`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    nome: formData.nomeTask,
                    descricao: formData.descricaoTask,
                    data: modificaData(formData.data),
                    etapa1: formData.etapas[0] || "",
                    etapa2: formData.etapas[1] || "",
                    etapa3: formData.etapas[2] || "",
                }),
            });

            if (response.ok) {
                alert("Task criada com sucesso!");
                window.location.reload();
            } else {
                const data = await response.json();
                alert(`Erro ao criar task: ${data.message}`);
            }
        } catch (error) {
            console.error("Erro ao criar task:", error);
            alert("Erro ao criar a tarefa.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleEtapaChange = (index, value) => {
        const novasEtapas = [...formData.etapas];
        novasEtapas[index] = value;
        setFormData((prev) => ({ ...prev, etapas: novasEtapas }));
    };

    const adicionarEtapa = () => {
        setFormData((prev) => ({ ...prev, etapas: [...prev.etapas, ""] }));
    };

    const removerEtapa = (index) => {
        const novasEtapas = [...formData.etapas];
        novasEtapas.splice(index, 1);
        setFormData((prev) => ({ ...prev, etapas: novasEtapas }));
    };


    if (isOpen) {
        return (
            <DivOverlay>
                <DivModal onSubmit={submit}>
                    <div className="row pt-4">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 mb-3 text-center">
                            <h3>Criar Task</h3>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={faX} onClick={closeButton} color="#e14c4c" style={{cursor:'pointer'}}></FontAwesomeIcon>
                        </div>

                        <div className="col-md-6">
                            <Paragrafo>Nome da Task</Paragrafo>
                            <input
                                type="text"
                                name="nomeTask"
                                className="form-control mb-4 form-control-sm w-100"
                                placeholder="Nome da Task"
                                value={formData.nomeTask}
                                onChange={handleInputChange}
                            />

                            <Paragrafo>Descrição da Task</Paragrafo>
                            <input
                                name="descricaoTask"
                                className="form-control mb-4 form-control-sm w-100"
                                placeholder="Descrição"
                                value={formData.descricaoTask}
                                onChange={handleInputChange}
                            />

                            <Paragrafo>Vencimento da Task</Paragrafo>
                            <InputMask
                                mask="99/99/9999"
                                type="text"
                                name="data"
                                className="form-control mb-4 form-control-sm w-100"
                                placeholder="dd/mm/aaaa"
                                value={formData.data}
                                onChange={handleInputChange}
                            />

                            <div style={{display:'flex'}}>
                                <FontAwesomeIcon icon={faCircleInfo} size="xs" color="#949494" style={{marginRight:'0.5rem', marginTop:'0.1rem'}}></FontAwesomeIcon>
                                <Paragrafo fontSize={12}>Tasks podem ter, no máximo, três etapas.</Paragrafo>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <Paragrafo>Etapas da Task</Paragrafo>
                            {formData.etapas.map((etapa, index) => (
                                <div key={index} className="d-flex align-items-center mb-3">
                                    <input
                                        type="text"
                                        className="form-control me-2"
                                        value={etapa}
                                        onChange={(e) => handleEtapaChange(index, e.target.value)}
                                        placeholder={`Etapa ${index + 1}`}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={() => removerEtapa(index)}
                                    >
                                        Remover
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="btn btn-success btn-sm mt-3"
                                onClick={() => {
                                    if(formData.etapas.length < 3){
                                        adicionarEtapa()
                                    }else{
                                        alert("Você só pode adicionar até 3 etapas.");
                                    }

                                }}
                            >
                                Adicionar Etapa
                            </button>
                        </div>

                        <div className="col-md-2"></div>
                        <div className="col-md-8 text-center">
                            <button type="submit" className="btn mt-3 btn-primary w-75">
                                Salvar as mudanças
                            </button>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </DivModal>
            </DivOverlay>
        );
    }

    return null;
};

ModalCriarTask.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalCriarTask;

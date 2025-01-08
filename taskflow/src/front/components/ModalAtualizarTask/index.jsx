import { useState } from "react";
import PropTypes from "prop-types";
import Titulo from "../Titulo";
import { DivModal, DivOverlay } from "./styles";
import Paragrafo from "../Paragrafo";
import InputMask from "react-input-mask";

const ModalAtualizarTask = ({ isOpen, closeModal, taskId }) => {
    const [formData, setFormData] = useState({
        nomeTask: "",
        descricaoTask: "",
        data: "",
        etapas: [""],
    });

    const modificaData = (data) => {
        const [dia, mes, ano] = data.split("/"); 
        return `${ano}-${mes}-${dia}`; 
    };

    const redButton = () => {
        closeModal();
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
                method: "PATCH",
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
                    lista_id: taskId
                }),
            });

            if (response.ok) {
                alert("Task atualizada com sucesso!");
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
                        <div className="col-md-4 text-center">
                            <Titulo fontSize={24}>Atualizar a Task{taskId}</Titulo>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2">
                            <button onClick={redButton} type="button" className="btn btn-danger">X</button>
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
                            <textarea
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
                            <button type="submit" className="btn mt-5 btn-primary w-100">
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

ModalAtualizarTask.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalAtualizarTask;

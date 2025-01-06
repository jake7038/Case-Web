import { useState } from "react";
import PropTypes from "prop-types";
import Titulo from "../Titulo";
import { DivModal, DivOverlay } from "./styles";
import Paragrafo from "../Paragrafo";

const ModalPerfil = ({ isOpen, userId, closeModal }) => {
    const [preview, setPreview] = useState(null);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        foto: "",
    });

    const redButton = () => {
        closeModal();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            setFormData((prevFormData) => ({ ...prevFormData, foto: previewUrl }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
    
        if (formData.senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem.");
            return;
        }
    
        try {
            
           // Verifica se há um arquivo selecionado
        const fileInput = document.querySelector('input[type="file"]');
        if (!fileInput.files[0]) {
            alert("Por favor, selecione uma foto.");
            return;
        }

        // Prepara os dados para upload da foto
        const photoFormData = new FormData();
        photoFormData.append("foto", fileInput.files[0]);

        // Realiza o upload da foto
        const uploadResponse = await fetch(`http://localhost:3000/user/${userId}/foto`, {
            method: "POST",
            body: photoFormData,
        });
    
            if (!uploadResponse.ok) {
                throw new Error("Erro ao fazer upload da foto");
            }
    
            const { path } = await uploadResponse.json();
            alert(path); //está dando undefinied
            // Atualizar os dados do usuário
            const response = await fetch(`http://localhost:3000/user/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    email: formData.email,
                    senha: formData.senha,
                    foto: path, 
                }),
            });
    
            if (response.ok) {
                alert("Usuário alterado com sucesso!");
            } else {
                const data = await response.json();
                alert(`Erro: ${data.erro || "Não foi possível atualizar o usuário."}`);
            }
        } catch (error) {
            alert("Erro ao atualizar usuário ou fazer upload.");
            console.error(error);
        }
    };
    

    if (isOpen) {
        return (
            <DivOverlay>
                <DivModal onSubmit={submit}>
                    <div className="row pt-4">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text-center">
                            <Titulo fontSize={24}>Alterar Perfil</Titulo>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2">
                            <button onClick={redButton} type="button" className="btn btn-danger">X</button>
                        </div>
                        <div className="col-md-6">
                            <Paragrafo>Alterar nome</Paragrafo>
                            <input
                                type="text"
                                name="nome"
                                className="form-control mb-5 form-control-sm w-100"
                                placeholder="Novo nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />

                            <Paragrafo>Alterar E-mail</Paragrafo>
                            <input
                                type="text"
                                name="email"
                                className="form-control mb-5 form-control-sm w-100"
                                placeholder="Novo E-mail"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <Paragrafo>Alterar Senha</Paragrafo>
                            <input
                                type="password"
                                name="senha"
                                className="form-control mb-3 form-control-sm w-100"
                                placeholder="Nova Senha"
                                value={formData.senha}
                                onChange={handleChange}
                            />

                            <Paragrafo>Confirmar Senha</Paragrafo>
                            <input
                                type="password"
                                name="confirmarSenha"
                                className="form-control mb-3 form-control-sm w-100"
                                placeholder="Confirmar nova Senha"
                                value={formData.confirmarSenha}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 foto">
                            <Paragrafo>Alterar Foto</Paragrafo>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="form-control mb-3"
                            />
                            {preview && (
                                <div className="text-center">
                                    <Paragrafo>Pré-visualização:</Paragrafo>
                                    <img src={preview} alt="Preview" style={{ maxWidth: "200px", marginTop: "4px" }}/>
                                </div>
                            )}
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
    } else {
        return null;
    }
};

ModalPerfil.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalPerfil;

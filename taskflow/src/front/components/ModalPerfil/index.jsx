import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { DivModal, DivOverlay } from "./styles";
import Paragrafo from "../Paragrafo";
import { ToastContainer, toast } from "react-toastify";

const ModalPerfil = ({ isOpen, userId, closeModal }) => {
    const [preview, setPreview] = useState(null);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        foto: "",
    });

    const closeButton = () => {
        closeModal();
    };

    const janela = useNavigate();

    const deleteUsuario = async () => {
        if(confirm("Tem certeza que quer deletar sua conta? Todas suas informações serão perdidas!")) {
            const token = localStorage.getItem("token");
            if(!token) {
                alert("Usuário não autenticado!");
                return;
            }

            try {
                const response = await fetch(`http://localhost:3000/user/${userId}` , {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "applications/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if(response.ok) {
                    alert("Usuário deletado com sucesso!");
                    janela("/");
                } else {
                    alert("Erro ao deletar usuário");
                }
            } catch (error) {
                console.error("Erro ao deletar usuário:", error);
            } 
        }
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
        if(formData.senha === ""){

        }else{
            if(formData.senha.length < 4 || formData.senha === "1234" || formData.senha === "4321" || !/[a-zA-Z]/.test(formData.senha) || !/[0-9]/.test(formData.senha)  ){
                alert("senha Muito Fraca. Ela deve conter ao menos um número e uma letra");
                return;
            }
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
                window.location.reload();
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
                        <div className="col-md-4 mb-3 text-center">
                            <h3>Alterar Perfil</h3>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={faX} onClick={closeButton} color="#e14c4c" style={{cursor:'pointer'}}></FontAwesomeIcon>
                        </div>
                        <div className="col-md-6">
                            <Paragrafo>Alterar nome</Paragrafo>
                            <input
                                type="text"
                                name="nome"
                                className="form-control mb-4 form-control-sm w-100"
                                placeholder="Novo nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />

                            <Paragrafo>Alterar E-mail</Paragrafo>
                            <input
                                type="text"
                                name="email"
                                className="form-control mb-4 form-control-sm w-100"
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
                            {preview ? (
                                <div className="text-center">
                                    <img src={preview} alt="Preview" style={{ maxWidth: "200px", marginTop: "4px" }}/>
                                </div>
                            ) : (
                                <div style={{background:'#e6e8eb', borderRadius:'10px', width:'15rem', height:'15rem', display:'flex', justifyContent:'center', alignItems:'center', margin:'auto'}}>
                                    <Paragrafo>Pré-visualização da foto</Paragrafo>
                                </div>
                            )}
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-8 text-center" style={{display:'grid', marginLeft:'6.5rem'}}>
                            <button type="submit"  className="btn mt-1 btn-primary w-50">
                                Salvar as mudanças
                            </button>

                            <button type="button" className="btn mt-3 btn-danger w-50" onClick={() => deleteUsuario()}>
                                Excluir Usuário
                            </button>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </DivModal>
                <ToastContainer autoClose={2000}></ToastContainer>
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

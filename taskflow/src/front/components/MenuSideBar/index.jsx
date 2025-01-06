import Paragrafo from "../Paragrafo"; 
import { DivSlide, Divrow, ImgUser, Divrowlast , DivFlex } from "./styles";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faArrowRightFromBracket, faPen, faGear } from '@fortawesome/free-solid-svg-icons'
import ModalPerfil from "../ModalPerfil";
import ModalCriarTask from "../ModalCriarTask";


const MenuSlideBar = (req) => {
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [emailUsuario, setEmailUsuario] = useState("");
    const [fotoUsuario, setFotoUsuario] = useState("../../assets/4foto.jpeg");
    const [modalPerfilOpen, setModalPerfilOpen] = useState(false);
    const [idUsuario, setIdUsuario] = useState();
    const [modalCriarTask, setModalCriarTask] = useState(false);

    const closeModal = () => setModalPerfilOpen(false);

    useEffect(() => {
        const fetchUsuario = async () => {
            const token = localStorage.getItem("token"); // Pega o token armazenado

            if (!token) {
                alert("Usuário não autenticado!");
                return;
            }
            

            try {
                const response = await fetch("http://localhost:3000/user/info", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });
                
                if (response.ok) {
                    const data = await response.json();
                    setNomeUsuario(data.registro.nome);
                    setEmailUsuario(data.registro.email);  
                    setIdUsuario(data.registro.id);
                    setFotoUsuario(data.registro.foto);
                } else {
                    alert("Erro ao buscar informações do usuário");
                }
            } catch (error) {
                console.error("Erro ao buscar informações do usuário:", error);
            }
        };

        fetchUsuario();
        
    }, []);

    return(<DivSlide className="min-vh-100 ">
        <div className="row pb-5 pt-2 ">
            <div className="row mx-auto">
            <div className="col-md-4 ">
                <ImgUser className="w-100"  src={fotoUsuario} alt="" />
            </div>
            <div className="col-md-8 text-start pt-1">
            <Paragrafo  marginb={0} tipo="preto" fontSize={18}>{nomeUsuario}</Paragrafo>
            <Paragrafo  marginb={0} tipo="preto" fontSize={18}>{emailUsuario}</Paragrafo>
            </div>
            </div>
        </div>

        <DivFlex className="text-center d-flex flex-column  align-items-center pt-5 ">
        <Divrow onClick={() => setModalCriarTask(true)} className=" mb-4 mt-4  p-3">
            <div className="d-flex flex-row w-0 gap-3">
                <Paragrafo cursor="pointer" marginb={0} tipo="branco" fontSize={16}> <FontAwesomeIcon icon={faPen} /> </Paragrafo>
                <Paragrafo cursor="pointer" marginb={0} tipo="branco" fontSize={16}> {req? "Criar Novo Quadro": "Criar Nova Tarefa"}</Paragrafo>
            </div>
        </Divrow>

        <Divrow onClick={() => setModalPerfilOpen(true)} className=" mb-4 mt-4   p-3 ">
            <div className="d-flex flex-row w-0 gap-3">
                <Paragrafo cursor="pointer" marginb={0} tipo="branco" fontSize={16}> <FontAwesomeIcon icon={faGear} /> </Paragrafo>
                <Paragrafo cursor="pointer" marginb={0} tipo="branco" fontSize={16}>Alterar Perfil</Paragrafo>
            </div>
        </Divrow>

        <Divrow className=" mb-4 mt-4  p-3 ">
            <div className="d-flex flex-row w-0 gap-3">
                <Paragrafo cursor="pointer" marginb={0} tipo="branco" fontSize={16}><FontAwesomeIcon icon={faMoon} /></Paragrafo>
                <Paragrafo cursor="pointer" marginb={0} tipo="branco" fontSize={16}>Alterar Aparência</Paragrafo>
            </div>
        </Divrow>

        <Divrowlast className="   p-3 ">
            <div className="d-flex flex-row w-0 gap-3">
                <Paragrafo cursor="pointer" marginb={0} tipo="vermelho" fontSize={16}> <FontAwesomeIcon icon={faArrowRightFromBracket} /> </Paragrafo>
                <Paragrafo cursor="pointer" marginb={0} tipo="vermelho" fontSize={16}>{req? "Sair":"Voltar"}</Paragrafo>
            </div>
        
        </Divrowlast>
        </DivFlex>
        
        
        <ModalPerfil isOpen={modalPerfilOpen} userId={idUsuario} closeModal={closeModal}></ModalPerfil>
        <ModalCriarTask isOpen={modalCriarTask} closeModal={closeModal}></ModalCriarTask>

    </DivSlide>)
}
    


export default MenuSlideBar;
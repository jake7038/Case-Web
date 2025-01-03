import Paragrafo from "../Paragrafo"; 
import { DivSlide, Divrow, ImgUser, Divrowlast , DivFlex } from "./styles";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faArrowRightFromBracket, faPen, faGear } from '@fortawesome/free-solid-svg-icons'

const MenuSlideBar = () => {
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [emailUsuario, setEmailUsuario] = useState("");

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
                <ImgUser className="w-100"  src="https://placehold.co/400" alt="" />
            </div>
            <div className="col-md-8 text-start pt-1">
            <Paragrafo  marginb={0} tipo="preto" fontSize={18}>{nomeUsuario}</Paragrafo>
            <Paragrafo  marginb={0} tipo="preto" fontSize={18}>{emailUsuario}</Paragrafo>
            </div>
            </div>
        </div>

        <DivFlex className="text-center d-flex flex-column  align-items-center pt-5 ">
        <Divrow className=" mb-4 mt-4  p-3">
            <div className="d-flex flex-row w-0 gap-3">
                <Paragrafo cursor="pointer" marginb={0} tipo="branco" fontSize={16}> <FontAwesomeIcon icon={faPen} /> </Paragrafo>
                <Paragrafo cursor="pointer" marginb={0} tipo="branco" fontSize={16}>Criar Nova Tarefa</Paragrafo>
            </div>
        </Divrow>

        <Divrow className=" mb-4 mt-4   p-3 ">
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
                <Paragrafo cursor="pointer" marginb={0} tipo="vermelho" fontSize={16}>sair</Paragrafo>
            </div>
        
        </Divrowlast>
        </DivFlex>
        

        
    </DivSlide>)
}
    


export default MenuSlideBar;
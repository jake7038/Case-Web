import Paragrafo from "../Paragrafo"; 
import { DivSlide } from "./styles";
import React, { useEffect, useState } from "react";


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
                const response = await fetch("http://localhost:3000/user/name", {
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

    return(<DivSlide>

        <Paragrafo tipo="branco">seu nome é {nomeUsuario}</Paragrafo>
        <Paragrafo tipo="branco">seu email é {emailUsuario}</Paragrafo>
    </DivSlide>)
}
    


export default MenuSlideBar;
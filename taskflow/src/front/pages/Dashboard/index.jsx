
import React, { useEffect, useState } from "react";
import Titulo from "../../components/Titulo";
import MenuSlideBar from "../../components/MenuSideBar";
import { GridQuadros } from "./styles";
import Quadro from "../../components/Quadro";

const Dashboard = () => {
    // Estados para armazenar os quadros do usuário
    const [quadros, setQuadros] = useState([]); //armazena os quadros
    const [erro, setErro] = useState(""); //estado que pega o erro para mandar a mensagem de quando não tem quadro

    useEffect(() => {
        const fetchQuadros = async () => {
            const token = localStorage.getItem("token"); // Pega o token armazenado
    
            if (!token) {
                setErro("Token ausente. Usuário não autenticado.");
                return;
            }
                
            try {
                const response = await fetch("http://localhost:3000/quadros", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });
                    
                if (response.ok) {
                    const data = await response.json();
                    if (data.registros && data.registros.length > 0) {
                        setQuadros(data.registros); // Pega os quadors
                    } else {
                        setErro("sem quadro "); 
                    }
                } else {
                    const errorData = await response.json();
                    setErro(errorData.erro || "Erro ao buscar os quadros.");
                }
            } catch (error) {
                console.error("Erro ao buscar os quadros:", error);
                
            }
        };
    
        fetchQuadros();
    }, []);

    return (
        <body className="">
            <div className="row flex-row gx-0">
                <div className="col-md-10 p-4">
                    <Titulo>
                        <img src="src/front/assets/logo.png" width={80} alt="TaskFlow Logo" />
                        TaskFlow
                    </Titulo>
                    <div className="row flex-row gx-0">
                        <div style={{ display: "flex" }}>
                            <GridQuadros>
                                {erro ? (
                                    <div style={{ textAlign: "center", color: "#787878", marginTop: "20px" }}>
                                        <p>Comece criando seu primeiro Quadro no menu lateral! </p>
                                    </div>
                                ) : (
                                    quadros.map((quadro) => (
                                        <Quadro 
                                            quadroId={quadro.id} 
                                            nome={quadro.nome} 
                                            descricao={quadro.descricao}
                                        />
                                    ))
                                )}
                            </GridQuadros>
                        </div>
                    </div>
                </div>
                <div style={{position: "sticky", top: "0", height: "100vh", overflowY: "auto"}} className="min-vh-100 col-md-2 p-0 text-center">
                    <MenuSlideBar req={true}  />
                </div>
            </div>
        </body>
    );
};

export default Dashboard;

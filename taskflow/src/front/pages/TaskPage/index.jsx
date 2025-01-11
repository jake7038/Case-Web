import Titulo from "../../components/Titulo";
import CategoriaTarefas from "../../components/CategoriaTarefas";
import Tarefa from "../../components/Tarefa";
import { ListaTarefas, GridListas} from "./styles";
import MenuSlideBar from "../../components/MenuSideBar";
import ModalCriarTask from "../../components/ModalCriarTask";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";




const TaskPage = () => {

    const location = useLocation();
    const quadroId = location.state?.quadroId; //pega a variavel do quadro
    const [erro, setErro] = useState("");
    
    const [listas, setListas] = useState([]); //armazena as listas

    const [modalCriarTask, setModalCriarTask] = useState(false);

        const closeModal = () =>{
            setModalCriarTask(false);
        } 


        useEffect(() => {
                const fetchListas = async () => {
                    const token = localStorage.getItem("token"); // Pega o token armazenado
            
                    if (!token) {
                        setErro("Token ausente. Usuário não autenticado.");
                        return;
                    }
                        
                    try {
                        const response = await fetch(`http://localhost:3000/quadros/${quadroId}/listas`, {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${token}`, 
                            },
                        });
                            
                        if (response.ok) {
                            const data = await response.json();
                            if (data.registros && data.registros.length > 0) {
                                setListas(data.registros); //pega as listas do banco
                            } else {
                                setErro("sem lista "); 
                            }
                        } else {
                            const errorData = await response.json();
                            setErro(errorData.erro || "Erro ao buscar as listas.");
                        }
                    } catch (error) {
                        console.error("Erro ao buscar as listas:", error);
                        
                    }
                };
            
                fetchListas();
            }, []);



    return (
        <body className="">
            <div className="row flex-row gx-0">
                    <div className="col-md-10 p-4">
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Titulo fontSize={45}>
                                <img src="src/front/assets/logo.png" width={90}/>
                                TaskFlow
                            </Titulo>
                        </div>
                        <hr style={{marginTop:'1rem'}}></hr>
                        <div className="row gx-0">
                            <GridListas>
                                    {listas.map((lista) => (
                                        <CategoriaTarefas 
                                            listaId={lista.id} 
                                            nome={lista.nome} 
                                        />
                                    ))}
                            
                            </GridListas>
                            
                        </div>
                    </div>
                    <div style={{position: "sticky", top: "0", height: "100vh", overflowY: "auto"}} className=" bg-dark  col-md-2  p-0 text-center">
                        <MenuSlideBar req={false} quadroId={quadroId}></MenuSlideBar>
                    </div>
        </div>
        </body>
        
    );
};

export default TaskPage;
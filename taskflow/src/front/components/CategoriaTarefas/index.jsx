import { EstiloCategoria } from "./styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faClock , faListCheck } from "@fortawesome/free-solid-svg-icons";
import ModalCriarTask from "../ModalCriarTask";
import { useEffect, useState } from "react";
import Tarefa from "../../components/Tarefa";

const CategoriaTarefas = ({listaId, nome}) => {

    const [modalCriarTask, setModalCriarTask] = useState(false);
    const [tasks, setTask] = useState([]); //armazena as tasks
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
                const response = await fetch(`http://localhost:3000/listas/${listaId}/tasks`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });
                    
                if (response.ok) {
                    const data = await response.json();
                    if (data.registros && data.registros.length > 0) {
                        setTask(data.registros); //pega as listas do banco
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


    return(
        <>
            <div  style={{display: "flex" , flexFlow: "column nowrap"}}>
                <EstiloCategoria onClick={() => setModalCriarTask(true)} style={{margin:'2% 5% 0% 5%' , paddingBottom: "0.5rem"} }>
                    <FontAwesomeIcon style={{marginLeft: "0.5rem"}} icon={faPlus} size="lg" />
                    <Titulo  fontSize={28}>{nome}</Titulo>
                    <FontAwesomeIcon style={{marginRight: "0.5rem"}} icon={faListCheck} color="#000" size="lg"/>
                </EstiloCategoria>
                
                <div style={{display:'flex', flexFlow: "column nowrap"}}>
                                    {tasks.map((task) => (
                                        <Tarefa nome = {task.nome} descricao = {task.descricao} data = {new Date(task.data).toISOString().slice(0, 10)} etapa1 = {task.etapa1} etapa2 = {task.etapa2} etapa3 = {task.etapa3} idTask = {task.id} />
                                    ))}
                            </div>
                

            </div>
            
            <ModalCriarTask isOpen={modalCriarTask} closeModal={closeModal}></ModalCriarTask>
        </>
        
    );
};

export default CategoriaTarefas;
import { EstiloTarefa } from "./styles";
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCircleCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalAtualizarTask from "../ModalAtualizarTask";
import { useState } from "react";

const Tarefa = ({nome, descricao, data, etapa1, etapa2, etapa3, estado, idTask}) => {

    const [modalAtualizar, setModalAtualizar] = useState(false);

    const [isEtapa1Checked, setIsEtapa1Checked] = useState(false);
    const [isEtapa2Checked, setIsEtapa2Checked] = useState(false);
    const [isEtapa3Checked, setIsEtapa3Checked] = useState(false);


    //tratando a data pra saber se hj é maior que a data de vencimento
    const today = new Date();
    const dateToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const taskDateString = data; 
    const [day, month, year] = taskDateString.split("/"); 
    const taskDate = new Date(year, month - 1, day);

    const closeModal = () =>{
        setModalAtualizar(false);
        
    } 

    const deleteTask = async() => {
        const resp = confirm("Tem certeza que deseja excluir a Task?");
        if(resp){
            
                try {
                    const response = await fetch(`http://localhost:3000/tasks/${idTask}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
        
                    if (response.ok) {
                        alert("Task Deletada com sucesso!");
                        window.location.reload();
                    } else {
                        const data = await response.json();
                        alert(`Erro ao deletar task: ${data.message}`);
                    }
                } catch (error) {
                    console.error("Erro ao deletar task:", error);
                    alert("Erro ao deletar a tarefa.");
                }
        }else{
        }
    }

    const changeEstado = async (e) =>{
        if(isEtapa1Checked == true && isEtapa2Checked == true && isEtapa3Checked == true){
            try {
                const response = await fetch(`http://localhost:3000/tasks/${idTask}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        estado: true
                    }),
                });
    
                if (response.ok) {
                    alert("Task concluida com sucesso!");
                    window.location.reload();
                } else {
                    const data = await response.json();
                    alert(`Erro ao concluir a task: ${data.message}`);
                }
            } catch (error) {
                console.error("Erro ao concluir task:", error);
                alert("Erro ao concluir a tarefa.");
            }
        }
        else{
            alert("selecione todas as etapas para concluir a Tarefa!")
        }
        
    } 


    return (
        <>
            <EstiloTarefa style={{backgroundColor: taskDate.getTime() == dateToday.getTime() && estado == false ? "#f0f8ff" : taskDate.getTime() < dateToday.getTime() && estado == false ? "#ffe4e4" : estado == true ? "#e4ffe4" :  "#fffee4" }}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Titulo  fontSize={22}>{nome}</Titulo>
                <div style={{display:'flex'}}>
                    <div  style={{marginRight:'0.7rem'}}><FontAwesomeIcon onClick={() => setModalAtualizar(true)} style={{cursor: "pointer", display: estado == true ? "none" :  "auto"}} icon={faPen}  color="#54CDD0"/></div>
                    <div style={{marginRight:'0.2rem'}}><FontAwesomeIcon onClick={() => deleteTask()} style={{cursor: "pointer"}} icon={faTrash} color="#e14c4c"/></div>
                </div>
            </div>
            <div>
                <Paragrafo>{descricao}</Paragrafo>
            </div>
            
            <div>
    {etapa1 && (
        <div>
            <input
                type="checkbox"
                checked={isEtapa1Checked}
                onChange={(e) => setIsEtapa1Checked(e.target.checked)}
            />
            <label style={{ paddingLeft: "5px" }}>{etapa1}</label>
        </div>
    )}
    {etapa2 && (
        <div>
            <input
                type="checkbox"
                checked={isEtapa2Checked}
                onChange={(e) => setIsEtapa2Checked(e.target.checked)}
            />
            <label style={{ paddingLeft: "5px" }}>{etapa2}</label>
        </div>
    )}
    {etapa3 && (
        <div>
            <input
                type="checkbox"
                checked={isEtapa3Checked}
                onChange={(e) => setIsEtapa3Checked(e.target.checked)}
            />
            <label style={{ paddingLeft: "5px" }}>{etapa3}</label>
        </div>
    )}
</div>

            <hr/>
            <div style={{display:'flex', justifyContent:'space-between', height:'4vh'}}>
                <div style={{display:'flex',background: '#e14c4c', borderRadius: '5px', padding:'7px'}}>
                    <div><FontAwesomeIcon icon={faCalendar}  color="#fff"/></div>
                    <div style={{paddingLeft:'5px'}}><p style={{color:"white", fontWeight:"bold"}}>{data}</p></div>
                </div>
                <div onClick={estado == true? {} : () => changeEstado()}  style={{marginTop:'0.5rem',cursor: estado == false? "pointer" : "auto" }}><FontAwesomeIcon style={{color: estado == false? "#000" : "green" }} icon={faCircleCheck} size="lg"/></div>
            </div>
        </EstiloTarefa>
            <ModalAtualizarTask isOpen={modalAtualizar} closeModal={closeModal} taskId={idTask} ></ModalAtualizarTask>
        </>
        
    );
};

export default Tarefa;
import { EstiloCategoria } from "./styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faClock , faListCheck } from "@fortawesome/free-solid-svg-icons";
import ModalCriarTask from "../ModalCriarTask";
import { useEffect, useState } from "react";

const CategoriaTarefas = () => {

    const [modalCriarTask, setModalCriarTask] = useState(false);

    const closeModal = () =>{
        setModalCriarTask(false);
    } 

    return(
        <>
            <EstiloCategoria style={{margin:'2% 5% 0% 5%'}}>
                <div onClick={() => setModalCriarTask(true)}  style={{paddingLeft:'5%', cursor: "pointer"}}><FontAwesomeIcon icon={faPlus} /></div>
                <div style={{paddingLeft:'30%'}}><Titulo fontSize={28}>Tarefas</Titulo></div>
                <div style={{marginLeft:'30%'}}><FontAwesomeIcon icon={faListCheck} color="#000" size="lg"/></div>
        </EstiloCategoria>
        
        <ModalCriarTask isOpen={modalCriarTask} closeModal={closeModal}></ModalCriarTask>
        </>
        
    );
};

export default CategoriaTarefas;
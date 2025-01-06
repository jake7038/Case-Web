import { EstiloCategoria } from "./styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faClock } from "@fortawesome/free-solid-svg-icons";
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
                <div  style={{paddingLeft:'5%'}}><FontAwesomeIcon icon={faPlus} /></div>
                <div style={{paddingLeft:'30%'}}><Titulo fontSize={28}>Tarefas</Titulo></div>
                <div style={{marginLeft:'30%'}}><FontAwesomeIcon icon={faClock} color="#FFBF22" size="lg"/></div>
        </EstiloCategoria>
        
        <ModalCriarTask></ModalCriarTask>

        </>
        
    );
};

export default CategoriaTarefas;
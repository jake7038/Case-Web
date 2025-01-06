import { EstiloCategoria } from "./styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faClock , faListCheck } from "@fortawesome/free-solid-svg-icons";
import ModalCriarTask from "../ModalCriarTask";
import { useEffect, useState } from "react";

const CategoriaTarefas = ({listaId, nome}) => {

    const [modalCriarTask, setModalCriarTask] = useState(false);

    const closeModal = () =>{
        setModalCriarTask(false);
    } 

    return(
        <>
            <EstiloCategoria onClick={() => setModalCriarTask(true)} style={{margin:'2% 5% 0% 5%' , paddingBottom: "0.5rem"} }>
                <FontAwesomeIcon style={{marginLeft: "0.5rem"}} icon={faPlus} size="lg" />
                <Titulo  fontSize={28}>{nome}</Titulo>
                <FontAwesomeIcon style={{marginRight: "0.5rem"}} icon={faListCheck} color="#000" size="lg"/>
        </EstiloCategoria>
        
        <ModalCriarTask isOpen={modalCriarTask} closeModal={closeModal}></ModalCriarTask>
        </>
        
    );
};

export default CategoriaTarefas;
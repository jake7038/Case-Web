import { EstiloTarefa } from "./styles";
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCircleCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Tarefa = () => {
    return (
        <EstiloTarefa>
            <div style={{display:'flex'}}>
                <Titulo fontSize={22}>Nome da Tarefa</Titulo>
                <div style={{paddingLeft:'42%'}}><FontAwesomeIcon icon={faPen} color="#54CDD0"/></div>
                <div style={{paddingLeft:'5%'}}><FontAwesomeIcon icon={faTrash} color="#e14c4c"/></div>
            </div>
            <div>
                <Paragrafo>Descrição da Tarefa...</Paragrafo>
            </div>
            <div>
                <input type="checkbox"></input><label style={{paddingLeft:'5px'}}>Etapa 1</label>
            </div>
            <div>
                <input type="checkbox"></input><label style={{paddingLeft:'5px'}}>Etapa 2</label>
            </div>
            <div>
                <input type="checkbox"></input><label style={{paddingLeft:'5px'}}>Etapa 3</label>
            </div>
            <hr/>
            <div style={{display:'flex', height:'4vh'}}>
                <div style={{display:'flex',background: '#e14c4c', borderRadius: '5px', padding:'7px'}}>
                    <div><FontAwesomeIcon icon={faCalendar} color="#fff"/></div>
                    <div style={{paddingLeft:'5px'}}><p style={{color:"white", fontWeight:"bold"}}>05/01</p></div>
                </div>
                <div style={{padding:'7px',paddingLeft:'73%'}}><FontAwesomeIcon icon={faCircleCheck} size="lg"/></div>
            </div>
        </EstiloTarefa>
    );
};

export default Tarefa;
import { EstiloTarefa } from "./styles";
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCircleCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Tarefa = ({nome, descricao, data, etapa1, etapa2, etapa3, idTask}) => {
    return (
        
        <EstiloTarefa>
            <div style={{display:'flex'}}>
                <Titulo  fontSize={22}>{nome}</Titulo>
                <div style={{paddingLeft:'42%'}}><FontAwesomeIcon icon={faPen} color="#54CDD0"/></div>
                <div style={{paddingLeft:'5%'}}><FontAwesomeIcon icon={faTrash} color="#e14c4c"/></div>
            </div>
            <div>
                <Paragrafo>{descricao}</Paragrafo>
            </div>
            <div >
                <input type="checkbox"></input><label style={{paddingLeft:'5px'}}>{etapa1}</label>
            </div>
            <div>
                <input type="checkbox"></input><label style={{paddingLeft:'5px'}}>{etapa2}</label>
            </div>
            <div>
                <input type="checkbox"></input><label style={{paddingLeft:'5px'}}>{etapa3}</label>
            </div>
            <hr/>
            <div style={{display:'flex', height:'4vh'}}>
                <div style={{display:'flex',background: '#e14c4c', borderRadius: '5px', padding:'7px'}}>
                    <div><FontAwesomeIcon icon={faCalendar} color="#fff"/></div>
                    <div style={{paddingLeft:'5px'}}><p style={{color:"white", fontWeight:"bold"}}>{data}</p></div>
                </div>
                <div style={{padding:'7px',paddingLeft:'73%'}}><FontAwesomeIcon icon={faCircleCheck} size="lg"/></div>
            </div>
        </EstiloTarefa>
    );
};

export default Tarefa;
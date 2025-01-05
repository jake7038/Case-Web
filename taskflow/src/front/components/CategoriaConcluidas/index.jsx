import { EstiloCategoria } from "../CategoriaTarefas/styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const CategoriaConcluidas = () => {
    return (
        <EstiloCategoria style={{margin:'2% 0% 0% 0%'}}>
                <div style={{paddingLeft:'5%'}}><FontAwesomeIcon icon={faPlus}/></div>
                <div style={{paddingLeft:'25%'}}><Titulo fontSize={28}>Concluídas</Titulo></div>
                <div style={{paddingLeft:'23%'}}><FontAwesomeIcon icon={faCheck} color="#54B85A" size="lg"/></div>
        </EstiloCategoria>
    );
};

export default CategoriaConcluidas;
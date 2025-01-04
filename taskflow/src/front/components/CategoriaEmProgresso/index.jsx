import { EstiloCategoria } from "../CategoriaTarefas/styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const CategoriaEmProgresso = () => {
    return (
            <EstiloCategoria style={{margin:'2% 7% 0% 2%'}}>
                    <div style={{paddingLeft:'5%'}}><FontAwesomeIcon icon={faPlus}/></div>
                    <div style={{paddingLeft:'20%'}}><Titulo fontSize={28}>Em Progresso</Titulo></div>
                    <div style={{paddingLeft:'18%'}}><FontAwesomeIcon icon={faArrowRotateRight} color="#54CDD0" size="lg"/></div>
            </EstiloCategoria>
    );
};

export default CategoriaEmProgresso;
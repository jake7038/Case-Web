import { EstiloQuadro } from "./styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Paragrafo from "../Paragrafo";
import { useNavigate } from "react-router-dom"; 

const Quadro = ({quadroId, nome, descricao}) => {

    const changeurl = useNavigate();

    const goTask = () => {
        changeurl("/task" , {state: {quadroId}}); //chamando a página das tasks e mandando o quadroId
    };

    return (
        <EstiloQuadro onClick={() => goTask()} >
            <div style={{display:'flex', alignItems:'center', justifyContent: "space-between", MarginBottom:'8px', paddingBottom: "8px", borderBottom: "2px solid #949494"  }}>
            <Titulo fontSize={30}>{nome}</Titulo>
            <div style={{paddingLeft:'42%'}}><FontAwesomeIcon icon={faPen} color="#54CDD0"/></div>
            <div style={{paddingLeft:'5%'}}><FontAwesomeIcon icon={faTrash} color="#e14c4c"/></div>
            
            </div>
            <div style={{display:'flex', alignItems:'start', height:'20%', marginTop: "1rem"}}>
            <Paragrafo fontSize={18}>{descricao}</Paragrafo>
            </div>
            <Paragrafo>{quadroId}</Paragrafo>
        </EstiloQuadro>
    );
};

export default Quadro;
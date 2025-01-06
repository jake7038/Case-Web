import { EstiloQuadro } from "./styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Paragrafo from "../Paragrafo";

const Quadro = ({nome, descricao}) => {
    return (
        <EstiloQuadro>
            <div style={{display:'flex', alignItems:'center', justifyContent: "space-between", MarginBottom:'8px', paddingBottom: "8px", borderBottom: "2px solid #949494"  }}>
            <Titulo fontSize={30}>{nome}</Titulo>
            <div>
                    <FontAwesomeIcon icon={faEllipsisV} color="#787878" size="2x"/>
                </div>
            </div>
            <div style={{display:'flex', alignItems:'start', height:'20%', marginTop: "1rem"}}>
            <Paragrafo fontSize={18}>{descricao}</Paragrafo>
            </div>
        </EstiloQuadro>
    );
};

export default Quadro;
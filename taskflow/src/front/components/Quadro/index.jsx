import { EstiloQuadro } from "./styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Quadro = () => {
    return (
        <EstiloQuadro>
            <div style={{display:'flex'}}>
                <div style={{paddingLeft:'95%'}}>
                    <FontAwesomeIcon icon={faEllipsisV} color="#787878" size="2x"/>
                </div>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent: 'center', height:'70%'}}>
            <Titulo fontSize={30}>Quadro 1</Titulo>
            </div>
           
        </EstiloQuadro>
    );
};

export default Quadro;
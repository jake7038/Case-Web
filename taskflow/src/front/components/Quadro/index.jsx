import { EstiloQuadro } from "./styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Paragrafo from "../Paragrafo";

const Quadro = () => {
    return (
        <EstiloQuadro>
            <div style={{display:'flex' , }}>
                
            </div>
            <div style={{display:'flex', alignItems:'start', MarginBottom:'8px', paddingBottom: "8px", borderBottom: "2px solid #949494"  }}>
            <Titulo fontSize={30}>Titulo</Titulo>
            <div style={{paddingLeft:'78%'}}>
                    <FontAwesomeIcon icon={faEllipsisV} color="#787878" size="2x"/>
                </div>
            </div>
            <div style={{display:'flex', alignItems:'start', height:'20%'}}>
            <Paragrafo fontSize={18}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid animi ut qui ratione veniam e accusamus earum pariatur adipisci, quas, blanditiis libero sit eum rerum dignissimos assumenda.</Paragrafo>
            </div>
        </EstiloQuadro>
    );
};

export default Quadro;
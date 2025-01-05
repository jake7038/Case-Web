import Titulo from "../../components/Titulo";
import MenuSlideBar from "../../components/MenuSideBar";
import { GridQuadros} from "./styles";
import Quadro from "../../components/Quadro";
import { EstiloCategoria } from "../../components/CategoriaTarefas/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Dashboard = () => {
    return (
        <body className="">
           <div className="row flex-row gx-0">
                    <div className="col-md-10 p-4">
                        <Titulo><img src="src/front/assets/logo.png" width={80}></img>TaskFlow</Titulo>
                        <div className="row flex-row gx-0">
                            <div style={{display:'flex'}}>
                            <EstiloCategoria style={{margin:'2% 7% 0% 5%'}}>
                    <div style={{paddingLeft:'5%'}}><FontAwesomeIcon icon={faPlus}/></div>
                    <div style={{paddingLeft:'20%'}}><Titulo fontSize={28}>Novo Quadro</Titulo></div>
            </EstiloCategoria>
                            </div>
                            <div style={{display:"flex"}}>
                                <GridQuadros>          
                                    <Quadro/>
                                    <Quadro/>
                                    <Quadro/>
                                    <Quadro/>
                                    <Quadro/>
                                    <Quadro/>
                                    <Quadro/>  
                                </GridQuadros>
                                
                            </div>
                        </div>
                    </div>
                    <div className="  min-vh-100 col-md-2  p-0 text-center">
                {MenuSlideBar(true)}
            </div>
        </div>
        </body>
        
    );
};

export default Dashboard;
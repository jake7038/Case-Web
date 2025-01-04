import Titulo from "../../components/Titulo";
import CategoriaTarefas from "../../components/CategoriaTarefas";
import CategoriaEmProgresso from "../../components/CategoriaEmProgresso";
import CategoriaConcluidas from "../../components/CategoriaConcluidas";
import Tarefa from "../../components/Tarefa";
import { ListaTarefas} from "./styles";
import MenuSlideBar from "../../components/MenuSideBar";

const TaskPage = () => {
    return (
        <body className="">
           <div className="row flex-row gx-0">
                    <div className="col-md-10 p-4">
                        <Titulo><img src="src/front/assets/logo.png" width={80}></img>TaskFlow</Titulo>
                        <div className="row flex-row gx-0">
                            <hr style={{marginTop:'15px'}}></hr>
                            <div style={{display:'flex'}}>
                                <CategoriaTarefas></CategoriaTarefas>
                                <CategoriaEmProgresso></CategoriaEmProgresso>
                                <CategoriaConcluidas></CategoriaConcluidas>
                            </div>
                            <div style={{display:"flex"}}>
                                <ListaTarefas>
                                    <Tarefa></Tarefa>
                                </ListaTarefas>
                                <ListaTarefas>
                                    
                                </ListaTarefas>
                                <ListaTarefas>
                                    
                                </ListaTarefas>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-dark min-vh-100 col-md-2  p-0 text-center">
                    {MenuSlideBar(false)}
                    </div>
        </div>
        </body>
        
    );
};

export default TaskPage;
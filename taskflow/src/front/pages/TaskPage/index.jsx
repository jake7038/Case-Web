import Titulo from "../../components/Titulo";
import CategoriaTarefas from "../../components/CategoriaTarefas";
import Tarefa from "../../components/Tarefa";
import { ListaTarefas} from "./styles";
import MenuSlideBar from "../../components/MenuSideBar";
import ModalCriarTask from "../../components/ModalCriarTask";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";




const TaskPage = () => {

    const location = useLocation();
    const quadroId = location.state?.quadroId; //pega a variavel do quadro


    const [modalCriarTask, setModalCriarTask] = useState(false);
    
        const closeModal = () =>{
            setModalCriarTask(false);
        } 


    return (
        <body className="">
            <div className="row flex-row gx-0">
                    <div className="col-md-10 p-4">
                        <Titulo><img src="src/front/assets/logo.png" width={80}></img>TaskFlow {quadroId}</Titulo>
                        <div className="row flex-row gx-0">
                            <div style={{display:'flex'}}>
                                <CategoriaTarefas></CategoriaTarefas>
                            </div>
                            <div style={{display:"flex"}}>
                                <ListaTarefas>
                                    <Tarefa/>
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
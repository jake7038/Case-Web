import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import MenuSlideBar from "../../components/MenuSideBar";

const TaskPage = () => {
    return (
        <body className="">
            <div className="row flex-row gx-0">
            <div className="col-md-10 p-0 pt-5">
            <Titulo>Bem vindo a pagina das Tasks </Titulo>
            </div>

            <div className=" bg-dark min-vh-100 col-md-2  p-0 text-center">
            {MenuSlideBar(false)}
            </div>
        </div>
        </body>
        
    );
};

export default TaskPage;
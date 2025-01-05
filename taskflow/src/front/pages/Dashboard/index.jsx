import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import MenuSlideBar from "../../components/MenuSideBar";
import { body } from "./styles";

const Dashboard = () => {
    

    return (
        <body className="">
            <div className="row flex-row gx-0">
            <div className="col-md-10 p-0 pt-5">
            <Titulo>Bem vindo a pagina dos quadros </Titulo>
            </div>

            <div className="  min-vh-100 col-md-2  p-0 text-center">
                {MenuSlideBar(true)}
            </div>
        </div>
        </body>
        
    );
};

export default Dashboard;
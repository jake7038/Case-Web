import Paragrafo from "../Paragrafo";
import { useNavigate } from "react-router-dom"; 
//css feito com css
const FormEntrar = () => {
    const janela = useNavigate(); 

    const MudaJanela = () => {
    janela("/esqueci-senha"); 
    };

    return (
    <form action="" className="grid">
        <div className="row mb-3 w-100 ">
        <input
            type="email"
            className="form-control form-control-sm"
            placeholder="E-mail"
        />
        </div>

        <div className="row mb-3 w-100">
        <input
            type="password"
            className="form-control form-control-sm"
            placeholder="Senha"
        />
        </div>

        <div className="row mb-3 w-100" style={{visibility: "hidden"}} >
        <input
            type="password"
            className="form-control form-control-sm"
            placeholder="Senha"
        />
        </div>

        <div className="row pt-4">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-center">
            <button type="submit" className="btn btn-primary w-50">
            Entrar
            </button>
        </div>
        <div className="col-md-3"></div>
        </div>

        <div className="text-center pt-4">
        <div onClick={MudaJanela}>
            <Paragrafo cursor="pointer">Esqueceu a Senha?</Paragrafo>
        </div>
        </div>
    </form>
    );
};

export default FormEntrar;
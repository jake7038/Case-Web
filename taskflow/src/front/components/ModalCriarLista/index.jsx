import { DivModal, DivOverlay } from "./styles";
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
const ModalCriarLista  = ({isOpen, userId, closeModal}) => {


    const closseButton = () => {
        closeModal();
    };

    if(isOpen){
        return (
            <DivOverlay>
                <DivModal >
                    <div className="row pt-4">
                        <div className="col-md-4"></div>
                            <div className="col-md-4 text-center">
                                <Titulo fontSize={24}>Criar Lista</Titulo>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <button onClick={closseButton} type="button" className="btn btn-danger">X</button>
                            </div>
                            <div className="col-md-12">
                                <Paragrafo>Nome da Lista</Paragrafo>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control mb-5 form-control-sm w-100"
                                    placeholder="Nome do Quadro"
                                />
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-8 text-center">
                                <button type="submit" className="btn mt-5 btn-primary w-100">
                                    Salvar as mudanças
                                </button>
                            </div>
                            <div className="col-md-2"></div>
                    </div>
    
                </DivModal>
            </DivOverlay>
    
        );
    
    } else{
        return null
    }
    
}

export default ModalCriarLista;
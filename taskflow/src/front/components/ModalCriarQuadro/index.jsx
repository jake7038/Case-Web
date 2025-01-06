import { DivModal, DivOverlay } from "./styles";
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
const ModalCriarQuadro  = ({isOpen, userId, closeModal}) => {


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
                                <Titulo fontSize={24}>Criar Quadro</Titulo>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                                <button onClick={closseButton} type="button" className="btn btn-danger">X</button>
                            </div>
                            <div className="col-md-12">
                                <Paragrafo>Nome do Quadro</Paragrafo>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control mb-5 form-control-sm w-100"
                                    placeholder="Nome do Quadro"
                                />
    
                                <Paragrafo>Descrição do Quadro</Paragrafo>
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control mb-5 form-control-sm w-100"
                                    placeholder="Descrição"
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

export default ModalCriarQuadro;
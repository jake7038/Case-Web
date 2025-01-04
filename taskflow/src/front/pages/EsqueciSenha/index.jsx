import {Estilo,DivConteudo} from "../login/styles";
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import FormEsqueciSenha from "../../components/FormEsqueciSenha";

const EsqueciSenha = () => {
    return (
        <Estilo style={{ height: '300px',paddingTop:'50px' }}>
            <div>
                <DivConteudo>
                    <Titulo fontSize={24}>Esqueci minha senha</Titulo>
                </DivConteudo>
                <DivConteudo>
                    <Paragrafo fontSize={14}>Enviaremos um link de acesso à sua conta por e-mail</Paragrafo>
                </DivConteudo>
                <DivConteudo>
                    <FormEsqueciSenha></FormEsqueciSenha>
                </DivConteudo>
            </div>
        </Estilo>
    );
};

export default EsqueciSenha;
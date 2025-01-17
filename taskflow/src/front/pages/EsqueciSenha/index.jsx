import {Estilo,DivConteudo} from "../login/styles";
import Paragrafo from "../../components/Paragrafo";
import FormEsqueciSenha from "../../components/FormEsqueciSenha";

const EsqueciSenha = () => {
    return (
        <Estilo style={{ height: 'auto',paddingTop:'50px' }}>
            <div>
                <DivConteudo>
                    <h3>Esqueceu sua Senha?</h3>
                </DivConteudo>
                <DivConteudo>
                    <Paragrafo fontSize={14}>Enviaremos uma nova senha para o e-mail associado à sua conta</Paragrafo>
                </DivConteudo>
                <DivConteudo>
                    <FormEsqueciSenha></FormEsqueciSenha>
                </DivConteudo>
            </div>
        </Estilo>
    );
};

export default EsqueciSenha;
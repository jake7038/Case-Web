import {Estilo,DivTitulo,DivConteudo,EstiloTitulo} from "../login/styles";
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import FormEsqueciSenha from "../../components/FormEsqueciSenha";

const EsqueciSenha = () => {
    return (
        <Estilo style={{ height: '420px' }}>
            <DivTitulo>
                <EstiloTitulo></EstiloTitulo>
            </DivTitulo>
            <div>
                <DivConteudo>
                    <Titulo fontSize={24}>Esqueci minha senha</Titulo>
                </DivConteudo>
                <DivConteudo>
                    <Paragrafo fontSize={14}>Enviaremos um link de acesso à sua conta por e-mail</Paragrafo>
                </DivConteudo>
                <DivConteudo>
                    <FormEsqueciSenha/>
                </DivConteudo>
            </div>
        </Estilo>
    );
};

export default EsqueciSenha;
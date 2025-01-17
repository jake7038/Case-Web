import  {Estilo}   from "./styles"
import { EstiloTitulo, DivTitulo , DivConteudo, Footer } from "./styles"
import  { useState } from 'react';
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import FormCriarConta from "../../components/FormCriarConta";
import FormEntrar from "../../components/FormEntrar";

    const Login = () => { 
        
        const [elemento1, setElementOne] = useState(true);
        const [elemento2, setElementTwo] = useState(false);
        
        
        const Click = (elemento) => { 
            if (elemento === false){
            setElementOne((prev) => !prev); 
            setElementTwo((prev) => !prev); 
            }
        };

        const TrocaForm = (elemento1) => {
            if (elemento1 === true){
            return(  
                <div>
                    <DivConteudo>
                        <h3>Criar Conta</h3>
                    </DivConteudo>
        
                    <DivConteudo>
                        <Paragrafo fontSize={14} tipo="cinza">Preencha com suas informações nos campos abaixo para realizar o seu cadastro</Paragrafo>
                    </DivConteudo>
        
                    <DivConteudo>
                        <FormCriarConta></FormCriarConta>
                    </DivConteudo>
                </div>
            )
        }else if (elemento1 === false){
            return(<div>
                <DivConteudo>
                    <h3>Bem Vindo (a)!</h3>
                </DivConteudo>
    
                <DivConteudo>
                    <Paragrafo  tipo="cinza">Preencha com suas informações nos campos abaixo para acessar a sua conta</Paragrafo>
                </DivConteudo>
    
                <DivConteudo>
                    <FormEntrar></FormEntrar>
                </DivConteudo>
                
            </div>)
        }
    }

    //esses EstiloTitulo vazios são para fazer de maneira facil a centralização no grid     

    return(
    <>
    <div style={{display:'flex', justifyContent:'center'}}>
        <Titulo fontSize={70}>TaskFlow</Titulo>
    </div>
    <Estilo>
        
        <DivTitulo>
            <EstiloTitulo></EstiloTitulo>
        <EstiloTitulo onClick={() => Click(elemento1)} select = {elemento1} style={{cursor:'pointer'}}>Criar Conta</EstiloTitulo>
        <EstiloTitulo onClick={() => Click(elemento2)} select = {elemento2} style={{cursor:'pointer'}}>Entrar</EstiloTitulo>
        <EstiloTitulo></EstiloTitulo> 
        </DivTitulo>
        
        {TrocaForm(elemento1)}

        
    </Estilo>
        <Footer>
            <p style={{color:'#fff', margin: "0px"}}>Aplicação desenvolvida com o esforço coletivo de Ennya Campos, Erick Martins, Luiz Felipe, Luiz Antonio e Rafael Costa</p>
        </Footer>
    </>
)
    }
export default Login

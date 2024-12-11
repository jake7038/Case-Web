import { Estilo  } from "./styles"
import { EstiloTitulo, DivTitulo , DivConteudo } from "./styles"
import  { useState } from 'react';
import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import FormCriarConta from "../FormCriarConta";
import FormEntrar from "../FormEntrar";

// acabei errando e fiz o forms inteiro aqui. por motivos de organização de código era para essse forms estar na pasta de containers e não de components... depois eu passo para a pasta correta e altero os import e exports

export type props = {    
    select?: true | false; 
    }

    const FormDiv = () => { 
        
        const [elemento1, setElementOne] = useState(true);
        const [elemento2, setElementTwo] = useState(false);
    
    
        const Click = (elemento: boolean) => { 
            if (Boolean(elemento) === false){
            setElementOne((prev) => !prev); 
            setElementTwo((prev) => !prev); 
            }
        };

        const TrocaForm = (elemento1: boolean) =>{
            if (elemento1 == true){
            return(  
                <div>
                    <DivConteudo>
                        <Titulo fontSize={24}>Criar Conta</Titulo>
                    </DivConteudo>
        
                    <DivConteudo>
                        <Paragrafo fontSize={14} tipo="cinza">Preencha com suas informações nos campos abaixo para realizar o seu cadastro</Paragrafo>
                    </DivConteudo>
        
                    <DivConteudo>
                        <FormCriarConta></FormCriarConta>
                    </DivConteudo>
                </div>
            )
        }else if (Boolean(elemento1) == false){
            return(<div>
                <DivConteudo>
                    <Titulo fontSize={24}>Bem Vindo (a)!</Titulo>
                </DivConteudo>
    
                <DivConteudo>
                    <Paragrafo fontSize={14} tipo="cinza">Preencha com suas informações nos campos abaixo para acessar a sua conta</Paragrafo>
                </DivConteudo>
    
                <DivConteudo>
                    <FormEntrar></FormEntrar>
                </DivConteudo>
            </div>)
        }
    }

    //esses EstiloTitulo vazios são para fazer de maneira facil a centralização no grid... não é o ideal mais funciona kkkkk       
    return(
    
    <Estilo>
        <DivTitulo>
            <EstiloTitulo></EstiloTitulo>
        <EstiloTitulo onClick={() => Click(elemento1)} select = {elemento1} >Criar Conta</EstiloTitulo>
        <EstiloTitulo onClick={() => Click(elemento2)} select = {elemento2} >Entrar</EstiloTitulo>
        <EstiloTitulo></EstiloTitulo> 
        </DivTitulo>
        
        {TrocaForm(elemento1)}

        
        
    </Estilo>
    
    

)
    }
export default FormDiv

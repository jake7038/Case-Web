import styled from "styled-components";


//todo CSS deve ser exportado para poder ser utilizado. a sintaxe consiste em: Export (nome e tipo da variavel que será importada no arquivo .tsx) = (styled chama o import Styled-components) . (elemento HTML que será customizado) (o código css tem que estar entre as crases ``)



export const Estilo = styled.div`    
    text-align: center;
    background-color: #fff;
    margin: auto;
    margin-bottom: 0px;
    margin-top: 64px;
    max-width: 570px;
    height: 420px;
    border-radius: 10px;
    border-width: 2px;
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.3);
    
`
export const DivTitulo = styled.div`
    padding: 20px 52px 30px 52px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;

    @media screen and (min-width: 768px) and (max-width: 1023px){
        grid-template-columns:  0fr 2fr 2fr 0fr;
    }
        @media (max-width:768px) {
        grid-template-columns:  0fr 2fr 2fr 0fr;
    }

`

export const DivConteudo = styled.div`
    padding: 8px 52px 0px 52px;
    height: auto;
    display: block;
    grid-template-columns: 1fr;
    text-align: start;
`

export const EstiloTitulo = styled.h2`
    
    text-align: center;
    font-size: 20px;
    text-decoration: ${(props) => (props.select === true ? 'underline' : 'none')};
    text-decoration-color: gray;
    text-underline-offset: 8px;

`

export const Footer = styled.div`
    text-align: center;
    font-size: 12px;
    background: #282a35;
    padding: 5px;
    width: 100%;
    right: 0%;
    left: 0%;
    position: absolute;
    bottom: 0;
`
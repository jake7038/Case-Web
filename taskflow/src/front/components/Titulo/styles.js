
//código teste em Type script para fins de demonstração.
//aqui deve ser escrito código CSS com js e assim exportado

import styled from "styled-components"; //para usar CSS com TypeScript é necessário importar em todo arquivo .ts o styled-components
import "@fontsource/bebas-neue";    

// importação da index.tsx passando o type props e assim permitindo alterar com java script


//todo CSS deve ser exportado para poder ser utilizado. a sintaxe consiste em: Export (nome e tipo da variavel que será importada no arquivo .tsx) = (styled chama o import Styled-components) . (elemento HTML que será customizado) (o código css tem que estar entre as crases ``)
export const P = styled.h1`    
    font-family: "Bebas Neue", serif;
    font-size:${(props) => (props.fontSize ? props.fontSize + 'px' : '24px')}; 
    color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
    line-height: auto;
`
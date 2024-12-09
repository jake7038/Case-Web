//código teste em .tsx para fins de demonstração.
//aqui deve ser escrito código html com js e exportado para ser usado no  App.tsx

import { P  } from "./styles" //import do TS que criamos

export type props = {    //tipagem criada e exportada para poder alterar os elementos no CSS 
children: string; //tipo do elemento
tipo?: 'principal' | 'secundario'; //variavel criada que só assume dois valores
fontSize?: number; //tamanho da fonte
}

//feito isso podemos alterar dinâmicamente agora o nosso elemento HTML

const Titulo = ({children, tipo = 'principal', fontSize = 36}: props) => <P fontSize={fontSize} tipo={tipo}>{children}</P> 

export default Titulo
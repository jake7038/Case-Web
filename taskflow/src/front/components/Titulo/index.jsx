//aqui deve ser escrito código html com js e exportado para ser usado no  App.tsx

import { P  } from "./styles" //import do TS que criamos

//feito isso podemos alterar dinâmicamente agora o nosso elemento HTML

const Titulo = ({children, tipo = 'principal', fontSize = 36, } ) => <P fontSize={fontSize} tipo={tipo}>{children}</P> 

export default Titulo
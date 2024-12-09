import { P  } from "./styles" 

export type props = {    
children: string; 
tipo?: 'cinza' | 'preto' | 'branco'; 
fontSize?: number; 
}



const Paragrafo = ({children, tipo = 'cinza', fontSize = 14}: props) => <P fontSize={fontSize} tipo={tipo}>{children}</P> 

export default Paragrafo
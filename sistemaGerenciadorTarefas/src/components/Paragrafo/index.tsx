import { P  } from "./styles" 

export type props = {    
children: string; 
tipo?: 'cinza' | 'preto' | 'branco'; 
fontSize?: number; 
cursor?: "pointer" | "none"; 
}



const Paragrafo = ({children, tipo = 'cinza', cursor = 'none', fontSize = 14}: props) => <P fontSize={fontSize} tipo={tipo} cursor={cursor}>{children}</P> 

export default Paragrafo
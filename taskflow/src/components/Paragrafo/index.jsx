import { P } from "./styles";

const Paragrafo = ({ children, tipo = 'cinza', cursor = 'none', fontSize = 14 }) => (
    <P fontSize={fontSize} tipo={tipo} cursor={cursor}>
    {children}
    </P>
);

export default Paragrafo;
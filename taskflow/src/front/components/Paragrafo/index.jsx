import { P } from "./styles";

const Paragrafo = ({ children, tipo = 'cinza', cursor = 'auto', fontSize = 14, marginb = undefined }) => (
    <P fontSize={fontSize} tipo={tipo} cursor={cursor} marginb = {marginb}>
    {children}
    </P>
);

export default Paragrafo;
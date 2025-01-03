import styled from "styled-components";

export const P = styled.p`
    margin-bottom: 0px;
    font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
    color: ${(props) =>
    props.tipo === "cinza"
        ? "#949494"
        : props.tipo === "branco"
        ? "#ffffff"
        : props.tipo === "vermelho" ? "#ff5963"
        : "#282a35"};
    line-height: auto;
    cursor: ${(props) => (props.cursor === "pointer" ? "pointer" : "auto")};
    margin-bottom: ${(props) => props.marginb !== undefined ? `${props.marginb}rem` : "1rem"};
`;
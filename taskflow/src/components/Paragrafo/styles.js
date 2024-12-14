import styled from "styled-components";

export const P = styled.p`

    font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
    color: ${(props) =>
    props.tipo === "cinza"
        ? "#949494"
        : props.tipo === "branco"
        ? "#ffffff"
        : "#282a35"};
    line-height: auto;
    cursor: ${(props) => (props.cursor === "pointer" ? "pointer" : "none")};
`;
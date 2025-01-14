import styled from "styled-components";

export const DivOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;

`

export const DivModal = styled.form`
    width: 40rem;
    top: 50%;
    left: 50%;
    position: absolute ;
    transform: translate(-50%, -50%); 
    border-radius: 24px;
    background-color: #ffff;
    padding: 16px;
    z-index: 999;

    .btn-primary {
        background-color: #007bff;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #026cdd;
        }
    }

    .btn-danger {
        background-color: #ff4d4d;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #e63939;
        }
    }

    position: absolute; /* Permite ajustar a posição */
    top: 50%; /* Posição central vertical */
    left: 50%; /* Posição central horizontal */
    transform: translate(-50%, -50%); /* Move o modal para o centro exato */
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
`;
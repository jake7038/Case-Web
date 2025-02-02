import styled from "styled-components";

export const DivOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const DivModal = styled.form`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px 40px;
    width: 50%;
    max-width: 600px;

    .btn-danger {
        background-color: #ff4d4d;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #e63939;
        }
    }

    .btn-primary {
        background-color: #007bff;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }

    .btn-success {
        margin-left: 4rem;
        background-color: #28a745;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #218838;
        }
    }

    .form-control {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 8px 10px;
        font-size: 16px;
        width: 100%;
    }

    .form-control:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    .foto img {
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-top: 10px;
    }
`;

export default { DivOverlay, DivModal };

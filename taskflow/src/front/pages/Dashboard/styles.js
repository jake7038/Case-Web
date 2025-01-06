import styled from "styled-components"

export const GridQuadros = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); 
    gap: 1rem; 
    height: 74vh;
    width: 100%; 
    overflow-x: hidden;
    overflow-y: auto;
    margin: 2% 0% 0% 5%;
    padding: 1rem;
    background-color: #f9f9f9; 
    border-radius: 8px; 
`;

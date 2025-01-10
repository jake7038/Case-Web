import styled from "styled-components"

export const ListaTarefas = styled.div`
    height: 74vh;
    width: 27rem;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 2% 0% 0% 5%;
`

export const GridListas = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); 
    gap: 1rem; 
    width: 100%; 
    overflow-x: hidden;
    overflow-y: auto;
    margin: 2% 0% 0% 5%;
    padding: 1rem;
    
    border-radius: 8px; 
`;

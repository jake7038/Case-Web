import styled, {createGlobalStyle} from 'styled-components'


const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  list-style: none;
}
  body{
    padding-top: 80px;
    background: linear-gradient(90deg, rgba(9,164,121,1) 6%, rgba(67,91,121,1) 47%, rgba(50,40,190,1) 100%);


    @media (max-width:768px) {
    padding-top:16px;
    }

  }

`
export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1024 px;
  width: 50%;
  margin: 0 auto;
  
  @media (max-width:768px) {
    width: 90%;
    display: block;
  }
`
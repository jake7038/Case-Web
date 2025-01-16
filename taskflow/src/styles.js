import styled, {createGlobalStyle} from 'styled-components'


const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  list-style: none;
}
  body{
    


    @media (max-width:768px) {
    padding-top:16px;
    }

  }

`
export default EstiloGlobal;

export const Bodylogin = styled.body`
  padding-top: 80px;
  padding-bottom: 40px;
  background: linear-gradient(to right, #c1ff72, #0cc0df);
  min-height: 100vh;
  
`

export const Container = styled.div`
  max-width: 1024 px;
  width: 50%;
  margin: 0 auto;
  
  @media (max-width:768px) {
    width: 90%;
    display: block;
  }
`
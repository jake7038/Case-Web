//arquivo .tsx principal
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './containers/login'
import EstiloGlobal, { Container } from './styles'
import Teste from "./containers/EsqueciSenha";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={   
          <>
          <EstiloGlobal/>
            <Container> 
              <Login />
            </Container>
          </>} />
        <Route path="/esqueci-senha" element={<Teste/>} />
      </Routes>
    </Router>
      
  )
}

export default App

//arquivo .tsx principal
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './front/pages/login'
import EstiloGlobal, { Container , Bodylogin } from './styles'
import Dashboard from "./front/pages/Dashboard";
import TaskPage from "./front/pages/TaskPage";
import EsqueciSenha from "./front/pages/EsqueciSenha";
function App() {
  return (
    <Router>
      <EstiloGlobal/>
      <Routes>
        <Route path="/" element={   
          <Bodylogin>
          
            <Container> 
              <Login/>
            </Container>
          </Bodylogin>} 
          />

        <Route path="/dashboard" element={
          <>
          <Dashboard>
          </Dashboard>
          </>
        } />
        <Route path="/task" element={
          <>
          <TaskPage>
          </TaskPage>
          </>
        } />

        <Route path="/esqueci-senha" element={
          <Bodylogin>
          <EsqueciSenha>
          </EsqueciSenha>
          </Bodylogin>
        } />

      </Routes>
    </Router>
      
  )
}

export default App

//arquivo .tsx principal
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './containers/login'
import EstiloGlobal, { Container , Bodylogin } from './styles'
import EsqueciSenha from "./containers/EsqueciSenha";
import Dashboard from "./containers/Dashboard";
import TaskPage from "./containers/TaskPage";

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
          </Bodylogin>} />
        <Route path="/esqueci-senha" element={
          <Bodylogin>
          <Container>
            <EsqueciSenha/>
          </Container>
          </Bodylogin>
        } />

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
      </Routes>
    </Router>
      
  )
}

export default App

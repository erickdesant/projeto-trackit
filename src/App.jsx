import {BrowserRouter, Route,Routes} from "react-router-dom";
import Login from "../pages/Login.jsx";
import Cadastro from "../pages/Cadastro.jsx";
import Habitos from "../pages/Habitos.jsx";
import Hoje from "../pages/Hoje.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Login />} />
            <Route path = "cadastro" element={<Cadastro />} />
            <Route path = "hoje" element={<Hoje />} />
            <Route path = "habitos" element={<Habitos />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import {BrowserRouter, Route,Routes} from "react-router-dom";
import Login from "../pages/Login.jsx";
import Cadastro from "../pages/Cadastro.jsx";
import Habitos from "../pages/Habitos.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Login />} />
            <Route path = "cadastro" element={<Cadastro />} />
            <Route path = "habitos" element={<Habitos />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

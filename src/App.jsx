import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Login from "../pages/Login.jsx";
import Cadastro from "../pages/Cadastro.jsx";
import Habitos from "../pages/Habitos.jsx";
import Hoje from "../pages/Hoje.jsx";
import {LoginProvider} from "./LoginContext.jsx";
import {useEffect} from "react";


function App() {
  return (
    <>
        <LoginProvider>
            <BrowserRouter>
                <AppComponent>
                </AppComponent>
            </BrowserRouter>
        </LoginProvider>
    </>
  )
}

export default App

function AppComponent() {
    return (

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="hoje" element={<Hoje />} />
                <Route path="habitos" element={<Habitos />} />
            </Routes>
    );
}
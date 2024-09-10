import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useContext, useState} from "react";
import LoginContext from "../src/LoginContext.jsx";


function Hoje(){
    const [user, setUser] = useContext(LoginContext)
    return(
        <>
            <Navbar/>

            <Footer/>
        </>
    )
}

export default Hoje
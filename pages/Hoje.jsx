import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useContext} from "react";
import LoginContext from "../src/LoginContext.jsx";


function Hoje(){
    const [user] = useContext(LoginContext)
    console.log(user)
    return(
        <>
            <Navbar/>

            <Footer/>
        </>
    )
}

export default Hoje
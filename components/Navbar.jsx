import styled from "styled-components";
import {useContext, useEffect} from "react";
import LoginContext from "../src/LoginContext.jsx";
import {useNavigate} from "react-router-dom";

function Navbar(){

    const [user] = useContext(LoginContext)
    const navigate = useNavigate();

    console.log(user)

    useEffect(() => {
        if (!user){
            return (
                navigate("/")
            )
        }
    }, []);

    return(
        <>
            <Nav>
                <div>
                    TrackIt
                </div>
                <div>
                    <Avatar src = {user.image} alt = "avatar"/>
                </div>
            </Nav>
        </>
    )
}

export default Navbar

const Nav = styled.nav`
    display: flex;
    background-color: #126BA5;
    position:fixed;
    top: 0;
    width: 100%;
    justify-content: space-between;
    font-family: 'Playball',cursive;
    color: white;
    div{
        padding: 10px;
        display:flex;
        align-items: center;
    }
    box-shadow: 0px 4px 4px 0px #00000026;
`

const Avatar = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`
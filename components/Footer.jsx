import styled from "styled-components";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <>
            <Foot>
                <FootButton ><Link to = "/habitos">Hábitos</Link></FootButton>
                <FootButton ><Link to = "/hoje">Hoje</Link></FootButton>
            </Foot>
        </>
    )
}

export default Footer

const Foot = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
`
const FootButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    border: none;
    
    Link{
        
    }
`
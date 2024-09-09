import styled from "styled-components";

function Navbar(){
    return(
        <>
            <Nav>
                <div>
                    TrackIt
                </div>
                <div>
                    Avatar
                </div>
            </Nav>
        </>
    )
}

export default Navbar

const Nav = styled.nav`
    display: flex;
    background-color: #126BA5;
    justify-content: space-between;
    font-family: 'Playball',cursive;
    color: white;
    div{
        padding: 10px;
    }
    box-shadow: 0px 4px 4px 0px #00000026;
`
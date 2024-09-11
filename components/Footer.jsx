import styled from "styled-components";
import {Link} from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

function Footer(){
    return(
        <>
            <Foot>
                <FootButton> <StyledLink to = "/habitos"> <CalendarMonthIconStyled/> Hábitos </StyledLink></FootButton>
                <FootButton> <StyledLink to = "/hoje"> <EventAvailableIconStyled/>Hoje</StyledLink></FootButton>
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
    height: 10vh;
`
const FootButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    border: none;
`
const StyledLink = styled(Link)`
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:visited {
        color: #000;
    }
`
const CalendarMonthIconStyled = styled(CalendarMonthIcon)`
    margin-right: 4px;
`
const EventAvailableIconStyled = styled(EventAvailableIcon)`
    margin-right: 4px;
`
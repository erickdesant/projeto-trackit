import styled from "styled-components";
import {Link} from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

function Footer(){
    return(
        <>
            <Foot>
                <FootButtonActive> <StyledLink to = "/habitos" > <CalendarMonthIconStyled/> <p>Hábitos</p> </StyledLink></FootButtonActive>
                <FootButtonInactive> <StyledLinkInactive to = "/hoje"> <EventAvailableIconStyled/><p>Hoje</p></StyledLinkInactive></FootButtonInactive>
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
const FootButtonActive = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    border: none;
    background-color:#FFFFFF;
`
const FootButtonInactive = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    border: none;
    background-color:#52B6FF;
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
    p{
        color:#D4D4D4;
    }
`
const StyledLinkInactive = styled(Link)`
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:visited {
        color: #000;
    }
    p{
        color: white;
    }
`
const CalendarMonthIconStyled = styled(CalendarMonthIcon)`
    margin-right: 4px;
    color:#D4D4D4;
`
const EventAvailableIconStyled = styled(EventAvailableIcon)`
    margin-right: 4px;
    color: white;
`
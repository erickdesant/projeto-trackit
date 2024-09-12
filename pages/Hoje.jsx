import Navbar from "../components/Navbar.jsx";
import Footer2 from "../components/Footer2.jsx";
import styled from "styled-components";
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/pt';
dayjs.extend(localeData);
dayjs.extend(updateLocale);
dayjs.locale('pt');


function Hoje(){

    const dia = dayjs().format('dddd, DD/MM')

        return(
            <>
                <Navbar/>
                <BodyWrapper>
                    <Title><h1>{dia}</h1></Title>
                </BodyWrapper>
                <Footer2/>
            </>
        )
}

export default Hoje


const BodyWrapper = styled.div`
    display:flex;
    background-color:#F0F0F0;
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 10vh;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
        display: flex;
        justify-content: space-between;
        width: 70%;
        padding: 5px;
        margin-top: 10px;
        h1{
            font-family: 'Lexend Deca',sans-serif;
            color: #126BA5;
        }
`
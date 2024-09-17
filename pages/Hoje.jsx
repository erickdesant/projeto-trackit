import Navbar from "../components/Navbar.jsx";
import Footer2 from "../components/Footer2.jsx";
import styled from "styled-components";
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/pt';
import axios from 'axios';
import {useContext, useEffect, useState} from "react";
import LoginContext from "../src/LoginContext.jsx";
import CheckIcon from '@mui/icons-material/Check';
dayjs.extend(localeData);
dayjs.extend(updateLocale);
dayjs.locale('pt');


function Hoje(){
    const [user] = useContext(LoginContext)
    const token = user.token
    const [habitos,setHabitos] = useState([])
    const body = {}
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    function getHoje(){
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config)
            .then((response) => {
                console.log(response)
                setHabitos(response.data)
            })
            .catch((err) => {
                console.log(err)
                alert("Erro ao buscar hábitos.")
            })
    }

    useEffect(() => {
        getHoje()
    }, []);

    function checkHabit(id,active){

        if(active){
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,body,config)
            .then(() => {
                getHoje()
            })
            .catch(() => {
                alert("Erro ao checar hábito. Tente novamente.")
            })
        }
        else{
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,body,config)
                .then((response) => {
                    console.log(response)
                    getHoje()
                })
                .catch(() => {
                    alert("Erro ao checar hábito. Tente novamente.")
                })
        }
    }

    const dia = dayjs().format('dddd, DD/MM')

        return(
            <>
                <Navbar/>
                <BodyWrapper>
                    <Title><h1>{dia}</h1></Title>
                    {habitos.map((habito,index) => (
                        <HabitoCard key = {index}>
                            <div>
                                <h2>{habito.name}</h2>
                                <p>Sequência atual: {habito.currentSequence}</p>
                                <p>Seu recorde: {habito.highestSequence}</p>
                            </div>
                            {habito.done ?
                                <ButtonDiv active = {true} onClick={() => checkHabit(habito.id,true)}>
                                    <CheckIcon sx={{color:'white',height:'100%',width:'60px'}}/>
                                </ButtonDiv>
                                :
                                <ButtonDiv active = {false} onClick={() => checkHabit(habito.id,false)}>
                                    <CheckIcon sx={{color:'white',height:'100%',width:'60px'}}/>
                                </ButtonDiv>
                            }
                        </HabitoCard>
                    ))}
                </BodyWrapper>
                <Footer2/>
            </>
        )
}

export default Hoje


const BodyWrapper = styled.div`
    display:flex;
    background-color:#F0F0F0;
    min-height: 80vh;
    margin-bottom: 10vh;
    margin-top: 10vh;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
        display: flex;
        justify-content: space-between;
        width: 70%;
        padding: 6px;
        margin-top: 10px;
        h1{
            font-family: 'Lexend Deca',sans-serif;
            color: #126BA5;
        }
`

const HabitoCard = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lexend Deca',sans-serif;
    margin: 10px 0;
    padding: 10px;
    width: 70%;
    display:flex;
    justify-content: space-between;
    h2{
        margin: 0 0 8px 0 ;
        font-size:20px;
        color: #666666;
    }
    p{
        font-size: 12px;
        color: #666666;
        margin: 2px 0;
    }
`

const ButtonDiv = styled.div`
    background-color: ${({ active }) => active ? '#8FC549' : '#EBEBEB'};
    border-radius: 5px;
    display: flex;
    justify-content: center;
`
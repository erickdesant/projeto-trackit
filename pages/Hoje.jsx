import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useContext, useEffect, useState} from "react";
import LoginContext from "../src/LoginContext.jsx";
import axios from "axios";
import styled from "styled-components";


function Hoje(){
    const [user] = useContext(LoginContext)
    const token = user.token
    const [habitos,setHabitos] = useState([])
    console.log(JSON.stringify(habitos))

    function criarHabito(){
        const body = {
                name: 'Jogar futebol',
                days: [1, 3, 5]
            }
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',body,config).then((response) => {
            console.log(response)
        })
            .catch((error) => {
                console.log(error)
            })
    }
    //criarHabito()
    function buscarHabitos () {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setHabitos(response.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        buscarHabitos()
    }, []);
        return(
            <>
                <Navbar/>
                <BodyWrapper>
                    <Title><h1>Meus hábitos</h1> <button>+</button></Title>
                    { habitos.length > 0 ? (
                        habitos.map((habito) => (
                        <HabitoCard key = {habito.id}> {habito.name}</HabitoCard>
                    )))
                        :<p>Carregando</p>}
                </BodyWrapper>
                <Footer/>
            </>
        )
}

export default Hoje

const HabitoCard = styled.div`
    height: 10%;
    width: 70%;
    background-color: #FFFFFF;
    border-radius: 5px;
    display:flex;
    font-family: 'Lexend Deca',sans-serif;
    margin:10px;
    padding: 10px;
`

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
        button{
            border:none;
            border-radius: 5px;
            color: white;
            background-color:#52B6FF;
        }
`
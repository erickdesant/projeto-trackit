import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styled from "styled-components"
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import LoginContext from "../src/LoginContext.jsx";

function Login(){
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
                <Title><h1>Meus hábitos</h1> <button>+</button>
                </Title>
                <AddHabito>
                    <form>
                        <input type="text" placeholder="nome do hábito" name="habito"/>
                        <div>
                            <button>D</button>
                            <button>S</button>
                            <button>T</button>
                            <button>Q</button>
                            <button>Q</button>
                            <button>S</button>
                            <button>S</button>
                            <button>D</button>
                        </div>
                        <div className = "mainButtons">
                            <button>cancelar</button>
                            <button>Salvar</button>
                        </div>
                    </form>
                </AddHabito>
                {habitos.length > 0 ? (
                        habitos.map((habito) => (
                            <HabitoCard key={habito.id}>
                                <h2>{habito.name}</h2>
                                <p>Sequência atual: x dias</p>
                                <p>Seu recorde: x dias</p>

                            </HabitoCard>
                        )))
                    :<p>Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!</p>}
            </BodyWrapper>
            <Footer/>
        </>
    )
}

export default Login

const BodyWrapper = styled.div`
    display:flex;
    background-color:#F0F0F0;
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 10vh;
    align-items: center;
    flex-direction: column;
    font-family: 'Lexend Deca',sans-serif;
`
const Title = styled.div`
        display: flex;
        justify-content: space-between;
        width: 70%;
        padding: 5px;
        margin-top: 10px;
        h1{
            
            color: #126BA5;
        }
        button{
            border:none;
            border-radius: 5px;
            color: white;
            background-color:#52B6FF;
        }
`

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

const AddHabito = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 10px 0;
    button{
        border: 1px solid #D4D4D4;
        color: #D4D4D4;
        background-color: white;
        border-radius: 5px;
    }
    *{
        margin: 2px;
    }
    input{
        width: 95%;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        padding: 4px;
    }
    input::placeholder{
        color:#D4D4D4;
    }
    .mainButtons {
        display:flex;
        justify-content: flex-end;
    }
    .mainButtons button{
        color: black;
    }
`
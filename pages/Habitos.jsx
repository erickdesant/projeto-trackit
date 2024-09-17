import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styled from "styled-components"
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import LoginContext from "../src/LoginContext.jsx";
import {ThreeDots} from "react-loader-spinner";

function Login(){
    const [user] = useContext(LoginContext)
    const token = user.token
    const [habitos,setHabitos] = useState([])
    const [isVisible,setIsVisible] = useState(false)
    const [dias,setDias] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    console.log(JSON.stringify(habitos))

    function toggleIsVisible(){
        setIsVisible(!isVisible)
    }

    function criarHabito(e){
        e.preventDefault();
        setIsLoading(true)
        const name = e.target.habito.value

        const body = {
            name: name,
            days: dias
        }
        console.log(body)
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',body,config)
            .then((response) => {
            console.log(response)
            buscarHabitos()
            setDias([])
            e.target.habito.value = ''
            setIsLoading(false)
        })
            .catch(() => {
                setIsLoading(false)
                alert("Erro ao criar hábito. Tente novamente.")
            })
    }

    function buscarHabitos () {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setHabitos(response.data)
            console.log(response.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        buscarHabitos()
    }, []);

    function handleButton(index){
        if(dias.includes(index)){
            const newDias = dias.filter(day => day !== index)
            setDias(newDias)
        }
        else{
            setDias([...dias,index])
        }
        console.log(dias)
    }

    return(
        <>
            <Navbar/>
            <BodyWrapper>
                <Content>
                    <Title><h1>Meus hábitos</h1> <button onClick={toggleIsVisible}>+</button>
                    </Title>
                    {isVisible && (
                        <AddHabito>
                            <form onSubmit={(e) => criarHabito(e)}>
                                <input type="text" placeholder="nome do hábito" name="habito" disabled={isLoading}/>
                                <div>
                                    {["D","S","T","Q","Q","S","S"].map((day,index) => (
                                        <ToggleButton type = "button" key = {index} onClick = {() => handleButton(index)} active = {dias.includes(index)} disabled={isLoading}>
                                            {day}</ToggleButton>
                                    ))}
                                </div>
                                <div className = "mainButtons">
                                    <button type = "button" className="cancel" onClick={() => setIsVisible(false)} disabled={isLoading}>Cancelar</button>
                                    <button type="submit" className="save" disabled={isLoading}>{isLoading ? <ThreeDots color="white" height="10px" width = "18px" ariaLabel="three-dots-loading" /> : 'Salvar'}</button>
                                </div>
                            </form>
                        </AddHabito>
                    )}
                    {habitos.length > 0 ? (
                            habitos.map((habito) => (
                                <HabitoCard key={habito.id}>
                                    <h2>{habito.name}</h2>
                                    {["D","S","T","Q","Q","S","S"].map((day,index) => (
                                        <ToggleButton type = "button" key = {index} active = {habito.days.includes(index)}>
                                            {day}</ToggleButton>
                                    ))}

                                </HabitoCard>
                            )))
                        :<p>Você não tem nenhum hábito cadastrado ainda.
                            Adicione um hábito para começar a trackear!</p>}
                </Content>
            </BodyWrapper>
            <Footer/>
        </>
    )
}

export default Login

const BodyWrapper = styled.div`
    display:flex;
    background-color:#F0F0F0;
    min-height: 80vh;
    margin-bottom: 10vh;
    margin-top: 10vh;
    align-items: center;
    flex-direction: column;
    font-family: 'Lexend Deca',sans-serif;
`
const Title = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 5px;
    margin-top: 10px;
    h1{

        color: #126BA5;
    }
    button {
        border: none;
        border-radius: 5px;
        color: white;
        background-color: #52B6FF;
    }
`

const HabitoCard = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lexend Deca',sans-serif;
    margin: 10px 0;
    padding: 10px;
    h2{
        margin: 0 0 8px 0 ;
    }
`

const AddHabito = styled.div`
    display:flex;
    flex-direction: column;

    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 10px 0;

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
        .cancel{
            border: none;
            color: #52B6FF;
            background-color: white;
        }
        .save{
            border: none;
            color: white;
            background-color: #52B6FF;
            border-radius:5px;
            padding: 4px 10px;
        }
    }
`

const Content = styled.div`
    width: 70%;
`
const ToggleButton = styled.button`
    border: 1px solid #D4D4D4;
    color: ${({ active }) => (active ? 'white' : '#D4D4D4')};
    background-color: ${({active}) => (active ? '#CFCFCF' : 'white') };
    border-radius: 5px;
    font-family: 'Lexend Deca',sans-serif;
    height: 20px;
    margin: 0 2px;
`
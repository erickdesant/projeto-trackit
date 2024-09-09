import {Link} from "react-router-dom";
import styled from "styled-components";

function Login(){
    return(
        <>
            <BodyWrapper>
                <img src="../public/Group%208.png" alt = "logo"/>
                <form>
                    <input type="text" value="email" placeholder="email"/>
                    <input type="password" value="senha" placeholder="senha"/>
                    <button type="submit" value="Login">Entrar</button>
                </form>
                <a><Link to = "/cadastro">Não tem uma conta? Cadastre-se!</Link></a>
            </BodyWrapper>
        </>
    )
}

export default Login

const BodyWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    margin-left: 5vw;
    font-family: 'Lexend Deca', sans-serif;
    input{
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        display:block;
        margin:3px;
        padding: 5px;
        color: #DBDBDB;

    }
    form{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    button{
        background-color: #52B6FF;
        color: #FFFFFF;
        border: none;
        padding: 5px;
        border-radius: 5px;
        margin: 5px;
    }
    a{
        color: #52B6FF;
        margin:5px;
        font-size: 14px;
    }
`

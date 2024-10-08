import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {useState} from "react";
import {ThreeDots} from "react-loader-spinner";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    function fazerCadastro(e){
        e.preventDefault()

        setCarregando(true)

        const cadastro = {
            email: email,
            name: nome,
            image: foto,
            password: password
        }
        console.log(cadastro)
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',cadastro)
            .then(() => navigate("/"))
            .catch(error => {
                console.log(error)
                alert("Dados inválidos! Tente novamente.")
                navigate(0)
            })
            .finally(() => {
                setCarregando(false)
        })
    }

    return(
        <>
            <BodyWrapper>
                <img src="/Group%208.png" alt="logo"/>
                <form onSubmit={fazerCadastro}>
                    <Input type="text" value={email} placeholder="email"
                    onChange = {e => setEmail(e.target.value)} required disabled = {carregando} carregando = {carregando}/>
                    <Input type="password" value={password} placeholder="senha"
                    onChange = {e => setPassword(e.target.value)} required disabled = {carregando} carregando = {carregando} />
                    <Input type="text" value={nome} placeholder="nome"
                    onChange = {e => setNome(e.target.value)} required disabled = {carregando} carregando = {carregando}/>
                    <Input type="text" value={foto} placeholder="foto"
                    onChange = {e => setFoto(e.target.value)} required disabled = {carregando} carregando = {carregando}/>
                    <Button type = "submit" disabled={carregando}>{carregando ? <ThreeDots color="white" height="13px" width = "24px" ariaLabel="three-dots-loading" /> : 'Cadastrar'}</Button>
                </form>
                <a><Link to="/"> Já tem uma conta? Faça login!</Link></a>
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
    
    
    form{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    button{
        
    }
    a{
        color: #52B6FF;
        margin:5px;
        font-size: 14px;
    }
`
const Input = styled.input`
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  display: block;
  margin: 3px;
  padding: 5px;
  background-color: ${({ carregando }) => (carregando ? '#F2F2F2' : '#FFFFFF')};
  
  &:disabled {
    cursor: not-allowed;
  }
  &::placeholder{
      color: #DBDBDB;
  }
`;

const Button = styled.button`
    background-color: #52B6FF;
    color: #FFFFFF;
    border: none;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    display: flex;
    justify-content: center;
`

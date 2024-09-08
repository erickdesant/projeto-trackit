function Login(){
    return(
        <>
            <img src="../public/Group%208.png" alt = "logo"/>
            <form>
                <input type="text" value="email" placeholder="email"/>
                <input type="password" value="senha" placeholder="senha"/>
                <button type="submit" value="Login">Entrar</button>
            </form>
            <a>Não tem uma conta? Cadastre-se!</a>
        </>
    )
}
export default Login
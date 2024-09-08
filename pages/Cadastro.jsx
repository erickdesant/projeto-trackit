function Login(){
    return(
        <>
            <img src="../public/Group%208.png" alt="logo"/>
            <form>
                <input type="text" value="email" placeholder="email"/>
                <input type="password" value="senha" placeholder="senha"/>
                <input type="text" value="nome" placeholder="nome"/>
                <input type="text" value="foto" placeholder="foto"/>
                <button type="submit" value="Login">Cadastrar</button>
            </form>
            <a>Já tem uma conta? Faça login!</a>
        </>
    )
}

export default Login
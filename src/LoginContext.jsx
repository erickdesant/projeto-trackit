import {createContext,useState} from 'react'

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    return(
        <LoginContext.Provider value={[user, setUser]}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginContext
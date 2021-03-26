import React, { useEffect, useState } from 'react';
import { isAuthenticated } from "../../services/auth"

export const RootContext = React.createContext();

export default ({ children }) => {
    const [ auth, setAuth ] = useState(false)
    const [ user, setUser ] = useState({})
    const userContext = { auth, user, setAuth, setUser }
    
    useEffect(() => {
        isAuthenticated()
        .then(resp => {
            setAuth(resp.auth)
            setUser(resp.user)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <RootContext.Provider value={{ userContext }} >
            { children }
        </RootContext.Provider>
    )
}
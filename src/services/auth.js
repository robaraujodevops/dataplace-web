import React, { useState, useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import api from "../services/api";
import { RootContext } from "../contexts/root";

export const TOKEN_KEY = "@dataplace-token";

export const isAuthenticated = async () => {
    let auth = { "isAuth": false }
    try{
        const checkAuth = await api.get("/check_auth", {
            validateStatus: status => status < 500
        }).catch(error => console.log(error.toJSON()));

        if(getToken() === null) {
            return auth;
        }

        if(checkAuth && checkAuth.status === 202) {
            return checkAuth.data;
        }
        
    }catch(err){
        throw new Error('[WARNING]: Error in auth process!');
    }

    return auth;
}

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => localStorage.setItem(TOKEN_KEY, token);

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const PrivateRoute = ({ component: Component, page, ...rest}) => {
    const [ validate, setValidate ] = useState(false)
    const { userContext } = useContext(RootContext);
    
    isAuthenticated().then((resp) => {
      userContext.setAuth(resp.auth)
      setValidate(true)
    })

    if (!validate) return <div></div>

    return (
        <Route
            {...rest}
            render={props => {
                    return userContext.auth ? (
                        <Component {...props} page={page} />
                    ) : (
                        <Redirect to={{ pathname: "/login", state: { from: props.location, redirect: true, error: "Sessão expirada!" } }} />
                    )
                } 
            }
        />
    )

};
import React from "react";
import { Route, Redirect } from "react-router-dom";

export const TOKEN_KEY = "@dataplace-token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const PrivateRoute = ({ component: Component, page, ...rest}) => {
    
    return (
    <Route
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props} page={page} />
            ) : (
                <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
            )
        }
    />
)};
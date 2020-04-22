import React from "react";
import { Helmet } from 'react-helmet';

export const Head = (props) => {
    return (
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
    )
}

export const InputLog = (props) => {
    return (
        <input {...props}/>
    )
}

export const customBackendErrors = (code) => {
    switch(code){
        case "23505":
            return "Já existe um e-mail cadastrado com esse endereço"

        case "23502":
            return "Usuário não cadastrado"
        default:
    }
    return false
}
import React, { useState, useEffect } from "react";

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

const preCapitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1)
}

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    s = preCapitalize(s).split(" ");
    
    if (s.length > 0){
        let r = s.map((w) => {
            return  `${preCapitalize(w)}`;
        })
      
        return r.join(" ")
    }else{
        return `${preCapitalize(s)}`;
    }

}

export const zipCodeSanitize = (code) => {
    return code.toString().replace(/(?<=^.{4})/, "-");
}

export const useScripts = (src) => {
    const [state, setState] = useState({
        loaded: false,
        error: false
    });

    useEffect(() => {
        let script = document.createElement('script');
        script.src = src;
        script.async = true;

        const onScriptLoad = () => {
            setState({
            loaded: true,
            error: false
            });
        };

        script.addEventListener('load', onScriptLoad);
        //script.addEventListener('error', onScriptError);

        // Add script to document body
        document.body.appendChild(script);

        // Remove event listeners on cleanup
        return () => {
            script.removeEventListener('load', onScriptLoad);
            //script.removeEventListener('error', onScriptError);
        };
    }, [src]);
    
    return [state.loaded, state.error];

}
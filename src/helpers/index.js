import React, { useState, useEffect } from "react";

export const InputLog = (props) => {
    return (
        <input {...props}/>
    )
}

export const customBackendErrors = (code) => {
  console.log(code)
  switch(code){
    case "23505":
      return "Já existe um e-mail cadastrado com esse endereço"

    case "UserNotFoundException":
      return "* Usuário não existe"
    case "PasswordMisMatchException":
      return "* Senha inválida, se quiser recupera-la clique no link abaixo"
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

export const clearClass = (elsRange, classes) => {
    elsRange.forEach(els => {
        els.forEach(el => {
            classes.forEach(cl =>
                el.classList.remove(cl)
            )
        })
    })
}

export const dateParser = (date, comp) => {
    let d = new Date(date)
    const months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]

    switch(comp) {
        case "recent-activities":
            return {
                day: d.getDay(),
                month: months[d.getMonth()]
            }

        default:
            return {
                day: d.getDay(),
                month: months[d.getMonth()]
            }
    }
}

export const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const parsePageData = (dataPage, menuContext) => {
    let { path, params, url } = dataPage;
    let subPage = {};
    
    let { title } = menuContext.filter(function(item) {
        return url.includes(item.page);
    }).pop()

    for (var par in params) {
        path = path.replace(`:${par}?`, "")
        subPage[par] = params[par];
    }

    return {
        page: path,
        subPage: subPage,
        params: params,
        url: url,
        title: title,
    }
}

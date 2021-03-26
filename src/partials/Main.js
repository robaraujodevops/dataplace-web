import React from "react";
import { Helmet } from "react-helmet";
import { capitalize } from "../helpers"
import Analytics from "../pages/Analytics/";
import Imoveis from "../pages/Imoveis/";
import Predios from "../pages/Predios/";
import Predio from "../pages/Predio/";
import Contatos from "../pages/Contatos/";

export default function Main(props){
    const { page, params, title } = props;

    const getComponent = (page) => {
        switch(page){
            case "/admin/analytics":
                return <Analytics {...props} />
            case "/admin/contatos":
                return <Contatos {...props} />
            case "/admin/imoveis":
                return <Imoveis {...props}/>
            case "/admin/predios":
                return <Predios {...props} />
            case "/admin/predio":
                return <Predio {...props} />
            default:
                return <div>Not Found</div>
        }
    }

    // let title = 
    // title += params.id ? " - " + params.id : ""

    return (
        <>
            <Helmet title={"Admin - " + capitalize(title)} />
            <div className="right_col" role="main">

                <div className="clearfix"></div>
                
                {/* <TopNav /> */}

                {getComponent(page)}

            </div>
        </>
    )
}
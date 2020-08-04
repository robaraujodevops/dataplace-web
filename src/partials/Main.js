import React from "react";
import { Helmet } from "react-helmet";
import { capitalize } from "../helpers"
import Unidades from "../pages/Unidades/";
import Predios from "../pages/Predios/";
import Predio from "../pages/Predio/";
import Proprietarios from "../pages/Proprietarios/";

export default function Main(props){
    const {page, subpage} = props.data;
    const {params} = props;
    const getComponent = (page) => {
        switch(page){
            case "proprietarios":
                return <Proprietarios data={props.data}/>
            case "unidades":
                return <Unidades data={props.data}/>
            case "predios":
                return <Predios data={props.data}/>
            case "predio":
                return <Predio data={props.data} params={params} />
            default:
                return <div></div>
        }
    }

    let title = "Admin - " + capitalize(page)
    title += params.id ? " - " + params.id : "" 

    return (
        <>
            <Helmet title={title} />
            <div className="right_col" role="main">

                <div className="clearfix"></div>
                {getComponent(page)}

            </div>
        </>
    )
}
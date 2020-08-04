import React, { useState, useEffect } from "react";
import api from "../../services/api";
import CountComp from "./CountComp";

export default function TileCount() {
    const [ pay, setPay ] = useState({})

    useEffect(() => {
        api.get("/tile-data").then((resp) => setPay(resp),
            err => setPay(err)
        )
    }, [])

    return (
        <div className="row tile_count">
            {pay.data 
            ? pay.data.tileData.map((tile,i) => 
                <CountComp title={tile.title} count={tile.count} key={i} />
            )
            : <div>Carregando...</div>}
        </div>
    )
}
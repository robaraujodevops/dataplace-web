import { map } from "jquery";
import React, { useState, useEffect } from "react"
import api from "../../../services/api";
import Gallery from "../../Gallery";

export default props => {
    const { images, active } = props.block;
    console.log(active)
    return (
        <div key="galeria" role="tabpanel" className={`tab-pane fade ${active ? "active in" : ""}`} id="tab_galeria" aria-labelledby="galeria-tab">
            <Gallery images={images} options={{"control": false}} />
        </div>
    )
}
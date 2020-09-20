import { map } from "jquery";
import React, { useState, useEffect } from "react"
import api from "../../../services/api";
import Gallery from "../../Gallery";

export default props => {
    const { images } = props.block
    console.log("galerytab", images.length )
    return (
        <div key="galeria" role="tabpanel" className="tab-pane fade" id="tab_galeria" aria-labelledby="galeria-tab">
            <Gallery images={images} />
        </div>
    )
}
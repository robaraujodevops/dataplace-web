import React from "react"
import Gallery from "../../Gallery";

export default props => {
    const { images, active } = props.block;

    return (
        <div key="galeria" role="tabpanel" className={`tab-pane fade ${active ? "active in" : ""}`} id="tab_galeria" aria-labelledby="galeria-tab">
            <Gallery images={images} options={{"control": false}} />
        </div>
    )
}
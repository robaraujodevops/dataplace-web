import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Controls, Holder, Current, Arrow } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Gallery(props) {
    const { images } = props
    const {id} = useParams();

    console.log(images.length)
    
    return (
        <>
        {images.length > 0 ? 
            <section className="slide-images">
                <Holder className="slide-holder">
                    <Current className="current-slide">
                        <img src={`/images/builds/${id}/gallery/${images[0].name}.${images[0].extension}`} alt=""/>
                    </Current>
                    <Controls className="slideshow-controller">
                        <Arrow className="prev" />
                        <Arrow className="next" />
                    </Controls>
                </Holder>
            </section>
            :
            <div>No Images to Show</div>
        }
        </>
    )
}
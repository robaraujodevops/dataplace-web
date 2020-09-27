import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
    Controls, 
    Holder,
    Slider,
    ArrowField, 
    ArrowPrev, 
    ArrowNext,
    MenuGallery,
    PhotoGallery,
    PhotoList
} from "./styles";

function controlSlide() {
    const prev = () => {
        console.log("prev")
    }

    const next = () => {
        console.log("next")
    }

    return {
        prev,
        next
    }
}

export default function Gallery({images}) {
    const { id } = useParams();
    const [ gallery, setGallery ] = useState({"currIndex": 0, "loadImgs": false, "deslc": 0});

    if(images.length > 0 && !gallery.loadImgs){
        let imgsMap = {}, width = 0;

        images.map((i,p) => {
            imgsMap[p] = width;
            width = width + 1009
        })

        setGallery({
            ...gallery,
            ...{"loadImgs": true, 
                "length": images.length,
                "imgsMap": imgsMap
            }
        })
    }
    
    const handleClickArrow = (e, str) => {
        let index = gallery.currIndex
        
        if(str === "prev" && index > 0) {   
            --index
        }else if(str === "next" && index < (images.length - 1)) {
            index++
        }

        setGallery({
            ...gallery, 
            ...{"currIndex": index, 
                "deslc": gallery.imgsMap[index]
            }
        })
    }

    const handleClickMenu = (idx) => {
        console.log(idx)
        setGallery({
            ...gallery, 
            ...{"currIndex": idx, 
                "deslc": gallery.imgsMap[idx]
            }
        })
    }

    return (
        <>
        {gallery.imgsMap ? 
            <section className="slide-images">
                <Holder className="slide-holder">
                    <Slider className="current-slide" deslc={gallery.deslc}>
                        <div>
                            {images.map((img, key) => <img key={key} src={`/images/builds/${id}/gallery/${img.name}.${img.extension}`} alt=""/>)}
                        </div>
                    </Slider>
                    <Controls className="slideshow-controller">
                        <ArrowField><ArrowPrev onClick={((e) => handleClickArrow(e, "prev"))} /></ArrowField>
                        <ArrowField><ArrowNext onClick={((e) => handleClickArrow(e, "next"))} /></ArrowField>
                    </Controls>
                </Holder>
                <MenuGallery className="menu-gallery">
                    <div>
                        <PhotoList length={images.length} deslc={gallery.deslc} idx={gallery.currIndex}>
                            {images.map((img, key) => <PhotoGallery active={key === gallery.currIndex ? true : false} key={key} data-idx={key} onClick={(() => handleClickMenu(key))}><img src={`/images/builds/${id}/gallery/${img.name}.${img.extension}`} /></PhotoGallery>)}
                        </PhotoList>
                    </div>
                    <Controls className="list-controller">
                        <ArrowField><ArrowPrev onClick={((e) => handleClickArrow(e, "prev"))} /></ArrowField>
                        <ArrowField><ArrowNext onClick={((e) => handleClickArrow(e, "next"))} /></ArrowField>
                    </Controls>
                </MenuGallery>
            </section>
            :
            <div>No Images to Show</div>
        }
        </>
    )
}
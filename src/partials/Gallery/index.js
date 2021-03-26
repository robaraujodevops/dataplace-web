import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
	GalleryMain,
	Controls,
	Holder,
  Slider,
  GridPos,
  GridPosItem,
	ArrowField,
	ArrowPrev,
	ArrowNext,
  MenuGallery,
  MenuLIstGallery,
	PhotoGallery,
	PhotoList
} from "./styles";


export default function Gallery({ images, options }) {
	const { id } = useParams();
	
	const [gallery, setGallery] = useState({ 
		"currIndex": 0, 
		"loadImgs": false, 
		"slideFlow": 0, 
		"menuFlow": 0,
		"range": 5,
		"ini": 0,
    "end": 4,
    "width": 0
	});

  const listMenu = useRef({});
  const main_slider   = useRef({});
  
	if (images.length > 0 && !gallery.loadImgs) {
		setGallery({
			...gallery,
			...{
				"loadImgs": true,
        "length": images.length - 1,
        "width": 1009
			}
		})
	}

  const slideFlow = (i) => main_slider.current.offsetWidth * i;

	const menuFlow = (ini) => ini * ((listMenu.current.offsetWidth * 20) / 100);

	const handleClick = (e, i, dir = false) => {
		let {
			currIndex, 
			length,
			ini,
			end
		} = gallery;

    if(dir === "prev" && i > 0) i--
    if(dir === "next" && i < length) i++

    if( i > currIndex ){
      if(i === end && i < length){
        ini++
        end++
      } 
    }

    if( i < currIndex ){
      if(i === ini && i > 0){
        ini--
        end--
      }
    }

		setGallery({
		 	...gallery,
		 	...{
			    "currIndex": i,
          "slideFlow": slideFlow(i),
          "menuFlow": menuFlow(ini),
          "ini": ini,
          "end": end 
		 	}
    })
	}

	return (
		<>
			{images.length > 0 ?
				<GalleryMain className="slide-images" ref={main_slider} >
					<Holder className="slide-holder">
						<Slider className="current-slide" flow={gallery.slideFlow} length={images.length} width={gallery.width}>
							<div>
								{images.map((img, key) => <img key={key} src={`/images/builds/${id}/gallery/${img.name}.${img.extension}`} alt="" />)}
							</div>
						</Slider>
            <GridPos>
              {images.map((i, key) => <GridPosItem active={key === gallery.currIndex ? true : false} ></GridPosItem>)}
            </GridPos>
						{options.control &&
							<Controls className="slideshow-controller">
								<ArrowField><ArrowPrev onClick={((e) => handleClick(gallery.currIndex-1))} /></ArrowField>
								<ArrowField><ArrowNext onClick={((e) => handleClick(gallery.currIndex+1))} /></ArrowField>
							</Controls>
						}
					</Holder>
					<MenuGallery className="menu-gallery">
						<MenuLIstGallery ref={listMenu}>
							<PhotoList length={images.length} flow={gallery.menuFlow} idx={gallery.currIndex} >
								{images.map((img, key) => <PhotoGallery 
												className={`item-list-gal${key === gallery.currIndex ? " active" : ""}`}
												active={key === gallery.currIndex ? true : false}
												key={key}
												data-idx={key}
												onClick={((e) => handleClick(e, key))}>
													<img src={`/images/builds/${id}/gallery/${img.name}.${img.extension}`} alt="photolist" />
									</PhotoGallery>)
								}
							</PhotoList>
						</MenuLIstGallery>
						<Controls className="list-controller" idx={gallery.currIndex} >
							<ArrowField><ArrowPrev
								onClick={((e) => handleClick(e, gallery.currIndex, "prev"))}
							/></ArrowField>
							<ArrowField><ArrowNext
								onClick={((e) => handleClick(e, gallery.currIndex, "next"))}
							/></ArrowField>
						</Controls>
					</MenuGallery>
				</GalleryMain>
				:
				<div>No Images to Show</div>
			}
		</>
	)
}
import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import apiMap from '../../services/apiMap';
import "./style.scss"

export default function Map(props) {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    const [ center, setCenter ] = useState(null);
    const { search = "" } = props

    const styles = {
        width: "100%",
        height: "450px",
        border: "1px solid #dcdcdc"
    };

    useEffect(() => {
        apiMap.get(`${search}.json`)
        .then(function (response) {
            let { center = [null,null] } = response.data.features[0]
            
            setCenter(center)
          });
    }, [search])

        useEffect(() => {
            mapboxgl.accessToken = `${process.env.REACT_APP_MAP_TOKEN}`;
            const initializeMap = ({ setMap, mapContainer }) => {
                const map = new mapboxgl.Map({
                  container: mapContainer.current,
                  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                  center: center,
                  zoom: 16
                });
          
                map.on("load", () => {
                  setMap(map);
                  map.resize();
                });
            };

            if(center){
                if (!map) initializeMap({ setMap, mapContainer });
            }

        }, [center])

    return (
        <div ref={el => (mapContainer.current = el)} style={styles}></div>
    )
}
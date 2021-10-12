import React from 'react';
import useScript from "../../hooks/useScript";
import "./leafletimport.css"
export const IncludeLeaflet = ()=> {
    useScript("https://unpkg.com/leaflet@1.7.1/dist/leaflet.js")

}

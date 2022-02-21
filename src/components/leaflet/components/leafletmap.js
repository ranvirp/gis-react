import React, {useContext, useEffect} from 'react';
import {IncludeLeaflet} from "../leafletinitialize";
import L from 'leaflet'
import vectorTileLayer from 'leaflet-vector-tile-layer';

import useScript from "../../../hooks/useScript";
import {makeStyles} from "@mui/material/styles";
import axios from "axios";
import {myContext} from "../../App";
const useStyle = makeStyles({
    fixedheight:{
        height:'520px'
    }
})
const aligarhCenter = [27.900383, 78.072281]
//var mymap = L.map('mapid').setView(aligarhCenter, 13);
export let mymap
export let maplayers = {}
export default function LeafletMap(props) {
    useScript("https://unpkg.com/leaflet@1.7.1/dist/leaflet.js")
    const [state,setState] = React.useState({center:aligarhCenter, zoom:13})
    const [context,setContext] = useContext(myContext)

    const classes = useStyle()
    useEffect(()=>{
         mymap = L.map('mapid').setView(aligarhCenter, 13);

       // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(mymap);
        /*
        L.tileLayer('http://192.168.0.103:8000/{z}/{x}/{y}.png', {
            maxZoom: 15,
            minZoom: 12,
            tms:false,
            attribution: 'by Ranvir'
        }).addTo(mymap);
        */
        const layer = vectorTileLayer('http://192.168.0.103:8000/{z}/{x}/{y}.pbf', {
            maxZoom: 15,
            minZoom: 13,
            style:{

            fill: false,
                weight: 3,
            fillColor: '#06cccc',
            color: '#06cccc',
            fillOpacity: 1.0,
            opacity: 1.0,

            }

        });
        layer.addTo(mymap)

        context.map = mymap
        props.urls.forEach( (geojsonobj,i) => {
            axios.get(geojsonobj.url).then((result) => {
                context.map = mymap
              var x =  L.geoJSON(result.data, geojsonobj.options).addTo(mymap)
                maplayers[geojsonobj.key] = x
            })

        })},[]
    )
    return (
            <div id={"mapid"} className={classes.fixedheight}></div>

   );
}

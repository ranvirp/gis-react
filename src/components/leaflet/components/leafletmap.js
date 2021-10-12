import React, {useEffect} from 'react';
import {IncludeLeaflet} from "../leafletinitialize";
import L from 'leaflet'

import useScript from "../../../hooks/useScript";
import {makeStyles} from "@material-ui/core/styles";
const useStyle = makeStyles({
    fixedheight:{
        height:'520px'
    }
})
export default function LeafletMap(props) {
    useScript("https://unpkg.com/leaflet@1.7.1/dist/leaflet.js")
    const classes = useStyle()
    useEffect(()=>{
       var mymap = L.map('mapid').setView([27.900383, 78.072281], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(mymap);}
    )

    return (
            <div id={"mapid"} className={classes.fixedheight}></div>

   );
}

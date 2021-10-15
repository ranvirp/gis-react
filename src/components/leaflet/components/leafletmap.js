import React, {useContext, useEffect} from 'react';
import {IncludeLeaflet} from "../leafletinitialize";
import L from 'leaflet'

import useScript from "../../../hooks/useScript";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {myContext} from "../../App";
const useStyle = makeStyles({
    fixedheight:{
        height:'520px'
    }
})
const aligarhCenter = [27.900383, 78.072281]
//var mymap = L.map('mapid').setView(aligarhCenter, 13);

export default function LeafletMap(props) {
    useScript("https://unpkg.com/leaflet@1.7.1/dist/leaflet.js")
    const [state,setState] = React.useState({center:aligarhCenter, zoom:13, removes:[], adds:[]})
    const [context,setContext] = useContext(myContext)

    const classes = useStyle()
    useEffect(()=>{
        var mymap = L.map('mapid').setView(aligarhCenter, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(mymap);
        props.urls.forEach( (geojsonobj,i) => {
            axios.get(geojsonobj.url).then((result) => {
                context.map = mymap
                L.geoJSON(result.data, geojsonobj.options).addTo(mymap)
            })

        })}
    )
    return (
            <div id={"mapid"} className={classes.fixedheight}></div>

   );
}

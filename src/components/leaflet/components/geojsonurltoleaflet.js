import React, {useContext, useEffect} from 'react';
import L from 'leaflet';
import axios from "axios";
import {myContext} from "../../App";
export default function GeoJSONFromURL(props) {
    const [context,setContext] = useContext(myContext)
    useEffect(()=>{axios.get(props.url).then((result)=>{

        L.geoJSON(result.data).addTo(context.map)})})
    return ''
}

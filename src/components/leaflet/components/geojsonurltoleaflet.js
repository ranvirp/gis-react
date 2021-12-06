import React, {useContext, useEffect} from 'react';
import L from 'leaflet';
import axios from "axios";
import {myContext} from "../../App";
import ReactDOM from "react-dom";
import {mymap} from "./leafletmap";
export default function GeoJSONFromURL(props) {
    //const [context, setContext] = useContext(myContext)
    useEffect(()=>{
        //console.log("in effect")
        //console.log(context)

    axios.get(props.url).then((result)=>{

        L.geoJSON(result.data, props.options).addTo(mymap)})})
    return <></>

}
export function addLayer(props) {
    //console.log("in addLayer")
    //console.log(props)
    ReactDOM.hydrate(
    <GeoJSONFromURL {...props}></GeoJSONFromURL>,document.getElementById('junks'))
}
export function addSingleLayer(props)
{
    axios.get(props.url).then((result)=>{

        L.geoJSON(result.data, props.options).addTo(mymap)})
}
export function addLayers(props)
{
    props.urls.forEach((url,i)=>{ axios.get(url.url).then((result)=>{

        L.geoJSON(result.data, url.options).addTo(mymap)})})

}

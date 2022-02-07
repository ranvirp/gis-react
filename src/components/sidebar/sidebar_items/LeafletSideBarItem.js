
import React from "react";
import LeafletMap from "../../leaflet/components/leafletmap"
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {InboxRounded} from "@mui/icons-material";
var myStyle = { // Define your style object
    "color": "#ff0000"
};
var myStyle1 = { // Define your style object
    "color": "#ff00ff"
};
const fn = function (feature, layer) {
    layer.bindPopup(feature.properties.ac_name);
}
const args = {
    urls:[
        {url:'http://localhost:8080/aligarh/acs/ac_71.geojson',key:'ac71', options:{style:myStyle, onEachFeature: fn}},
       // {url:'http://localhost:8080/aligarh/acs/ac_72.geojson',options:{style:myStyle1, onEachFeature: fn}},
       // {url:'http://localhost:8080/aligarh/acs/ac_73.geojson',options:{style:myStyle1, onEachFeature: fn}},
       // {url:'http://localhost:8080/aligarh/acs/ac_74.geojson',options:{style:myStyle1, onEachFeature: fn}},
       // {url:'http://localhost:8080/aligarh/acs/ac_75.geojson',options:{style:myStyle1, onEachFeature: fn}},
       // {url:'http://localhost:8080/aligarh/acs/ac_76.geojson',options:{style:myStyle1, onEachFeature: fn}},
      //  {url:'http://localhost:8080/aligarh/acs/ac_77.geojson',options:{style:myStyle1, onEachFeature: fn}},

    ]
}
export default function LeafletSideBarItem(props) {
    const leaflet = 'leaflet';
    return (
        <ListItem button key={leaflet} onClick={()=> {props.handleClick(<LeafletMap urls={args.urls}/>)}}>
            <ListItemIcon> <InboxRounded/> </ListItemIcon>
            <ListItemText primary='Map'/>
        </ListItem>
    );
}

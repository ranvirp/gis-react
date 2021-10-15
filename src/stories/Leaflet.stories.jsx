import React from 'react';

import LeafletMap from "../components/leaflet/components/leafletmap";
import GeoJSONFromURL from "../components/leaflet/components/geojsonurltoleaflet";


export default {
    title: 'Leaflet',
    component: LeafletMap,
};

const Template = (args) => <LeafletMap {...args} />;
const Template1 = (args) => <GeoJSONFromURL {...args} />;


export const leaflet = Template.bind({});
export const geojson = Template1.bind({});
var myStyle = { // Define your style object
    "color": "#ff0000"
};
var myStyle1 = { // Define your style object
    "color": "#ff00ff"
};
const fn = function (feature, layer) {
    layer.bindPopup(feature.properties.ac_name);
}
leaflet.args = {
    urls:[{url:'http://localhost:8080/aligarh/acs/ac_71.geojson',options:{style:myStyle, onEachFeature: fn}}, {url:'http://localhost:8080/aligarh/acs/ac_72.geojson',options:{style:myStyle1, onEachFeature: fn}}]
}
geojson.args = {
    url:'http://localhost:8080/aligarh/acs/ac_71.geojson'
}





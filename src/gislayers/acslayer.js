
const fn = function (feature, layer) {
    layer.bindPopup(feature.properties.ac_name);
}
const args = {
    urls:[
        {url:'http://localhost:8080/aligarh/acs/ac_71.geojson',options:{style:myStyle, onEachFeature: fn}},
        //{url:'http://localhost:8080/aligarh/acs/ac_72.geojson',options:{style:myStyle1, onEachFeature: fn}},
    ]
}

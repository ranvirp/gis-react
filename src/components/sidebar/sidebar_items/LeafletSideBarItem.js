import ListItem from "@material-ui/core/ListItem";
import WithMaterialUI from "../../forms/formikform";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import LeafletMap from "../../leaflet/components/leafletmap"
import GeoJSONFromURL from "../../leaflet/components/geojsonurltoleaflet";

export default function LeafletSideBarItem(props) {
    const leaflet = 'leaflet';
    return (
        <ListItem button key={leaflet} onClick={()=> {props.handleClick(LeafletMap)}}>
            <ListItemIcon> <InboxIcon/> </ListItemIcon>
            <ListItemText primary='Map'/>
        </ListItem>
    );
}

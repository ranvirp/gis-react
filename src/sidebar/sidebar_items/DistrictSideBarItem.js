import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import DistrictList from "../../reports/districts";
import VillageList from "../../reports/villages";
export default function DistrictSideBarItem(props) {
const districts = 'districts';
    return (
    <ListItem button key={districts} onClick={()=> {props.handleClick(DistrictList)}}>
        <ListItemIcon> <InboxIcon/> </ListItemIcon>
        <ListItemText primary='Districts'/>
    </ListItem>
    );
}

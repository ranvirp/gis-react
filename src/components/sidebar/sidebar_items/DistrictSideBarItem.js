import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import DistrictList from "../../../reports/districts";
import VillageList from "../../../reports/villages";
export default function DistrictSideBarItem(props) {
const districts = 'districts';
    return (
    <ListItem button key={districts} onClick={()=> {props.handleClick(<DistrictList/>)}}>
        <ListItemIcon> <InboxIcon/> </ListItemIcon>
        <ListItemText primary='Districts'/>
    </ListItem>
    );
}

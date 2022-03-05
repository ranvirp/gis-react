import ListItem from "@mui/material/ListItem";
import DistrictList from "../../../reports/districts";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

export default function SideBarItem(props) {
    return (
        <ListItem button key={props.key} onClick={()=> {props.handleClick(props.comp)}}>
            <ListItemIcon> {props.icon??<InboxIcon/>} </ListItemIcon>
            <ListItemText primary={props.title}/>
        </ListItem>
    );
}

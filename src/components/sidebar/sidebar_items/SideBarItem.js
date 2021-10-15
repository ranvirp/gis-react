import ListItem from "@material-ui/core/ListItem";
import DistrictList from "../../../reports/districts";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

export default function SideBarItem(props) {
    const districts = 'districts';
    return (
        <ListItem button key={props.key} onClick={()=> {props.handleClick(props.comp, props.props)}}>
            <ListItemIcon> <InboxIcon/> </ListItemIcon>
            <ListItemText primary='Districts'/>
        </ListItem>
    );
}

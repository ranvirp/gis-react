
import React from "react";
import {InboxRounded} from "@mui/icons-material";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";

export default function SchemaFormSideBarItem(props) {
    const genform = 'genform' + props.key;
    return (
        <ListItem button key={genform} onClick={()=> {props.handleClick(<></>)}}>
            <ListItemIcon> <InboxRounded/> </ListItemIcon>
            <ListItemText primary='Schema Form'/>
        </ListItem>
    );
}

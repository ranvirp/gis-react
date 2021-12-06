import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import SchemaForm from "../../forms/schemabasedform";
import React from "react";

export default function SchemaFormSideBarItem(props) {
    const genform = 'genform' + props.key;
    return (
        <ListItem button key={genform} onClick={()=> {props.handleClick(<SchemaForm schema={props.schema}/>)}}>
            <ListItemIcon> <InboxIcon/> </ListItemIcon>
            <ListItemText primary='Schema Form'/>
        </ListItem>
    );
}

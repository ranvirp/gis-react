import ListItem from "@material-ui/core/ListItem";
import DistrictList from "../../reports/districts";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import WithMaterialUI from "../../forms/formikform";

export default function LoginFormSideBarItem(props) {
    const login = 'login';
    return (
        <ListItem button key={login} onClick={()=> {props.handleClick(WithMaterialUI)}}>
            <ListItemIcon> <InboxIcon/> </ListItemIcon>
            <ListItemText primary='Login'/>
        </ListItem>
    );
}

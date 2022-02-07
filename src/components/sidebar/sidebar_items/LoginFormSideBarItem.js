import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {SignIn} from "../../authentication/SignIn/signinreacthook";
import {InboxRounded} from "@mui/icons-material";

export default function LoginFormSideBarItem(props) {
    const login = 'login';
    return (
        <ListItem button key={login} onClick={()=> {props.handleClick(<SignIn/>)}}>
            <ListItemIcon> <InboxRounded/> </ListItemIcon>
            <ListItemText primary='Login'/>
        </ListItem>
    );
}

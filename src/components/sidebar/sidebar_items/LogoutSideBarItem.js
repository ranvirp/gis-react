import ListItem from "@mui/material/ListItem";
import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {ListItemIcon, ListItemText} from "@mui/material";

export default function LogoutSideBarItem(props) {
    const logout = 'logout';
    return (
        <ListItem button key={logout} onClick={()=> {console.log('gettingloggedout'); props.logout();}}>
            <ListItemIcon> <InboxIcon/> </ListItemIcon>
            <ListItemText primary='Logout'/>
        </ListItem>
    );
}

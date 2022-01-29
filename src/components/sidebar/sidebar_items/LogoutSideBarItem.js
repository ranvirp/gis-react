import ListItem from "@material-ui/core/ListItem";
import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {ListItemIcon, ListItemText} from "@material-ui/core";

export default function LogoutSideBarItem(props) {
    const logout = 'logout';
    return (
        <ListItem button key={logout} onClick={()=> {console.log('gettingloggedout'); props.logout();}}>
            <ListItemIcon> <InboxIcon/> </ListItemIcon>
            <ListItemText primary='Logout'/>
        </ListItem>
    );
}

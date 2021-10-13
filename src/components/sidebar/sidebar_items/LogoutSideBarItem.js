import ListItem from "@material-ui/core/ListItem";
import React, {useContext} from "react";
import {myContext} from "../../../App";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {ListItemIcon, ListItemText} from "@material-ui/core";

export default function LogoutSideBarItem(props) {
    const logout = 'logout';
    const [context, setContext] = useContext(myContext)
    return (
        <ListItem button key={logout} onClick={()=> {setContext(false, null);}}>
            <ListItemIcon> <InboxIcon/> </ListItemIcon>
            <ListItemText primary='Logout'/>
        </ListItem>
    );
}

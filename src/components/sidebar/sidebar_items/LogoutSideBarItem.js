import ListItem from "@material-ui/core/ListItem";
import React, {useContext} from "react";
import {myContext} from "../../App";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {ListItemIcon, ListItemText} from "@material-ui/core";
import {saveAuthentication} from '../../../utility/saveauthentication'

export default function LogoutSideBarItem(props) {
    const logout = 'logout';
    const [context, setContext] = useContext(myContext)
    return (
        <ListItem button key={logout} onClick={()=> {console.log('gettingloggedout'); saveAuthentication({'authenticated':'false', 'userid':null, 'token':null}); setContext({'authenticated':'false', 'userid':null, 'token':null});}}>
            <ListItemIcon> <InboxIcon/> </ListItemIcon>
            <ListItemText primary='Logout'/>
        </ListItem>
    );
}

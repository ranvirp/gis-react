import ListItem from "@material-ui/core/ListItem";
import DistrictList from "../../../reports/districts";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import SignUp from "../../authentication/SignUp/signup";

export default function SignUpFormSideBarItem(props) {
    const signup = 'Sign Up';
    return (
        <ListItem button key={signup} onClick={()=> {props.handleClick(SignUp)}}>
            <ListItemIcon> <InboxIcon/> </ListItemIcon>
            <ListItemText primary='Sign Up'/>
        </ListItem>
    );
}

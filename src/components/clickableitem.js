

import React from "react";
import {globalState} from "./sidebar/sidebar";
import {Link} from "@mui/material";
import {Button} from "@mui/material";
export  function ClickableItem(props) {
    return (
        <Button onClick={()=> {globalState.handleClick(props.comp)}}>{props.title}</Button>

    );
}

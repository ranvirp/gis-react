import React from "react"
import {Button} from "@mui/material";

export function FileClaimToPetitionButton(props)
{
    const [stete, setState] = React.useState()
    return(
        <Button onClick={showClaimForm}>{props.title}</Button>
    )
}
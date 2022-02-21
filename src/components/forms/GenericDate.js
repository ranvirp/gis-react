import React from "react"
import {TextField} from "@mui/material";
export function GenericDate(props)
{
    return  <TextField

        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
            shrink: true,
        }}
        {...props}
    />
}
import React from 'react';
import {Box, FormControl, InputLabel, Select, MenuItem, NativeSelect, TextField} from "@mui/material";

export function Dropdown(props)
{
   // console.log(props)
    const [state, setState] = React.useState({reset:false})
    if (props.reset == true) setState({reset:props.reset})
    return ( <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel htmlFor={props.fieldId} id={props.fieldName + "field-label"}>{props.fieldLabel}</InputLabel>

            <Select

labelId= {props.id + "field-label"}
id={props.id}
name={props.name}
label={props.label}
onChange={props.onChange}
defaultValue={props.defaultValue}


            >
                <em>None</em>

                {props.values != 'undefined' && props.values.map((value)=>(
                        <MenuItem  value={value.value} key={value.key}>{value.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>)
}

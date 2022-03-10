import React from 'react';
import {Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";

export function Dropdown(props)
{
   // console.log(props)
    return ( <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel htmlFor={props.id} id={props.id + 'field-label'}>{props.label}</InputLabel>

            <Select

                disabled={props.disabled}

                labelId= {props.id + "field-label"}
                id={props.id}
                name={props.name}
                label={props.label}
                onChange={props.onChange}
                defaultValue={props.defaultValue??''}
                required={props.required}




            >
                <em>None</em>

                {props.values != 'undefined' && props.values.map((value)=>(
                       <MenuItem  key={value.key??Math.random()} value={value.value} >{value.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>)
}

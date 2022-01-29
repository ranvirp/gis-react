import React from 'react';
import {Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material";

export function Dropdown(props)
{
   // console.log(props)
    return ( <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel htmlFor={props.fieldId} id={props.fieldName + "field-label"}>{props.fieldLabel}</InputLabel>

            <Select

                labelId= {props.fieldName + "field-label"}
                id={props.fieldId}

                name={props.fieldName}

                label={props.fieldLabel}
                onChange={props.changeFunction}

            >
                <em>None</em>

                {props.fieldValue.map((value)=>(
                    <MenuItem value={value.value} key={value.key}>{value.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>)
}

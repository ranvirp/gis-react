import React from 'react';
import {Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";

export function Dropdown(props)
{
    //console.log("dropdown props",props)
    const [value,setValue] = React.useState(props.value)
    return ( <Box sx={{ minWidth: 120 }} >
        <FormControl fullWidth>
            <InputLabel htmlFor={props.id} id={props.id + 'field-label'}>{props.label}</InputLabel>

            <Select

                disabled={props.disabled}

                labelId= {props.id + "field-label"}
                id={props.id}
                name={props.name}
                label={props.label}
                onChange={e => {setValue(e.target.value);props.onChange(e)}}
                defaultValue={props.defaultValue??''}
                required={props.required}
                value={value}

                key={Math.random()}



            >
                <em>None</em>

                {props.values != 'undefined' && props.values.map((value)=>(

                       value === props.value? <MenuItem  key={Math.random()} selected value={value.value} >{value.label}</MenuItem>:
                           <MenuItem  key={Math.random()}  value={value.value} >{value.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>)
}

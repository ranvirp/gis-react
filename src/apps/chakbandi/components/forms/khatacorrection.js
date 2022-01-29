
import React from "react";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { CategoryDropdown } from "./categorydropdown";
const removeKhataUpdation = (i) => {}
const onCategoryChange = (e) => {}
const KhataUpdationRow = (i) => {
    return (<Stack key={'updation' + i}><TextField  id={"khatano" + i} name='khatano[]' label="Khata Number" variant="outlined" />
    <CategoryDropdown id={'category'+i} name='category[]' label='Category'  changeFunction={onCategoryChange}></CategoryDropdown>
    <TextField  id={"area"+i} name={'area[]'} label="Area" variant="outlined" />
    <Button   variant="contained" color="error" onClick={() => removeKhataUpdation(i)}>Remove</Button> 
               
    </Stack>)
}

export function KhataCorrectionForm(props) {

    const [state, setState] = React.useState({khataDeletion:1, khataUpdation:1, khataNew:1})
    var rows = [];
    for (var i = 0; i < state.khataUpdation; i++) {
      rows.push(KhataUpdationRow(i));
    }
    const addKhataUpdationRow = (e) => {
       setState({...state,khataUpdation:state.khataUpdation + 1})
    }
    return (
        <Stack>
            <label>Khatedar Deletion</label>
            {rows}
            <Button onClick={addKhataUpdationRow} >Add</Button>
           
        </Stack>
    )
}
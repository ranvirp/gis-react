import React from "react";
import {Box, Stack} from "@mui/material";
import {Dependentdropdowntwo} from "../../../../components/forms/dependentdropdowntwo";
import {testDropdowndata} from "../../tests/testfunctions";
import Typography from '@mui/material/Typography';
export const Gatadelta = (props) => {

    return (
        <Box>
            <Typography variant="h5" component="div" gutterBottom>
                Form to Enter Gata Deltas
            </Typography>
            <Stack spacing={2}>
                <Dependentdropdowntwo id="khatedar" name="khatedar" label="Khatedar" fieldAId={"khatano"} fieldALabel={"Khata No"} loadAfn={testDropdowndata} getBfn={testDropdowndata}></Dependentdropdowntwo>
            </Stack>
        </Box>
    )
}
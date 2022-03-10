import React from "react"
import {ChooseDefaultChakbandi} from "../reports/chooseaChakbandi";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Grid, Stack} from "@mui/material";
import {dateToString} from "./KhatauniDataEntry";
export function DefaultChakbandiValueChecker(props)
{
    const [state,setState] = React.useState(Math.random())
    function changeDefault(e){
        const token = localStorage.getItem('token')
        localStorage.clear()
        localStorage.setItem('token', token)
        setState(Math.random())
    }
    if (!localStorage.chakbandi_id || (localStorage.aid === null) || (localStorage.bid === null)) {
        return (
            <ChooseDefaultChakbandi/>
        )
    }
else {
        return (
            <Stack key={state}>
            <Button onClick={changeDefault}>Change</Button>


        <Grid container >

            <Grid item xs={6}>राजस्व ग्राम का नाम</Grid><Grid item xs={4}><Typography>{localStorage.chakbandi_village_name}</Typography></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={6}>अधिसूचना का दिनांक </Grid><Grid item xs={4}>  <Typography> { dateToString(localStorage.chakbandi_date_of_4notification)}</Typography></Grid>
            <Grid item xs={2}></Grid>

        </Grid>
        {props.children}
        </Stack>
        )
    }
}
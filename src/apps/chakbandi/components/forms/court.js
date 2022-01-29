/*

class Court(models.Model):
    id = models.UUIDField(primary_key=True)
    court_type = models.CharField(max_length=3)  # co, aco, soc, ddc, DDDDC, hc
    location = models.CharField(max_length=100)
    location_eng = models.CharField(max_length=100)

*/
import {Stack} from "@mui/material";
import React from "react";
import {text} from "./formutilities";

export function CourtForm(props)
{
    return (<Stack>
        {text('courttype', 'Court')}
        {text('location', 'Location')}
        {text('location_eng', 'Location in English')}



    </Stack>)
}
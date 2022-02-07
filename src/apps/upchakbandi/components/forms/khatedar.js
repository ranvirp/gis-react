/*

class Khatedar(models.Model):
    id = models.CharField(max_length=20, primary_key=True)
    khatauni_code = models.CharField(max_length=20)
    khata_no = models.IntegerField(max_length=5)
    farmer_code = models.ForeignKey(Farmer, on_delete=models.PROTECT)
    slno_in_khatauni = models.IntegerField(max_length=2)
    share = models.FloatField()
    remarks = models.TextField()
*/
import {Stack} from "@mui/material";
import React from "react";
import {text} from "./formutilities";

export function KhatedarForm(props)
{
    return (<Stack>
        {text('khatano', 'Khata No')}
        {text('farmerid', 'Farmer')}
        {text('slno', 'Sl No')}
        {text('share', 'Share')}


    </Stack>)
}
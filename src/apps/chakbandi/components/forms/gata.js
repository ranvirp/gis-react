import React from "react";
import { TextField, Button} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import {text} from "./formutilities";

/*

class Gata(models.Model):
    id = models.UUIDField(primary_key=True)
    khatauni_code = models.ForeignKey(Khatauni, on_delete=models.RESTRICT)
    gata_no = models.IntegerField(max_length=5)
    gata_no_txt = models.CharField(max_length=10)
    area = models.FloatField()
    khata_no = models.IntegerField(max_length=5)
    fasli_year = models.IntegerField(max_length=4)
    land_category = models.CharField(max_length=5)
    remarks = models.TextField()
*/
export function GataForm(props)
{
    return (<Stack>
        {text('gatano', 'Gata No')}
        {text('area', 'Area')}
        {text('khata_no', 'Khata no')}
        {text('bhaumikyear', 'Bhaumik Year')}
        {text('remarks', 'Remarks')}
    </Stack>)
}
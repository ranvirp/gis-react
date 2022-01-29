import React from "react";
import Stack from '@mui/material/Stack';
import {text} from "./formutilities";


/*
class Khata(models.Model):
    id = models.CharField(max_length=15, primary_key=True)
    khata_no = models.IntegerField(max_length=4)
    village_code = models.ForeignKey(Revenue_village, on_delete=models.RESTRICT)
    category = models.ForeignKey(Land_category, on_delete=models.RESTRICT)
    area = models.FloatField()

*/
export function KhataForm(props)
{
    return (<Stack>
        {text('khatano', 'Khata No')}
        {text('village', 'Village')}
        {text('category', 'Category')}
        {text('area', 'Area')}


    </Stack>)
}
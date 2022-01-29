import React from "react";
import { TextField, Button} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import {text} from "./formutilities";

/*
class Land_transfer(models.Model):
    order = models.ForeignKey(Order, on_delete=models.RESTRICT)
    transferor = models.CharField(max_length=20)
    transferee_khata_no = models.IntegerField(max_length=5)
    transferee_slno_in_khata = models.IntegerField(max_length=3)
    transferee_name = models.ForeignKey(Farmer, on_delete=models.RESTRICT)
    reason = models.CharField(max_length=10)
    area = models.FloatField()
*/
export function LandTransferForm(props)
{
    return (<Stack>
        {text('courtorderid', 'Court Order')}
        {text('transferorid', 'Transferor')}
        {text('transfereekhatano', 'Transferee Khata No')}
        {text('transferee_slnoinkhata', 'Transferee Sl No')}
        {text('transferee_name', 'Transferee Name')}
        {text('area', 'Area')}



    </Stack>)
}
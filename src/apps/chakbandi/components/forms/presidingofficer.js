/*
class PresidingOffier(models.Model):
    id = models.UUIDField(primary_key=True)
    court = models.ForeignKey(Court, on_delete=models.RESTRICT)
    name = models.CharField(max_length=100)
    name_eng = models.CharField(max_length=100)
    charge_from = models.DateField()
    charge_to = models.DateField()

*/
import {Stack} from "@mui/material";
import React from "react";
import {text} from "./formutilities";

export function PresidingOfficerForm(props)
{
    return (<Stack>
        {text('court', 'Court')}
        {text('name', 'Name')}
        {text('name_eng', 'Name in English')}
        {text('charge_from', 'Charge From')}
        {text('charge_to', 'Charge To')}
    </Stack>)
}
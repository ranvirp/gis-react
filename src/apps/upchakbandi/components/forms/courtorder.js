/*
class Court_rder(models.Model):
    id = models.UUIDField(primary_key=True)
    khatauni_code = models.CharField(max_length=20)
    date_of_order = models.DateField()
    ordering_court = models.CharField(max_length=10)
    ordering_presiding_officer = models.CharField(max_length=5)
    order_txt = models.TextField()
    operative_part = models.TextField()
    copy_of_order = models.TextField()
    section_of_order = models.CharField(max_length=8)
    cause_of_action_type = models.CharField(max_length=8)
    cause_of_action_id = models.CharField(max_length=20)
    remarks = models.TextField()
*/
import {Stack} from "@mui/material";
import React from "react";
import {text} from "./formutilities";

export function CourtOrderForm(props)
{
    return (<Stack>
        {text('court', 'Court')}
        {text('dateoforder', 'Date of Order')}
        {text('order_txt', 'Order Text')}
        {text('operative_part', 'Operative Part')}
        {text('copy_of_order', 'Copy of Order')}
        {text('section_of_order', 'Section of Order')}
        {text('causeofaction', 'Cause of Action')}



    </Stack>)
}
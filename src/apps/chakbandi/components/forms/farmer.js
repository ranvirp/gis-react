import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { postGraphSqlQuery } from "../../../../components/fetcher/graphsqlfetcher";
import { graphqlurl } from "../../settings";
import { landCategoryMutation } from "../../graphqlqueries/queries";
import { date } from "yup/lib/locale";
import {text} from "./formutilities";










/*
class Farmer(models.Model):
    id = models.UUIDField(primary_key=True)
    aadhar_no = models.IntegerField(max_length=15)
    mobile_no = models.CharField(max_length=15)
    name = models.CharField(max_length=100)
    relationship = models.CharField(max_length=1)  # F, M, S, D, W, H,
    relative_name = models.CharField(max_length=100)
    year_of_birth = models.IntegerField(max_length=3)
    gender = models.CharField(max_length=1)
    majra = models.CharField(max_length=50)
    */
 export function FarmerForm(props)
{
    return (<Stack>
     {text('name', 'Name')}
     {text('relationship', 'Relationship')}
     {text('relativename', 'Relative\'s  Name')}
     {text('yearofbirth', 'Year of Birth')}
     {text('gender', 'Gender')}
     {text('majra', 'Majra')}

     </Stack>)
}


/*

class Khatauni(models.Model):
    code = models.CharField(max_length=20, primaryKey=True)
    revenue_village_census_code = models.ForeignKey(Revenue_village, on_delete=models.RESTRICT)
    fasli_year = models.IntegerField(max_length= 4)
    type_of_khatauni = models.CharField(max_length=5) # bandobast, sudhar,
    no_of_khatas = models.IntegerField(max_length=5)
    area = models.FloatField()
    status = models.CharField(max_length=3)
    finalised_by = models.CharField(max_length=5)
    finalised_on = models.DateField()
    */
import {Button, Stack, TextField} from "@mui/material";
import React from "react";
import {myInput, ReactHookFormInput, text} from "./formutilities";
import * as yup from "yup";
import {GenericForm} from "../../../../components/forms/genericreacthookform";
import {varsKhatauni} from "../../generated/variables"
import Typography from "@mui/material/Typography";
import {Villagedropdown} from "../../../../components/forms/villagedropdown";
import {graphqlurl} from "../../settings";
import {KhatauniFormComponent} from "../../generated/inputformcomponents";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {createKhatauniMutation} from "../../generated/mutations";

export const schema = yup.object({
   // village:yup.string().required(),
   // fasli_year: yup.number().integer().required(),
    //type: yup.string().required(),
    //no_of_khatas:yup.number().required(),
   // area:yup.number().required()
}).required();
const FormComponent = (props) => {
    return (

        <Stack>
            <Typography variant="h5" textAlign="center"> Form for Entering details of Khaatauni </Typography>
            {

                <ReactHookFormInput {...props} comp={<Villagedropdown/>} id='village' props={{

                    fieldALabel: 'District',
                    fieldBLabel: 'Tehsil',
                    label: 'Village',
                    required: true
                }}/>


            }
            {
               // text('fasli_year', 'Fasli Year')
                }
            {
            //    text('type', 'Type of Khatauni')
            }
            {
            //    text('noofkhatas', 'No of Khatas')
            }
            {
            //    text('area', 'Area')
            }
            <Button type="submit">Submit</Button>



        </Stack>)
}

export function KhatauniForm(props)
{

    return (
        <GenericForm title="Khatauni Form" afterSubmitFn={(val)=>{console.log(val);}} debug={true} yupSchema={schema} formComponent={<KhatauniFormComponent/>}  mutationQuery={createKhatauniMutation} onSubmitFn={(result)=>{console.log(result)}} variables={varsKhatauni}/>

    )
}
export function KhatauniUpdateForm(props)
{

    return (
        <GenericForm title="Khatauni Form" afterSubmitFn={(val)=>{console.log(val);}} debug={true} yupSchema={schema} formComponent={<KhatauniFormComponent/>}  mutationQuery={createKhatauniMutation} onSubmitFn={(result)=>{console.log(result)}} variables={varsKhatauni}/>

    )
}

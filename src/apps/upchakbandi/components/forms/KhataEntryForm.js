import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {Box, Button, Stack, TextField} from "@mui/material";
import {AllCategory} from "./AllCategory";


const m = 'mutation a($khata_no:String!,$category:String!){mutate_multiple_objects()}'
export function KhataEntryForm(props)
{
    const form = useForm()
    function onSubmit(data)
    {

    }
    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>
               <Stack>
                    <ReactHookFormInput  form={form} name={"khata_no"} label={"खाता संख्या"}/>

                    <ReactHookFormInput  comp={<AllCategory/>} form={form} name={"category"} label={"श्रेणी"}/>

                    <ReactHookFormInput comp={<TextField type={"float"}/>} form={form} name={"area"} label={"क्षेत्रफल"}/>

                    <Button type={"submit"}>Submit</Button>
               </Stack>

        </form>
    )
}
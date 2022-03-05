import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import Button from "@mui/material/Button";
import { Stack, TextField} from "@mui/material";
import {FasliYearForm} from "../../../common/components/forms/fasliyear";
import Typography from "@mui/material/Typography";
import {DefaultChakbandiValueChecker} from "./DefaultChakbandiValueChecker";
import {defaultSubmitFn} from "../../functions/submitFn";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const yupObject = yup.object({
    bandobast_khatauni_year:yup.number().integer().required(),
    aadhar_khatauni_year:yup.number().integer().required(),
    no_of_khata_in_bandobast:yup.number().integer().required().test(
        'Is positive?',
        'ERROR: The number must be greater than 0!',
        (value) => value > 0
    ),
    no_of_khata_in_aadhar:yup.number().integer().required().test(
        'Is positive?',
        'ERROR: The number must be greater than 0!',
        (value) => value > 0
    ),


})

export function ChakbandiDocuments(props)
{

    const form = useForm({resolver:yupResolver(yupObject)})
    function onSubmit(data)
    {
        data.chakbandi_id = localStorage.chakbandi_id
        defaultSubmitFn(data, "chakbandidocumentsupdate", form).then(result=>{console.log(result);form.reset()})
        form.reset()
    }
    return(

        <DefaultChakbandiValueChecker>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack spacing={2}>

                <Typography variant={"h4"}> चकबंदी अभिलेखों का विवरण भरें </Typography>

                <ReactHookFormInput form={form} comp={<FasliYearForm/>} name={"bandobast_khatauni_year"} label={"बंदोबस्त खतौनी का वर्ष"}/>
            <ReactHookFormInput form={form} comp={<FasliYearForm/>} name={"aadhar_khatauni_year"} label={"आधार  खतौनी का वर्ष"}/>
                <ReactHookFormInput form={form}  comp={<TextField type={"number"}/>} name={"no_of_khata_in_bandobast"} label={"बंदोबस्त  खतौनी में खातों की संख्या"}/>
                <ReactHookFormInput form={form}  comp={<TextField type={"number"}/>} name={"no_of_khata_in_aadhar"} label={"आधार  खतौनी में खातों की संख्या"}/>


                <Button type={"submit"}>Submit</Button>
            </Stack>

        </form>
        </DefaultChakbandiValueChecker>
    )
}
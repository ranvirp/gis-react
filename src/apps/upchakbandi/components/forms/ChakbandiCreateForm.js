import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {Box, Button, Stack} from "@mui/material";
import {Villagedropdown} from "../../../../components/forms/villagedropdown";
import {defaultSubmitFn} from "../../functions/submitFn";
import Typography from "@mui/material/Typography";



export function ChakbandiCreateForm(props)
{
    const form = useForm()
    function onSubmit(data)
    {
        defaultSubmitFn(data, "chakbandicreate", form).then(result=>{console.log(result);form.reset()})
    }
    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack direction={"column"} spacing={2}>
            <Typography variant={"h4"}> चकबंदी अधिसूचना का विवरण भरें </Typography>


           <ReactHookFormInput comp={<Villagedropdown fullWidth/>} form={form} name={"village"} label={"राजस्व ग्राम का नाम "}/>

            <ReactHookFormInput comp={<GenericDate fullWidth/>}form={form} name={"date_of_4notification"} label={"अधिसूचना का दिनांक"}/>

                    <Button type={"submit"}>Submit</Button>

            </Stack>
        </form>
    )
}
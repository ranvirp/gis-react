import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {GenericDate} from "../../../../components/forms/GenericDate";
import { Button, Stack} from "@mui/material";
import {Villagedropdown} from "../../../../components/forms/villagedropdown";
import {defaultSubmitFn} from "../../functions/submitFn";
import Typography from "@mui/material/Typography";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
const yupObject = yup.object(
    {
        village:yup.string().required(),
        date_of_4notification:yup.date().test(
            'nofuturedata',
            'Date should not be in future',
            function(item) {
                return Date.parse(item) < Date.now()
            }
        ).required()
    }
).required()

export function ChakbandiCreateForm(props)
{
    const form = useForm(
      //  {resolver:yupResolver(yupObject)}
    )
    const [error,setError] = React.useState('')
    function onSubmit(data)
    {
        //console.log(data)
        defaultSubmitFn(data, "chakbandicreate", form).then(({items,errors,success})=>{
            console.log(errors,success);
            if (success) {
                form.reset()
                setError("Success")
            }
            else {
               setError(errors.map(value=> value.message).toString())
            }
        })
    }
    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack direction={"column"} spacing={2}>
            <Typography component={"span"} variant={"h4"}> चकबंदी अधिसूचना का विवरण भरें </Typography>


           <ReactHookFormInput comp={<Villagedropdown fullWidth key={Math.random()}/>} form={form} name={"village"} label={"राजस्व ग्राम का नाम "}/>

            <ReactHookFormInput comp={<GenericDate/>}form={form} name={"date_of_4notification"} label={"अधिसूचना का दिनांक"}/>

                    <Button type={"submit"}>Submit</Button>
            <p key={Math.random()}>{error}</p>
            </Stack>
        </form>
    )
}
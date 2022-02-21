import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {Box, Button, Stack} from "@mui/material";
import {Villagedropdown} from "../../../../components/forms/villagedropdown";
import {defaultSubmitFn} from "../../functions/submitFn";



export function ChakbandiCreateForm(props)
{
    const form = useForm()
    function onSubmit(data)
    {
        defaultSubmitFn(data, "chakbandicreate", form)
    }
    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <Box>
           <ReactHookFormInput comp={<Villagedropdown fullWidth/>} form={form} name={"village"} label={"राजस्व ग्राम का नाम "}/>
                </Box>
                <Box>
            <ReactHookFormInput comp={<GenericDate fullWidth/>}form={form} name={"date_of_4notification"} label={"अधिसूचना का दिनांक"}/>
                </Box>
                <Box>
                    <Button type={"submit"}>Submit</Button>
                </Box>
            </Box>

        </form>
    )
}
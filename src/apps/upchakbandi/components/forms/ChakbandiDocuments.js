import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";



export function ChakbandiDocuments(props)
{
    const form = useForm()
    function onSubmit(data)
    {

    }
    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <ReactHookFormInput form={form} name={"sudhar_khatauni_year"} label={"बंदोबस्त खतौनी का वर्ष"}/>
            <ReactHookFormInput form={form} name={"aadhar_khatauni_year"} label={"आधार  खतौनी का वर्ष"}/>

        </form>
    )
}
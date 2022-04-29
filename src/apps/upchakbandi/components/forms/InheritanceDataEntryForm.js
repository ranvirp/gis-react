import React from "react"
import {Stack} from "@mui/material";
import {ReactHookFormControlledInput, ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {KhatedarCodeForm} from "./KhatedarCode";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {KhatedarCodeWithDialogForm} from "./KhatedarCodeWithDialog";

export function InheritanceDataEntryForm({chakbandi_id, form, ...props})
{
    return (
        <Stack>
            <ReactHookFormInput {...props} form={form} name={ "dead_khatedar"} label={"Dead Khatedar Code"} comp={<KhatedarCodeForm/>}/>
            <ReactHookFormInput {...props} form={form} name={"date_of_death"} label={"Date of Death"} comp={<GenericDate/>}/>
            <ReactHookFormInput {...props} form={form} name={"legal_heir"} label={"Legal Heir"} comp={<KhatedarCodeWithDialogForm/>}/>

            <ReactHookFormInput {...props} form={form} name={"share"} label={"Share"}/>

        </Stack>
    )
}
import React from "react"
import {Stack} from "@mui/material";
import {ReactHookFormControlledInput, ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {KhatedarCodeForm} from "./KhatedarCode";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {KhatedarCodeWithDialogForm} from "./KhatedarCodeWithDialog";

export function InheritanceEntryForm({chakbandi_id, form, ...props})
{
    return (
        <Stack>
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName + "." + "dead_khatedar"} label={"Dead Khatedar Code"} comp={<KhatedarCodeForm/>}/>
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName + "." +"date_of_death"} label={"Date of Death"} comp={<GenericDate/>}/>
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName + "." +"legal_heir"} label={"Legal Heir"} comp={<KhatedarCodeWithDialogForm/>}/>

            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName + "." + "share"} label={"Share"}/>

        </Stack>
    )
}
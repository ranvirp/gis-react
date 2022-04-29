import React from "react";
import {ReactHookFormControlledInput, ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {KhatedarCodeForm} from "./KhatedarCode";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {Stack} from "@mui/material";

export function ChangeOfNameEntryForm({chakbandi_id, form, ...props})
{
    return (
        <Stack>

            <ReactHookFormInput {...props} form={form} name={ "khatedar_code"} label={"Khatedar Code"} comp={<KhatedarCodeForm/>}/>
            <ReactHookFormInput {...props} form={form} name={ "new_name"} label={"New Name"} />
            <ReactHookFormInput {...props} form={form} name={ "effective_date"} label={"Effective Date"} comp={<GenericDate/>}/>


        </Stack>
    )
}
export function ChangeOfNameEntryFormOld({chakbandi_id, form, ...props})
{
    return (
        <Stack>
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName + "." + "khatedar_code"} label={"Khatedar Code"} comp={<KhatedarCodeForm/>}/>
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName + "." + "new_name"} label={"New Name"} />
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName + "." + "effective_date"} label={"Effective Date"} comp={<GenericDate/>}/>


        </Stack>
    )
}

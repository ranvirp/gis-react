import React from "react"
import {Stack} from "@mui/material";
import {ReactHookFormControlledInput, ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {KhatedarCodeForm} from "./KhatedarCode";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {KhatedarCodeWithDialogForm} from "./KhatedarCodeWithDialog";
import {FarmerSearchByKhatedarCode} from "./FarmerSearchByKhatedarCode";

export function CotenancyDataEntryForm({chakbandi_id, form, ...props})
{
    return (
        <Stack>
            <ReactHookFormInput {...props} form={form} name={ "transferor"} label={"From whom share to be transferred"} comp={<FarmerSearchByKhatedarCode/>}/>
            <ReactHookFormInput {...props} form={form} name={"transferee"} label={"Share to whom to be transferred"} comp={<FarmerSearchByKhatedarCode/>}/>
            <ReactHookFormInput {...props} form={form} name={"effective_date"} label={"Effective date"} comp={<GenericDate/>}/>
            <ReactHookFormInput {...props} form={form} name={"initial_transferor_share"} label={"Initial Transferor Share"} />
            <ReactHookFormInput {...props} form={form} name={"final_transferor_share"} label={"Final Transferor Share"} />
            <ReactHookFormInput {...props} form={form} name={"final_transferee_share"} label={"Final Transferee Share"} />


            <ReactHookFormInput {...props} form={form} name={"share"} label={"Share"}/>

        </Stack>
    )
}
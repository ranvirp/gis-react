import React from "react";
import * as yup from "yup";
import {GenericForm} from "../../../../components/forms/genericreacthookform";
import {varsKhatauni} from "../../generated/variables"
import {KhatauniFormComponent} from "../../generated/inputformcomponents";

import {createKhatauniMutation, updateKhatauniMutation} from "../../generated/mutations";

export const schema = yup.object({
    village:yup.string().required(),
    fasli_year: yup.number().integer().required(),
    type: yup.string().required(),
    no_of_khatas:yup.number().required(),
    area:yup.number().required()
}).required();

export function KhatauniForm(props)
{

    return (
        <GenericForm title="Create Khatauni" afterSubmitFn={props.afterSubmitFn} debug={true} yupSchema={schema} formComponent={<KhatauniFormComponent/>}  mutationQuery={createKhatauniMutation} onSubmitFn={props.onSubmitFn} variables={varsKhatauni}/>

    )
}
export function KhatauniUpdateForm(props)
{

    return (
        <GenericForm title="Update Khatauni" afterSubmitFn={props.ofterSubmitFn} debug={false} yupSchema={schema} formComponent={<KhatauniFormComponent/>}  mutationQuery={createKhatauniMutation} onSubmitFn={props.onSubmitFn} variables={varsKhatauni}/>

    )
}

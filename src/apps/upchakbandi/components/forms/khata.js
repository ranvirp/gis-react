
import React from "react";
import * as yup from 'yup'
import {GenericForm} from "../../../../components/forms/genericreacthookform";
import {varsKhata} from "../../generated/variables"
import {KhataFormComponent} from "../../generated/inputformcomponents";

import {createKhataMutation, updateKhataMutation} from "../../generated/mutations";
import {KhataAfterSubmitFn } from "../../functions/functionres";

const KhataYupSchema = yup.object({
khata_no: yup.number().integer().required(),
area: yup.number().required(),
 }).required();

export function KhataCreateForm(props)
{
    const formComponent = props.formComponent ?? <KhataFormComponent/>
    const afterSubmitFn = props.afterSubmitFn ?? KhataAfterSubmitFn
    const debug = props.debug ?? false
    const yupSchema = props.yupSchema ?? KhataYupSchema
    const mutationQuery = props.mutationQuery ?? createKhataMutation
    const vars = props.vars ?? varsKhata
    return (
        <GenericForm {...props} title="Create Khata" afterSubmitFn={afterSubmitFn} debug={debug} yupSchema={yupSchema} formComponent={formComponent}  mutationQuery={mutationQuery} variables={vars}/>

    )
}
export function KhataUpdateForm(props)
{
   const formComponent = props.formComponent ?? <KhataFormComponent/>
    const afterSubmitFn = props.afterSubmitFn ?? KhataAfterSubmitFn
    const debug = props.debug ?? false
    const yupSchema = props.yupSchema ?? KhataYupSchema
    const mutationQuery = props.mutationQuery ?? updateKhataMutation
    const vars = props.vars ?? varsKhata
    return (
        <GenericForm {...props} title="Update Khata" afterSubmitFn={afterSubmitFn} debug={debug} yupSchema={yupSchema} formComponent={formComponent}  mutationQuery={mutationQuery} variables={vars}/>

    )

   
}
   
    
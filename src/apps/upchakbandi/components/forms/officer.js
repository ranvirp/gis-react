
import React from "react";
import * as yup from 'yup'
import {GenericForm} from "../../../../components/forms/genericreacthookform";
import {varsOfficer} from "../../generated/variables";

import {createOfficerMutation, updateOfficerMutation} from "../../generated/mutations";
import {Grid, Stack} from "@mui/material";
import {ReactHookFormInput} from "../../../../components/forms/reacthookforminput";
import {getButton, getInputParameters} from "../../inputparameters";

const OfficerYupSchema = yup.object({
name: yup.string().required(),
name_eng: yup.string().required(),
mobile_no: yup.string().required(),
unique_id: yup.string().required(),
 }).required();
const OfficerAfterSubmitFn = (value)=>{}
 function OfficerFormComponent(props)  {
    return ( <Stack>
        <Grid container>
        <Grid item xs={3}>
        {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Officer','name').component, id:'name', label:'Name', defaultValue:'', required:getInputParameters('Officer','name').required, ...getInputParameters('Officer','name').props, ...props})}
        </Grid>
        <Grid item xs={3}>
            {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Officer','name_eng').component, id:'name_eng', label:'Name Eng', defaultValue:'', required:getInputParameters('Officer','name_eng').required, ...getInputParameters('Officer','name_eng').props, ...props})}
        </Grid>
        <Grid item xs={3}>
        {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Officer','mobile_no').component, id:'mobile_no', label:'Mobile No', defaultValue:'', required:getInputParameters('Officer','mobile_no').required, ...getInputParameters('Officer','mobile_no').props, ...props})}
        </Grid>
        <Grid item xs={2}>
            {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Officer','unique_id').component, id:'unique_id', label:'Unique Id', defaultValue:'', required:getInputParameters('Officer','unique_id').required, ...getInputParameters('Officer','unique_id').props, ...props})}
        </Grid>
        <Grid xs={1}>
            {getButton()}
        </Grid>
        </Grid>

    </Stack>);
}
export function OfficerCreateForm(props)
{
    const formComponent = props.formComponent ?? <OfficerFormComponent/>
    const afterSubmitFn = props.afterSubmitFn ?? OfficerAfterSubmitFn
    const debug = props.debug ?? false
    const yupSchema = props.yupSchema ?? OfficerYupSchema
    const mutationQuery = props.mutationQuery ?? createOfficerMutation
    const vars = props.vars ?? varsOfficer
    return (
        <GenericForm {...props} title="Create Officer" afterSubmitFn={afterSubmitFn} debug={debug} yupSchema={yupSchema} formComponent={formComponent}  mutationQuery={mutationQuery} variables={vars}/>

    )
}
export function OfficerUpdateForm(props)
{
   const formComponent = props.formComponent ?? <OfficerFormComponent/>
    const afterSubmitFn = props.afterSubmitFn ?? OfficerAfterSubmitFn
    const debug = props.debug ?? false
    const yupSchema = props.yupSchema ?? OfficerYupSchema
    const mutationQuery = props.mutationQuery ?? updateOfficerMutation
    const vars = props.vars ?? varsOfficer
    return (
        <GenericForm {...props} title="Update Officer" afterSubmitFn={afterSubmitFn} debug={debug} yupSchema={yupSchema} formComponent={formComponent}  mutationQuery={mutationQuery} variables={vars}/>

    )

   
}
   
    
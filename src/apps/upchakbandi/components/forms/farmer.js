
import React from "react";
import * as yup from 'yup'
import {GenericForm} from "../../../../components/forms/genericreacthookform";
import {varsFarmer} from "../../generated/variables"

import {createFarmerMutation, updateFarmerMutation} from "../../generated/mutations";
import {FarmerAfterSubmitFn } from "../../functions/functionres";
import {Stack} from "@mui/material";
import {ReactHookFormInput} from "../../../../components/forms/reacthookforminput";
import {getButton, getInputParameters} from "../../inputparameters";
import Grid from "@material-ui/core/Grid";

const FarmerYupSchema = yup.object({
    unique_id: yup.string().required(),
    khatedar_code: yup.string().required(),
    mobile_no: yup.string().required(),
    name: yup.string().required(),
    relationship: yup.string().required(),
    relative_name: yup.string().required(),
    year_of_birth: yup.number().integer().required(),
    gender: yup.string().required(),
    majra: yup.string().required(),
    entry_type: yup.string().required(),
}).required();
 function FarmerFormComponent(props)  {
    return (
        <Stack>
        <Grid container>
        <Grid item xs={12}>
        {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','khatauni').component, id:'khatauni', label:'Khatauni', defaultValue:'',required:getInputParameters('Farmer','khatauni').required, ...getInputParameters('Farmer','khatauni').props, ...props})}
        </Grid>
            <Grid item xs={3}>
                {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','name').component, id:'name', label:'Name', defaultValue:'', required:getInputParameters('Farmer','name').required, ...getInputParameters('Farmer','name').props, ...props})}
            </Grid>
            <Grid item xs={2}>
                {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','relationship').component, id:'relationship', label:'Relationship', defaultValue:'', required:getInputParameters('Farmer','relationship').required, ...getInputParameters('Farmer','relationship').props, ...props})}
            </Grid>
            <Grid item xs={3}>
                {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','relative_name').component, id:'relative_name', label:'Relative Name', defaultValue:'', required:getInputParameters('Farmer','relative_name').required, ...getInputParameters('Farmer','relative_name').props, ...props})}
            </Grid>
            <Grid item xs={2}>
                {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','gender').component, id:'gender', label:'Gender', defaultValue:'', required:getInputParameters('Farmer','gender').required, ...getInputParameters('Farmer','gender').props, ...props})}
            </Grid>
            <Grid item xs={2}>
                {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','year_of_birth').component, id:'year_of_birth', label:'Year Of Birth', defaultValue:'', required:getInputParameters('Farmer','year_of_birth').required, ...getInputParameters('Farmer','year_of_birth').props, ...props})}
            </Grid>

            <Grid item xs={3}>
            {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','unique_id').component, id:'unique_id', label:'Unique Id', defaultValue:'', required:getInputParameters('Farmer','unique_id').required, ...getInputParameters('Farmer','unique_id').props, ...props})}
            </Grid>
                <Grid item xs={3}>
        {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','mobile_no').component, id:'mobile_no', label:'Mobile No', defaultValue:'', required:getInputParameters('Farmer','mobile_no').required, ...getInputParameters('Farmer','mobile_no').props, ...props})}
                </Grid>


                        <Grid item xs={3}>
        {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','majra').component, id:'majra', label:'Majra', defaultValue:'', required:getInputParameters('Farmer','majra').required, ...getInputParameters('Farmer','majra').props, ...props})}
                        </Grid>

            </Grid>
        {getButton()}
        </Stack>
    )
}
export function FarmerCreateForm(props)
{
    const formComponent = props.formComponent ?? <FarmerFormComponent/>
    const afterSubmitFn = props.afterSubmitFn ?? FarmerAfterSubmitFn
    const debug = props.debug ?? false
    const yupSchema = props.yupSchema ?? FarmerYupSchema
    const mutationQuery = props.mutationQuery ?? createFarmerMutation
    const vars = props.vars ?? varsFarmer
    return (
        <GenericForm {...props} title="Create Farmer" afterSubmitFn={afterSubmitFn} debug={debug} yupSchema={yupSchema} formComponent={formComponent}  mutationQuery={mutationQuery} variables={vars}/>

    )
}
export function FarmerUpdateForm(props)
{
    const formComponent = props.formComponent ?? <FarmerFormComponent/>
    const afterSubmitFn = props.afterSubmitFn ?? FarmerAfterSubmitFn
    const debug = props.debug ?? false
    const yupSchema = props.yupSchema ?? FarmerYupSchema
    const mutationQuery = props.mutationQuery ?? updateFarmerMutation
    const vars = props.vars ?? varsFarmer
    return (
        <GenericForm {...props} title="Update Farmer" afterSubmitFn={afterSubmitFn} debug={debug} yupSchema={yupSchema} formComponent={formComponent}  mutationQuery={mutationQuery} variables={vars}/>

    )


}
   
    
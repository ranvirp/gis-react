import {GenericForm} from "./genericreacthookform";
import React from "react";
import PropTypes from 'prop-types'
import {Grid, Stack, TextField} from "@mui/material";
import {ReactHookFormInput} from "./reacthookforminput";
import {KhataFormComponent} from "../../apps/upchakbandi/generated/inputformcomponents";
import {KhataYupSchema} from "../../apps/upvillages/functions/functionres";
import {getButton} from "../../apps/upchakbandi/inputparameters";
export function FormField(id, label,comp=null,size=12)
{
   return {id, label,comp,size}
}
export function FormObject(defaultProps, defaultComponents, formfields,  yupSchema, mutationQuery,afterSubmitFn=null, variablesFn=null, debug=false)
{
    this.defaultComponents = defaultComponents
    this.defaultProps = defaultProps
    this.formfields = formfields
    const defaultAfterSubmitFn = (data, values) => {}
    this.afterSubmitFn = afterSubmitFn ?? defaultAfterSubmitFn
    this.yupSchema = yupSchema
    this.mutationQuery = mutationQuery
    const varsFn = (val) => {return val}
    this.variablesFn = variablesFn ?? varsFn
    this.debug = debug
}
export function GenericCreateUpdateForm({formObject, defaultValues, ...props})
{

    const deffn = ()=>{}
    const afterSubmitFn = formObject.afterSubmitFn ?? deffn
    const debug = formObject.debug ?? false
    const yupSchema = formObject.yupSchema
    const mutationQuery = formObject.mutationQuery
    const vars = formObject.variablesFn
    console.log("defaultvalue",defaultValues)

    const FormComponent = (props) => {return (
        <Stack >{formObject.formfields.map((value)=> {
            value.comp = value.comp ?? formObject.defaultComponents[value.id] ?? <TextField/>
           // console.log(value.comp, formObject.defaultComponents[value.id])
            const size=value.size??12
            value.required = formObject.yupSchema.fields[value.id]?.exclusiveTests.required
            const otherprops = props[value.id] ?? {}
            value.defaultValue = defaultValues[value.id]
           // console.log("mydefaultvalue", value.defaultValue, value.id, defaultValues)
            //console.log(formObject.defaultProps)
            if (props.pk == value.id)

             value.comp = <TextField disabled={"true"}/>

                return React.cloneElement(<ReactHookFormInput />, { ...formObject.defaultProps[value.id]??{},...value, ...otherprops, ...props})


        })} {getButton()} </Stack>)}



    return (
        <GenericForm  {...props} defaultValues={defaultValues}  afterSubmitFn={afterSubmitFn} debug={debug} yupSchema={yupSchema} formComponent={<FormComponent {...props}/>}  mutationQuery={mutationQuery} variables={vars}/>

    )
}
/*
GenericCreateUpdateForm.propTypes = {
    formObject:PropTypes.instanceOf(FormObject)
}
*/
export default GenericCreateUpdateForm

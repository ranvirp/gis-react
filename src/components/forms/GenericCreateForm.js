import {GenericReactHookForm} from "./GenericReactHookForm";
import React from "react";
import PropTypes from 'prop-types'
import {Grid, Stack, TextField} from "@mui/material";
import {ReactHookFormInput} from "./ReactHookFormInput";
import {KhataFormComponent} from "../../apps/upchakbandi/generated/inputformcomponents";
import {KhataYupSchema} from "../../apps/upvillages/functions/functionres";
import {getButton} from "../../apps/upchakbandi/inputparameters";
export function FormField(id, label,comp=null,xs=12,sx={})
{
   return {id, label,comp,xs,sx}
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
const deffn = ()=>{}
export function GenericCreateUpdateForm({formObject, ...props})
{


   // console.log(props)
    const afterSubmitFn = formObject.afterSubmitFn ?? deffn
    const debug = formObject.debug ?? false
    const yupSchema = formObject.yupSchema
    const mutationQuery = formObject.mutationQuery
    const vars = formObject.variablesFn
    const direction = props?.horizontal? "row":"column"
    const defaultValues = props.defaultValues ?? {}
    //console.log("defaultvalues",defaultValues)
    if (!props.edit)
        formObject.formfields = formObject.formfields?.filter(item=>(item.id!=props.pk))

    const FormComponent = (props) => {return (
        <Grid container>{formObject.formfields.map((value)=> {
            value.comp = value.comp ?? formObject.defaultComponents[value.id] ?? <TextField/>
           // console.log(value.comp, formObject.defaultComponents[value.id])

            value.required = formObject.yupSchema.fields[value.id]?.exclusiveTests.required
            const otherprops = {...formObject.defaultProps[value.id],...props[value.id] }
            if (defaultValues[value.id]) value.defaultValue = defaultValues[value.id]
           // console.log("mydefaultvalue", value.defaultValue, value.id, defaultValues)
            //console.log(formObject.defaultProps)
            if (props.pk == value.id)

                value.comp = debug?<input />:<input type={"hidden"}/>

            return <Grid item xs={value.xs} sx={value.sx}>{React.cloneElement(<ReactHookFormInput />, { ...formObject.defaultProps[value.id]??{},...value, ...otherprops, ...props})}</Grid>


        })} {getButton()} </Grid>)}



    return (
        <GenericReactHookForm defaultValues={defaultValues} afterSubmitFn={afterSubmitFn} debug={debug} yupSchema={yupSchema} formComponent={<FormComponent {...props}/>} mutationQuery={mutationQuery} variables={vars} {...props}/>

    )
}
/*
GenericCreateUpdateForm.propTypes = {
    formObject:PropTypes.instanceOf(FormObject)
}
*/
export default GenericCreateUpdateForm

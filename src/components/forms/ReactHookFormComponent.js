import {Stack, TextField, Button} from "@mui/material";
import React, {useEffect, useRef} from "react";
import {ReactHookFormControlledInput, ReactHookFormInput} from "./ReactHookFormInput";
import {getButton} from "../../apps/upchakbandi/inputparameters";
import {useFieldArray, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {postGraphSqlQuery} from "../fetcher/graphsqlfetcher";
import {graphqlurl} from "../../apps/upchakbandi/settings";
import * as yup from "yup"
export function ReactHookFormObject(defaultProps, defaultComponents, formFields)
{
    this.defaultComponents = defaultComponents
    this.defaultProps = defaultProps
    this.formFields = formFields

}
export const DynamicReactHookFormComponent = ({formObject,fieldInfo,fields, fieldArray,form,index, componentRootName,debug=false, ...props}) => {

//console.log('fields', fields, fieldInfo)
    const removeElement = (e)=>{
        fieldArray.remove(index)

    }
    let pk = false
    const markForDeletion = (e)=>{
        console.log('mark for deletion')
        let deleteText = 'Delete'
        var deleteValue = e.target.getAttribute('delete')
        if (deleteValue === 1) deleteValue = 0
        else if (deleteValue === 0) deleteValue = 1
        if (deleteValue === 1) deleteText = 'UnDelete'

        const prevValue = fieldArray.fields[index]
        e.target.setAttribute('delete', deleteValue)
        e.target.textContent =  deleteText
        e.target.innerText = deleteText

        prevValue.delete = deleteValue
        fieldArray.update(index, prevValue)

    }

    function doFields(fields){

        return Object.keys(fieldInfo).map((value1,index1)=> {
                const field = fieldInfo[value1]



                const myProps = {}
                //console.log(value.id)
                myProps.required = field.required ?? false

                myProps.name = `${componentRootName}.${value1}`
                myProps.comp = field.comp ?? formObject.defaultComponents[value1] ?? <TextField/>
                myProps.onChange = field.onChange
                myProps.label = field.label
                myProps.defaultValue = fields[value1]
                if (field.pk) {
                    myProps.comp = <TextField type={"hidden"}/>
                    if (fields[value1]) pk = true
                }
                // console.log(value.comp, formObject.defaultComponents[value.id])
                //const size=value.size??12
                // value.required = props.formObject.yupSchema.fields[value.id]?.exclusiveTests.required

                //const otherprops = {...formObject.defaultProps[value.name],...props[value.name] }
                //myProps.defaultValue = field.defaultValue



                return React.cloneElement(<ReactHookFormControlledInput/>, {
                    ...myProps,

                    form: form,
                    fieldArray:fieldArray,
                    componentRootName:componentRootName,
                    index:index,




                })


        })
    }
    return (
        <Stack direction={props.direction??"row"}>
            {doFields(fields)}
            { !pk && <Button  onClick={removeElement}>Remove</Button>}

            { pk && <Button delete={0} onClick={markForDeletion}>  Delete</Button>}

        </Stack>)}
export const FieldArrayReactHookFormComponent = ({formObject,control,errors, componentRootName, defaultValues={},debug=false, ...props}) => {

    const mounted = useRef();
    const {replace,fields} = useFieldArray({control,name:componentRootName})
    useEffect(
        ()=>{
            if (!mounted.current) {
                //console.log("mounting")
                replace(formObject.formFields)
            }
            return () => {
                //console.log("unmounting")
                replace(null)
            }
        },[formObject.formFields,replace]
    )

    function doFields(fields){

        return fields.map((value,index)=> {
            console.log(value[value.name])


            const myProps = {}
            //console.log(value.id)
            myProps.required = value.required ?? false

            myProps.id = `${componentRootName}[${index}].${value.name}`
            myProps.comp = value.comp ?? formObject.defaultComponents[value.name] ?? <TextField/>
            myProps.onChange = value.onChange
            myProps.label = value.label
            // console.log(value.comp, formObject.defaultComponents[value.id])
            //const size=value.size??12
            // value.required = props.formObject.yupSchema.fields[value.id]?.exclusiveTests.required

            const otherprops = {...formObject.defaultProps[value.name],...props[value.name] }
            myProps.defaultValue = value.defaultValue
            if (defaultValues[value.name]) myProps.defaultValue = defaultValues[value.name]
            // console.log("mydefaultvalue", value.defaultValue, value.id, defaultValues)
            //console.log(formObject.defaultProps)
            if (formObject.formFields.pk)

                myProps.comp = debug?<input />:<input type={"hidden"}/>

//return <TextField {...myProps}/>

            return React.cloneElement(<ReactHookFormInput />, {key:value.id,name:value.name, ...formObject.defaultProps[value.name]??{},...myProps, ...otherprops, ...props, control:control, errors:errors})


        })
    }
    return (
        <Stack direction={props.direction??"column"}>
            {doFields(fields)}
        </Stack>)}
export const ReactHookFormComponent = ({formObject,form,reset,setValue, componentRootName, defaultValues={},debug=false, ...props}) => {



    return (
    <Stack direction={props.direction??"column"}>{formObject.formFields.map((value)=> {
        value.id = Math.random()
        const myProps = {}

        myProps.id = value.name
        myProps.name = value.name
        myProps.comp = value.comp ?? formObject.defaultComponents[value.name] ?? <TextField/>
        myProps.onChange = value.onChange
        myProps.label = value.label
        // console.log(value.comp, formObject.defaultComponents[value.id])
        //const size=value.size??12
       // value.required = props.formObject.yupSchema.fields[value.id]?.exclusiveTests.required

        const otherprops = {...formObject.defaultProps[value.name],...props[value.name] }
        myProps.defaultValue = value.defaultValue
        if (defaultValues[value.name]) myProps.defaultValue = defaultValues[value.name]
        // console.log("mydefaultvalue", value.defaultValue, value.id, defaultValues)
        //console.log(formObject.defaultProps)
        if (formObject.formFields.pk)

            myProps.comp = debug?<input />:<input type={"hidden"}/>

//return <TextField {...myProps}/>

        return React.cloneElement(<ReactHookFormInput />, {key:value.id,name:value.name, ...formObject.defaultProps[value.name]??{},...myProps, ...otherprops, ...props, form:form})


    })} </Stack>)}
export function ReactHookForm({formComponent, yupSchema, mutationQuery='',afterSubmitFn=null, variablesFn=null, debug=false, ...props}) {
   const [state,setState] = React.useState({})

   const {control, formState:{errors}, handleSubmit, reset, getValues, setValue} = useForm({
       defaultValues:props.defaultValues??{},
       resolver:yupResolver(yupSchema??yup.object({}).required())
   })

    const onSubmit= async (data)=>{

        console.log(data)
        const defaultVariablesFn = (data)=>{return data}
        const variablesFm1 = variablesFn ?? defaultVariablesFn
        const result = await postGraphSqlQuery(graphqlurl, mutationQuery,  variablesFm1(data))
        props.debug && console.log(result)
        if (afterSubmitFn)
            afterSubmitFn(data, result)
        //console.log(result)
        if (!result.errors) setState({...state,reset:true, fields:{}})
        else setState({...state,fields:data})
       // reset({})

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
            {React.cloneElement(formComponent, {control, errors ,reset, getValues, setValue,...props})}
            {getButton()}
        </Stack>
        </form>
    )
}
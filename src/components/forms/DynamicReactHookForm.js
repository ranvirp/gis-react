import {useFieldArray} from "react-hook-form";
import React, {useEffect} from "react";
import {Stack, Button} from "@mui/material";
import {DynamicReactHookFormComponent} from "./ReactHookFormComponent";
import defaultComponents, {defaultProps} from "../../apps/upchakbandi/inputparameters";

export function DynamicReactHookForm({fieldInfo,initialValues, newForm,componentName, ...props}){


    const fieldArray = useFieldArray({control: newForm.control, name: componentName, keyName:props.keyName??'code'})

    const defaultValues = {}
    Object.keys(fieldInfo).forEach((value,index,arr)=>{
        defaultValues[value] = fieldInfo[value].defaultValue?? ''
    })
    useEffect (()=>
    {
        // console.log("running useEffect", items)
        fieldArray.replace(initialValues)
        return ()=>{
            fieldArray.remove()
        }
        //items.map((item,i)=>{fieldArray.append(item)})
    },[JSON.stringify(initialValues)])

    const fn1 = (e)=>{
        fieldArray.append(defaultValues)

    }
    /*
    const removeElement = (e)=>{
        const indexToBeRemoved = e.target.getAttribute('value')
        fieldArray.remove(indexToBeRemoved)

    }
    const markForDeletion = (e)=>{
        const indexToBeDeleted = e.target.getAttribute('value')
        const prevValue = fieldArray.fields[indexToBeDeleted]
        prevValue.delete = 1
        fieldArray.update(indexToBeDeleted, prevValue)

    }
    */
    const onSubmit = (data) => {
         console.log(newForm.formState.errors)

        if (props.onSubmit) props.onSubmit(data)
    }
    const showValues = (e) => {
        props.debug && console.log(newForm.formState.errors)
        props.debug && console.log(newForm.watch(componentName))
    }

    return (
        <form onSubmit={newForm.handleSubmit(onSubmit)}>
            <Stack direction={"column"}>

                <Stack direction={"row"}> <Button onClick={fn1}>{props.addTitle??'Add New'}</Button>{props.debug && <Button onClick={showValues}>Show Values</Button>}<Button type={"submit"}>Submit</Button></Stack>
                {fieldArray.fields.map((value,index1) => {

                    //props.debug && console.log("I am here", index1)
                    return <>
                        <Stack  direction={"row"} sx={{backgroundColor:(value.delete === 1)?'red':''}}>
                            {props.beforeComponent?.(value)}
                            <DynamicReactHookFormComponent key={value.id} {...{ formObject:{defaultComponents, defaultProps},fieldInfo:fieldInfo,fields:value,'fieldArray':fieldArray,  form:newForm,index:index1, componentRootName:`${componentName}[${index1}]`}}/>
                            {
                               // <Button value={index1} onClick={removeElement}>Remove</Button>
                                //<Button value={index1} onClick={markForDeletion}>Delete</Button>
                            }


                        {props.afterComponent?.(value)}
                        </Stack>
                    </>

                    // return <h2>Hello</h2>
                })}

            </Stack>
        </form>
    )
}
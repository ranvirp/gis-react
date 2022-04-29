import {Controller} from "react-hook-form";
import React from "react";
import {ErrorMessage} from "@hookform/error-message";
import {TextField} from "@mui/material";
const errorStyles = {

    border: 1,
    m:1,
    borderColor:'error.main'

};

export function ReactHookFormInput({name,label, comp, form, defaultValue, required, visibility, onChange, ...props}){
    comp = comp ?? <TextField/>
    //console.log('defaultValue', defaultValue)
    if (typeof comp.type === 'string') {
        return React.cloneElement(comp, {...form.register(name)})
    }
    return ( <Controller
        name={name}
        control={form.control}
        defaultValue={defaultValue?? '' }
        render={({ field: { onChange:inbuildOnChange, value,ref },
                     fieldState: { invalid, isTouched, isDirty, error },
                     formState:{errors}}) => (

            <>
                {React.cloneElement(comp, {...props, sx:{...props.sx,...errors[name]?errorStyles:{}},name:name,value:props.value??value, label:label , required:required??false,visibility:visibility??"visible", onChange:(e)=>{ if (onChange) onChange(e);inbuildOnChange(e)},


                })}
                 <ErrorMessage errors={errors} name={name}/>
                {
                 //   <Box hidden={!eval("errors?." + props.id.replace("[", "?.["))}><Typography
                   //     sx={{color: 'error.main'}}>{eval("errors?." + props.id.replace("[", "?.["))?.message}</Typography></Box>
                }
            </>

        )}
    />)
}
export function ReactHookFormControlledInput({name,form,fieldArray,componentRootName,index, ...props}){
   // console.log("name",props.name)
     if (typeof props.comp?.type === 'string') {
        return React.cloneElement(props.comp, {...form.register(name)})
    }
    return ( <Controller
        name={name}
        control={form.control}
        defaultValue={props.defaultValue?? '' }
        render={({ field: { onChange, value,ref },
                     fieldState,
                     formState}) => (

            <>
                {React.cloneElement(props.comp ?? <TextField/>, {label:props.label,value:value, defaultValue:props.defaultValue, required:props.required??false,visibility:props.visibility??"visible", onChange:(e)=>{if (props.onChange) props.onChange(e);onChange(e)},
                    fieldArray:fieldArray,componentRootName:componentRootName,form:form,index:index, name:name

                })}
                {
                 // <Box hidden={!eval("errors." + props.name.replace("[", "?.["))}><Typography
                   //    sx={{color: 'error.main'}}>{eval("errors." + props.name.replace("[", "?.["))?.message}</Typography></Box>
                }
                <ErrorMessage errors={formState.errors} name={name}/>

            </>

        )}
    />)
}


import {Controller} from "react-hook-form";
import React from "react";
import {ErrorMessage} from "@hookform/error-message";
const errorStyles = {

    border: 1,
    m:1,
    borderColor:'error.main'

};

export function ReactHookFormInput(props){
    return ( <Controller
        name={props.id}
        control={props.control}
        defaultValue={props.defaultValue?? '' }
        render={({ field: { onChange, value,ref },
                     fieldState: { invalid, isTouched, isDirty, error },
                     formState:{errors}}) => (

            <>
                {React.cloneElement(props.comp, {label:props.label,value:value, defaultValue:props.defaultValue, required:props.required??false,visibility:props.visibility??"visible", onChange:(e)=>{ if (props.onChange) props.onChange(e);onChange(e)},

                    sx:errors[props.id]?errorStyles:{}
                })}
                 <ErrorMessage errors={errors} name={props.id}/>
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
    return ( <Controller
        name={name}
        control={form.control}
        defaultValue={props.defaultValue?? '' }
        render={({ field: { onChange, value,ref },
                     fieldState,
                     formState}) => (

            <>
                {React.cloneElement(props.comp, {label:props.label,value:value, defaultValue:props.defaultValue, required:props.required??false,visibility:props.visibility??"visible", onChange:(e)=>{if (props.onChange) props.onChange(e);onChange(e)},
                    fieldArray:fieldArray,componentRootName:componentRootName,form:form,index:index

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


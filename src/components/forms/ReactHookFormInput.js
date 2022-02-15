import {Controller} from "react-hook-form";
import React from "react";
import { useController, useForm } from "react-hook-form";
import {Box} from "@material-ui/core";
import {Typography} from "@mui/material";
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
                {React.cloneElement(props.comp, {label:props.label,value:value, ref:ref,defaultValue:props.defaultValue, required:props.required??false,visibility:props.visibility??"visible", onChange:(e)=>{const r = props.onChange?props.onChange(e):true;onChange(e)},

                    sx:errors[props.id]?errorStyles:{}
                })}

                <Box hidden={!eval("errors?." + props.id.replace("[","?.["))}><Typography sx={{color:'error.main'}}>{eval("errors?." + props.id.replace("[","?.["))?.message}</Typography></Box>

            </>

        )}
    />)
}

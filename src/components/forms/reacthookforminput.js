import {Controller} from "react-hook-form";
import React from "react";
import { useController, useForm } from "react-hook-form";


export function ReactHookFormInput(props){
    return ( <Controller
        name={props.id}
        control={props.control}
        defaultValue={props.defaultValue?? '' }
        render={({ field: { onChange, value } }) => (

            <>
                {React.cloneElement(props.comp, {label:props.label,value:value, defaultValue:props.defaultValue,...props, onChange:(e)=>{const r = props.onChange?props.onChange(e):true;onChange(e)} })}
                <p hidden={!props.errors[props.id]}>{props.errors[props.id]?.message}</p>
            </>

        )}
    />)
}

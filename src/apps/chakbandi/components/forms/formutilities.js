import {Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";

export function text1(id,label, control){
    return ( <Controller
        name={id}
        control={control}
        render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={label} />
        )}
    />)
    // return <TextField id={id} label={label} ></TextField>
}
export function ReactHookFormInput(props){
    return ( <Controller
        name={props.id}
        control={props.control}
        defaultValue={props.defaultValue }
        render={({ field: { onChange, value } }) => (

            <>
                {React.cloneElement(props.comp, {label:props.label, onChange:onChange,value:value, defaultValue:props.defaultValue })}
                <p hidden={!props.errors[props.id]}>{props.errors[props.id]?.message}</p>
            </>

        )}
    />)
}
export function myInput(comp,id,props,control,errors){
    return ( <Controller
        name={id}
        control={control}
        render={({ field: { onChange, value } }) => (

            <>
                {React.cloneElement(comp, {...props, onChange:onChange,value:value })}
                <p hidden={!errors[id]}>{errors[id]?.message}</p>
            </>

        )}
    />)
    // return <TextField id={id} label={label} ></TextField>
}
export function text(id,label){

    return (<TextField id={id} label={label} />)
}
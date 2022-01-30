import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import {FasliYearForm} from "../../apps/chakbandi/components/forms/fasliyear";
export function TestReactHookFormInput(props){
    return ( <Controller
        name={props.id}
        control={props.control}
        defaultValue={props.defaultValue }
        render={({ field: { onChange, value } }) => (

            <>
                {React.cloneElement(props.comp, {...props.props, onChange:onChange,value:value, defaultValue:props.defaultValue, register:props.register })}
                <p hidden={!props.errors[props.id]}>{props.errors[props.id]?.message}</p>
            </>

        )}
    />)
    // return <TextField id={id} label={label} ></TextField>
}

export const TestReactForm = (props) => {
    const {reset, handleSubmit, control, formState:{ errors }} = useForm({defaultValues: {
         //   a:'1396',
          //  b:''
        }})
    const [state, setState] = React.useState({reset:false})
    const myinput = <TestReactHookFormInput/>
    useEffect(()=>{
        if (state.reset) {reset();  }

    },[state.reset])
    const onSubmit = (data) => {
console.log(data)
       setState({reset:true})

    }
    const textChange = () => {
        setState({reset:false})
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {React.cloneElement(<TestReactHookFormInput/>, {comp:<FasliYearForm/>,  id:'a', name:'hi', label:'hi', defaultValue:'', control:control, errors:errors}) }
            {React.cloneElement(<TestReactHookFormInput/>, {comp:<TextField/>,  id:'b', name:'hi', label:'hi', defaultValue:'',  control:control, errors:errors}) }
            <input type="reset" />
            <Button type="submit">Submit</Button>
        </form>
    )
}
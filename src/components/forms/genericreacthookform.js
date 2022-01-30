
import {useForm} from "react-hook-form";

import React, {useEffect} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {postGraphSqlQuery} from "../fetcher/graphsqlfetcher";
import {graphqlurl} from "../../apps/chakbandi/settings";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {TestReactHookFormInput} from "../../experimentalcomponents/forms/testreactform";

export function GenericForm(props)
{
    const defaultProps = {debug:false, formProps:{}, formElementsProps:{}}
    props = {defaultProps, ...props}
   if (props.debug === 'undefined') props.debug = false
    const { control, handleSubmit, reset, formState:{ errors } } = useForm( {
        defaultValues: props.defaultValues??{},
        resolver: yupResolver(props.yupSchema)
    });
    const [state, setState] = React.useState({reset:false, fields:{}})
    useEffect(()=>{
        if (state.reset) {reset(state.fields);  }

    },[state.reset])


    const onSubmit= async (data)=>{

        console.log(data)
        const result = await postGraphSqlQuery(graphqlurl, props.mutationQuery,  props.variables(data))
        props.debug && console.log(result)
        if (props.afterSubmitFn != 'undefined')
              props.afterSubmitFn(data, result)
        console.log(result)
        if (!result.errors) setState({reset:true, fields:{}})
        else setState({...state,fields:data})
        //reset()

    }
    return (
        state.ok ?
       <Stack>
            <Typography variant="h5" textAlign="center"> {props.title} </Typography>

           {state.submitted &&  <Typography variant="h5" textAlign="center"> Object created </Typography>}


            <form onSubmit={handleSubmit(onSubmit)} {...props.formProps??{}}>

            {React.cloneElement(props.formComponent, {...props.formComponentProps, control:control, errors:errors}) }

        </form>
        </Stack>:   <Stack>
                    <Typography variant="h5" textAlign="center"> {props.title} </Typography>
            {state.submitted && <Typography variant="h5" textAlign="center"> Error in  creation of object </Typography>}

                    <form onSubmit={handleSubmit(onSubmit)} {...props.formProps??{}}>

                        {React.cloneElement(props.formComponent, {...props.formComponentProps, value:null, control:control, errors:errors}) }

                    </form>
                </Stack>
    )
}

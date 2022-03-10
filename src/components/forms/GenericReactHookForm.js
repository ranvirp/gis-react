
import {useForm} from "react-hook-form";

import React, {useEffect} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {postGraphSqlQuery} from "../fetcher/graphsqlfetcher";
import {graphqlurl} from "../../apps/upchakbandi/settings";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {Box} from "@mui/material";

export function GenericReactHookForm(props)
{
    const defaultProps = {debug:false, formProps:{}, formElementsProps:{}}
    const [state, setState] = React.useState({reset:false, fields:props.defaultValues??{},errors:[],data:{},result:[] })

    props = {defaultProps, ...props}
   if (props.debug === 'undefined') props.debug = false
    const form = useForm( {
        defaultValues: state.fields,
        resolver: yupResolver(props.yupSchema)
    });
    useEffect(()=>{
        if (state.reset) {form.reset({});  }
        return () => {


        }

    },[state.reset, state.result])


    const onSubmit= async (data)=>{

       // console.log(data)
       // console.log(props)
        const result = await postGraphSqlQuery(graphqlurl, props.mutationQuery,  props.variables(data))
        props.debug && console.log(result)
        if (props.afterSubmitFn) {
         //   console.log(props.afterSubmitFn)
            props.afterSubmitFn(data, result)
        }
        //console.log(result)
        if (!result.errors) setState({...state,reset:true, fields:{}, errors:[],data:data,'result':result})
        else setState({...state,reset:false,fields:data, errors:result.errors,data:data,result: {data:{}}})
       // reset({})

    }
    return (
        state.ok ?
       <Stack>
            <Typography component={'span'} variant="h5" textAlign="center"> {props.title} </Typography>

           {state.submitted &&  <Typography component={'span'} variant="h5" textAlign="center"> Object created </Typography>}


            <form onSubmit={form.handleSubmit(onSubmit)} {...props.formProps??{}}>

            {React.cloneElement(props.formComponent, {...props.formComponentProps, form:form, defaultValues:state.fields}) }

        </form>
        </Stack>:      <Stack>
                    <Typography component={'span'} variant="h5" textAlign="center"> {props.title} </Typography>
            {state.submitted && <Typography component={'span'} variant="h5" textAlign="center"> Error in  creation of object </Typography>}

                    <form onSubmit={form.handleSubmit(onSubmit)} {...props.formProps??{}}>

                        {React.cloneElement(props.formComponent, {...props.formComponentProps, form:form,defaultValues:state.fields}) }
                        <Box sx={{maxWidth:"220px"}}><span>{(state.errors.length > 0) && JSON.stringify(state.errors, null, '\t')}</span></Box>
                    </form>
                </Stack>


    )
}

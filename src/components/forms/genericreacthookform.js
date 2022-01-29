
import {useForm} from "react-hook-form";

import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {postGraphSqlQuery} from "../fetcher/graphsqlfetcher";
import {graphqlurl} from "../../apps/chakbandi/settings";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export function GenericForm(props)
{
    const defaultProps = {debug:false, formProps:{}, formElementsProps:{}}
    props = {defaultProps, ...props}
   if (props.debug === 'undefined') props.debug = false



    const { control, handleSubmit, formState:{ errors } } = useForm( {
        defaultValues: props.defaultValues??{},
        resolver: yupResolver(props.yupSchema)
    });
    const onSubmit= async (data)=>{

        console.log(data)
        const result = await postGraphSqlQuery(graphqlurl, props.mutationQuery,  props.variables(data))
        props.debug && console.log(result)
        if (props.afterSubmitFn != 'undefined')
              props.afterSubmitFn(data, result)
        console.log(result)

    }
    return (
        <Stack>
            <Typography variant="h5" textAlign="center"> {props.title} </Typography>

            <form onSubmit={handleSubmit(onSubmit)} {...props.formProps??{}}>

            {React.cloneElement(props.formComponent, {...props.formComponentProps, control:control, errors:errors}) }

        </form>
        </Stack>
    )
}

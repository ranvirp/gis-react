import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import {graphqlurl} from "../../settings";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
const mutation = `mutation a($type:String!,$obj_json:String!){
    mutate_multiple_objects(type:$type,obj_json:$obj_json){
        ok
        errormessage
        obj_errors
        created_obj_ids updated_obj_ids deleted_obj_ids
    }
}`

export function ChakbandiForm({type,yupObject, defaultValues={}})
{
    const form = useForm({defaultValues:defaultValues, resolver:yupResolver(yupObject)})
    async function onSubmit(data)
    {

        const variables = {}
        variables.type = type
        data.khatauni_id = localStorage.khatauni_id
        data.chakbandi_id = localStorage.chakbandi_id
        variables.obj_json = JSON.stringify(data)
        const results = await postGraphSqlQuery(graphqlurl, mutation, variables)
        console.log(results)
        form.reset()

    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            {props.children}
        </form>
    )
}
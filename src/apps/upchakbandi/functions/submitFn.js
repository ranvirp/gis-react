import {postGraphSqlQuery} from "../../../components/fetcher/graphsqlfetcher";
import {graphqlurl} from "../settings";

export async  function defaultSubmitFn(data, type,  newForm)
{
    const mutation = `mutation a($type:String!,$obj_json:String!){
    mutate_multiple_objects(type:$type,obj_json:$obj_json){
        ok
        errormessage
        obj_errors
        created_obj_ids updated_obj_ids deleted_obj_ids
    }
}`
    const variables = {}
    variables.type = type

    variables.obj_json = JSON.stringify(data)
    const results = await postGraphSqlQuery(graphqlurl, mutation, variables)
    console.log(results)
    newForm.reset()

}
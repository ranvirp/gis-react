
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateAuditlogsMutation = `mutation something($id:String, $object_id:String!, $object_name:String!, $object_value:String!, $object_hash:String!, $type_of_action:String!, $hash_code:String!, $action_by:String!, $action_on:String!){
    create_update_auditlogs(id: $id, object_id: $object_id, object_name: $object_name, object_value: $object_value, object_hash: $object_hash, type_of_action: $type_of_action, hash_code: $hash_code, action_by: $action_by, action_on: $action_on) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
object_id: yup.string().required(),
object_name: yup.string().required(),
object_hash: yup.string().required(),
type_of_action: yup.string().required(),
action_by: yup.string().required(),
action_on: yup.date().required(),
 }).required();

const query = 'query a($filter:String!){auditlogs_by_filter(filter:$filter) { id  object_id  object_name  object_value  object_hash  type_of_action  hash_code  action_by  action_on }  }'

export const AuditlogsCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'auditlogs_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("object_id",items[0]["object_id"])
form.setValue("object_name",items[0]["object_name"])
form.setValue("object_value",items[0]["object_value"])
form.setValue("object_hash",items[0]["object_hash"])
form.setValue("type_of_action",items[0]["type_of_action"])
form.setValue("hash_code",items[0]["hash_code"])
form.setValue("action_by",items[0]["action_by"])
form.setValue("action_on",items[0]["action_on"])

       setId(items[0]['id'])
      
    }
    
  })
}
function reset(e)
{
  form.reset()  
  setId(null)
}
function onSubmit(data)
{
    
Object.keys(data).map(value=>{
     data[value] = String(data[value])
 })
    graphqlFetch(createUpdateAuditlogsMutation, data, 'create_update_auditlogs').then(({items,errors,success})=>{
 if (errors.length > 0) {
            setErrorMessage(errors.toString)
            return
        }
        let errormessage = items.errormessage?.toString()
        let errorMessage = 'Success'
        if (errormessage) errorMessage = "Error during form submission: " + errormessage
        else form.reset()
        setErrorMessage((errorMessage))


    })


}
    return(
        <Stack>
        <form onSubmit={form.handleSubmit(onSubmit)}>
               <Stack>
                   <Box sx={{color:errormessage === 'Success'? 'green':"red"}}>{errormessage}</Box>
                    <ReactHookFormInput  form={form} comp={defaultComponents["object_id"]} name={"object_id"} label={"Object Id"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["object_name"]} name={"object_name"} label={"Object Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["object_value"]} name={"object_value"} label={"Object Value"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["object_hash"]} name={"object_hash"} label={"Object Hash"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["type_of_action"]} name={"type_of_action"} label={"Type Of Action"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["hash_code"]} name={"hash_code"} label={"Hash Code"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["action_by"]} name={"action_by"} label={"Action By"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["action_on"]} name={"action_on"} label={"Action On"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
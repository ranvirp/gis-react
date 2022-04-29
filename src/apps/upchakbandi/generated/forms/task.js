
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateTaskMutation = `mutation something($id:String, $app_name:String!, $app_id:String!, $task_name:String!, $progress:String!){
    create_update_task(id: $id, app_name: $app_name, app_id: $app_id, task_name: $task_name, progress: $progress) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
app_name: yup.string().required(),
app_id: yup.string().required(),
task_name: yup.string().required(),
progress: yup.number().required(),
 }).required();

const query = 'query a($filter:String!){task_by_filter(filter:$filter) { id  app_name  app_id  task_name  status  progress }  }'

export const TaskCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'task_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("app_name",items[0]["app_name"])
form.setValue("app_id",items[0]["app_id"])
form.setValue("task_name",items[0]["task_name"])
form.setValue("progress",items[0]["progress"])

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
    graphqlFetch(createUpdateTaskMutation, data, 'create_update_task').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["app_name"]} name={"app_name"} label={"App Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["app_id"]} name={"app_id"} label={"App Id"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["task_name"]} name={"task_name"} label={"Task Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["progress"]} name={"progress"} label={"Progress"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    

import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateOfficerMutation = `mutation something($id:String, $name:String!, $name_eng:String!, $mobile_no:String!, $unique_id:String!){
    create_update_officer(id: $id, name: $name, name_eng: $name_eng, mobile_no: $mobile_no, unique_id: $unique_id) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
name: yup.string().required(),
name_eng: yup.string().required(),
mobile_no: yup.string().required(),
unique_id: yup.string().required(),
 }).required();

const query = 'query a($filter:String!){officer_by_filter(filter:$filter) { id  name  name_eng  mobile_no  unique_id }  }'

export const OfficerCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'officer_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("name",items[0]["name"])
form.setValue("name_eng",items[0]["name_eng"])
form.setValue("mobile_no",items[0]["mobile_no"])
form.setValue("unique_id",items[0]["unique_id"])

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
    graphqlFetch(createUpdateOfficerMutation, data, 'create_update_officer').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["name"]} name={"name"} label={"Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["name_eng"]} name={"name_eng"} label={"Name Eng"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["mobile_no"]} name={"mobile_no"} label={"Mobile No"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["unique_id"]} name={"unique_id"} label={"Unique Id"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    

import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdatePostingsMutation = `mutation something($id:String, $officer:String!, $designation:String!, $location_type:String!, $location_code:String!, $charge_from:String!, $charge_to:String!){
    create_update_postings(id: $id, officer: $officer, designation: $designation, location_type: $location_type, location_code: $location_code, charge_from: $charge_from, charge_to: $charge_to) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
designation: yup.string().required(),
location_type: yup.string().required(),
location_code: yup.string().required(),
charge_from: yup.date().required(),
charge_to: yup.date().required(),
 }).required();

const query = 'query a($filter:String!){postings_by_filter(filter:$filter) { id officer{ id  name  name_eng  mobile_no  unique_id }  designation  location_type  location_code  charge_from  charge_to }  }'

export const PostingsCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'postings_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("officer", items[0]["officer"]["id"])
form.setValue("designation",items[0]["designation"])
form.setValue("location_type",items[0]["location_type"])
form.setValue("location_code",items[0]["location_code"])
form.setValue("charge_from",items[0]["charge_from"])
form.setValue("charge_to",items[0]["charge_to"])

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
    graphqlFetch(createUpdatePostingsMutation, data, 'create_update_postings').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["officer"]} name={"officer"} label={"Officer"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["designation"]} name={"designation"} label={"Designation"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["location_type"]} name={"location_type"} label={"Location Type"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["location_code"]} name={"location_code"} label={"Location Code"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["charge_from"]} name={"charge_from"} label={"Charge From"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["charge_to"]} name={"charge_to"} label={"Charge To"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    

import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateTehsilMutation = `mutation something($district_code:String!, $tname:String!, $tehsil_code_census:String, $tname_eng:String!){
    create_update_tehsil(district_code: $district_code, tname: $tname, tehsil_code_census: $tehsil_code_census, tname_eng: $tname_eng) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
tname: yup.string().required(),
tname_eng: yup.string().required(),
 }).required();

const query = 'query a($filter:String!){tehsil_by_filter(filter:$filter) {district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  }'

export const TehsilCreateUpdateForm = ({,...props})=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'tehsil_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("district_code", items[0]["district_code"]["district_code_census"])
form.setValue("tname",items[0]["tname"])
form.setValue("tname_eng",items[0]["tname_eng"])

       setId(items[0]['tehsil_code_census'])
      
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
    graphqlFetch(createUpdateTehsilMutation, data, 'create_update_tehsil').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["district_code"]} name={"district_code"} label={"District Code"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["tname"]} name={"tname"} label={"Tname"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["tname_eng"]} name={"tname_eng"} label={"Tname Eng"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
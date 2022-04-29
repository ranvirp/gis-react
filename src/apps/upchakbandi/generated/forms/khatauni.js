
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateKhatauniMutation = `mutation something($id:String, $village:String!, $fasli_year:String!, $no_of_khatas:String!, $no_of_gatas:String!, $area:String!){
    create_update_khatauni(id: $id, village: $village, fasli_year: $fasli_year, no_of_khatas: $no_of_khatas, no_of_gatas: $no_of_gatas, area: $area) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
fasli_year: yup.number().integer().required(),
no_of_khatas: yup.number().integer().required(),
no_of_gatas: yup.number().integer().required(),
area: yup.number().required(),
 }).required();

const query = 'query a($filter:String!){khatauni_by_filter(filter:$filter) { id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  }'

export const KhatauniCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'khatauni_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("village", items[0]["village"]["village_code_census"])
form.setValue("fasli_year",items[0]["fasli_year"])
form.setValue("no_of_khatas",items[0]["no_of_khatas"])
form.setValue("no_of_gatas",items[0]["no_of_gatas"])
form.setValue("area",items[0]["area"])

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
    graphqlFetch(createUpdateKhatauniMutation, data, 'create_update_khatauni').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["village"]} name={"village"} label={"Village"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["fasli_year"]} name={"fasli_year"} label={"Fasli Year"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["no_of_khatas"]} name={"no_of_khatas"} label={"No Of Khatas"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["no_of_gatas"]} name={"no_of_gatas"} label={"No Of Gatas"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["area"]} name={"area"} label={"Area"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
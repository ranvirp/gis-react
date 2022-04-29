
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateKhatauniBlobMutation = `mutation something($id:String, $khatauni:String!, $date_of_lock:String!, $data:String!, $hash:String!){
    create_update_khatauni_blob(id: $id, khatauni: $khatauni, date_of_lock: $date_of_lock, data: $data, hash: $hash) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
 }).required();

const query = 'query a($filter:String!){khatauni_blob_by_filter(filter:$filter) { id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  date_of_lock  data  hash }  }'

export const KhatauniBlobCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'khatauni_blob_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("khatauni", items[0]["khatauni"]["id"])
form.setValue("date_of_lock",items[0]["date_of_lock"])
form.setValue("data",items[0]["data"])
form.setValue("hash",items[0]["hash"])

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
    graphqlFetch(createUpdateKhatauniBlobMutation, data, 'create_update_khatauni_blob').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["khatauni"]} name={"khatauni"} label={"Khatauni"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["date_of_lock"]} name={"date_of_lock"} label={"Date Of Lock"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["data"]} name={"data"} label={"Data"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["hash"]} name={"hash"} label={"Hash"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    

import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateChakbandiDocumentsMutation = `mutation something($id:String, $chakbandi:String!, $khatauni:String!, $type_of_khatauni:String!){
    create_update_chakbandi_documents(id: $id, chakbandi: $chakbandi, khatauni: $khatauni, type_of_khatauni: $type_of_khatauni) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
type_of_khatauni: yup.string().required(),
 }).required();

const query = 'query a($filter:String!){chakbandi_documents_by_filter(filter:$filter) { id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  type_of_khatauni }  }'

export const ChakbandiDocumentsCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'chakbandi_documents_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("chakbandi", items[0]["chakbandi"]["id"])
form.setValue("khatauni", items[0]["khatauni"]["id"])
form.setValue("type_of_khatauni",items[0]["type_of_khatauni"])

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
    graphqlFetch(createUpdateChakbandiDocumentsMutation, data, 'create_update_chakbandi_documents').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["chakbandi"]} name={"chakbandi"} label={"Chakbandi"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["khatauni"]} name={"khatauni"} label={"Khatauni"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["type_of_khatauni"]} name={"type_of_khatauni"} label={"Type Of Khatauni"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    

import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateGataMapMutation = `mutation something($id:String, $khatauni:String!, $new_gata_no:String!, $old_gata_no:String!, $area:String!, $bhaumik_year:String!){
    create_update_gata_map(id: $id, khatauni: $khatauni, new_gata_no: $new_gata_no, old_gata_no: $old_gata_no, area: $area, bhaumik_year: $bhaumik_year) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
new_gata_no: yup.string().required(),
old_gata_no: yup.string().required(),
area: yup.number().required(),
bhaumik_year: yup.string().required(),
 }).required();

const query = 'query a($filter:String!){gata_map_by_filter(filter:$filter) { id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  new_gata_no  old_gata_no  area  bhaumik_year  status }  }'

export const GataMapCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'gata_map_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("khatauni", items[0]["khatauni"]["id"])
form.setValue("new_gata_no",items[0]["new_gata_no"])
form.setValue("old_gata_no",items[0]["old_gata_no"])
form.setValue("area",items[0]["area"])
form.setValue("bhaumik_year",items[0]["bhaumik_year"])

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
    graphqlFetch(createUpdateGataMapMutation, data, 'create_update_gata_map').then(({items,errors,success})=>{
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
<ReactHookFormInput  form={form} comp={defaultComponents["new_gata_no"]} name={"new_gata_no"} label={"New Gata No"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["old_gata_no"]} name={"old_gata_no"} label={"Old Gata No"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["area"]} name={"area"} label={"Area"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["bhaumik_year"]} name={"bhaumik_year"} label={"Bhaumik Year"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
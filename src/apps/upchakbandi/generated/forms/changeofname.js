
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateChangeOfNameMutation = `mutation something($id:String, $court_order:String!, $khatedar:String!, $new_name:String!, $effective_date:String!){
    create_update_change_of_name(id: $id, court_order: $court_order, khatedar: $khatedar, new_name: $new_name, effective_date: $effective_date) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
new_name: yup.string().required(),
effective_date: yup.date().required(),
 }).required();

const query = 'query a($filter:String!){change_of_name_by_filter(filter:$filter) { id court_order{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } khatedar{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  new_name  effective_date }  }'

export const ChangeOfNameCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'change_of_name_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("court_order", items[0]["court_order"]["id"])
form.setValue("khatedar", items[0]["khatedar"]["id"])
form.setValue("new_name",items[0]["new_name"])
form.setValue("effective_date",items[0]["effective_date"])

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
    graphqlFetch(createUpdateChangeOfNameMutation, data, 'create_update_change_of_name').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["court_order"]} name={"court_order"} label={"Court Order"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["khatedar"]} name={"khatedar"} label={"Khatedar"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["new_name"]} name={"new_name"} label={"New Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["effective_date"]} name={"effective_date"} label={"Effective Date"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    

import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateFarmerMutation = `mutation something($id:String, $chakbandi:String!, $khatauni:String!, $unique_id:String!, $khatedar_code:String!, $mobile_no:String!, $name:String!, $minimized_name:String!, $name_eng:String!, $minimized_name_eng:String!, $relationship:String!, $relative_name:String!, $relative_name_minimized:String!, $year_of_birth:String!, $gender:String!, $address:String!){
    create_update_farmer(id: $id, chakbandi: $chakbandi, khatauni: $khatauni, unique_id: $unique_id, khatedar_code: $khatedar_code, mobile_no: $mobile_no, name: $name, minimized_name: $minimized_name, name_eng: $name_eng, minimized_name_eng: $minimized_name_eng, relationship: $relationship, relative_name: $relative_name, relative_name_minimized: $relative_name_minimized, year_of_birth: $year_of_birth, gender: $gender, address: $address) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
unique_id: yup.string().required(),
khatedar_code: yup.string().required(),
mobile_no: yup.string().required(),
name: yup.string().required(),
minimized_name: yup.string().required(),
name_eng: yup.string().required(),
minimized_name_eng: yup.string().required(),
relationship: yup.string().required(),
relative_name: yup.string().required(),
relative_name_minimized: yup.string().required(),
year_of_birth: yup.number().integer().required(),
gender: yup.string().required(),
address: yup.string().required(),
 }).required();

const query = 'query a($filter:String!){farmer_by_filter(filter:$filter) { id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  }'

export const FarmerCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'farmer_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("chakbandi", items[0]["chakbandi"]["id"])
form.setValue("khatauni", items[0]["khatauni"]["id"])
form.setValue("unique_id",items[0]["unique_id"])
form.setValue("khatedar_code",items[0]["khatedar_code"])
form.setValue("mobile_no",items[0]["mobile_no"])
form.setValue("name",items[0]["name"])
form.setValue("minimized_name",items[0]["minimized_name"])
form.setValue("name_eng",items[0]["name_eng"])
form.setValue("minimized_name_eng",items[0]["minimized_name_eng"])
form.setValue("relationship",items[0]["relationship"])
form.setValue("relative_name",items[0]["relative_name"])
form.setValue("relative_name_minimized",items[0]["relative_name_minimized"])
form.setValue("year_of_birth",items[0]["year_of_birth"])
form.setValue("gender",items[0]["gender"])
form.setValue("address",items[0]["address"])

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
    graphqlFetch(createUpdateFarmerMutation, data, 'create_update_farmer').then(({items,errors,success})=>{
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
<ReactHookFormInput  form={form} comp={defaultComponents["unique_id"]} name={"unique_id"} label={"Unique Id"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["khatedar_code"]} name={"khatedar_code"} label={"Khatedar Code"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["mobile_no"]} name={"mobile_no"} label={"Mobile No"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["name"]} name={"name"} label={"Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["minimized_name"]} name={"minimized_name"} label={"Minimized Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["name_eng"]} name={"name_eng"} label={"Name Eng"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["minimized_name_eng"]} name={"minimized_name_eng"} label={"Minimized Name Eng"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["relationship"]} name={"relationship"} label={"Relationship"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["relative_name"]} name={"relative_name"} label={"Relative Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["relative_name_minimized"]} name={"relative_name_minimized"} label={"Relative Name Minimized"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["year_of_birth"]} name={"year_of_birth"} label={"Year Of Birth"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["gender"]} name={"gender"} label={"Gender"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["address"]} name={"address"} label={"Address"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
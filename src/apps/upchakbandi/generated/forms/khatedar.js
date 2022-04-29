
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateKhatedarMutation = `mutation something($id:String, $khatauni:String!, $khata_no:String!, $farmer:String!, $khatedar_code:String!, $slno_in_khata:String!, $share:String!){
    create_update_khatedar(id: $id, khatauni: $khatauni, khata_no: $khata_no, farmer: $farmer, khatedar_code: $khatedar_code, slno_in_khata: $slno_in_khata, share: $share) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
khata_no: yup.number().integer().required(),
khatedar_code: yup.string().required(),
slno_in_khata: yup.number().integer().required(),
share: yup.number().required(),
 }).required();

const query = 'query a($filter:String!){khatedar_by_filter(filter:$filter) { id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no farmer{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  khatedar_code  slno_in_khata  share  status }  }'

export const KhatedarCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'khatedar_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("khatauni", items[0]["khatauni"]["id"])
form.setValue("khata_no",items[0]["khata_no"])
form.setValue("farmer", items[0]["farmer"]["id"])
form.setValue("khatedar_code",items[0]["khatedar_code"])
form.setValue("slno_in_khata",items[0]["slno_in_khata"])
form.setValue("share",items[0]["share"])

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
    graphqlFetch(createUpdateKhatedarMutation, data, 'create_update_khatedar').then(({items,errors,success})=>{
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
<ReactHookFormInput  form={form} comp={defaultComponents["khata_no"]} name={"khata_no"} label={"Khata No"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["farmer"]} name={"farmer"} label={"Farmer"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["khatedar_code"]} name={"khatedar_code"} label={"Khatedar Code"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["slno_in_khata"]} name={"slno_in_khata"} label={"Slno In Khata"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["share"]} name={"share"} label={"Share"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
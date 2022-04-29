
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateCotenancyMutation = `mutation something($id:String, $court_order:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $khata:String!, $initial_transferor_share:String!, $final_transferor_share:String!, $final_transferee_share:String!){
    create_update_cotenancy(id: $id, court_order: $court_order, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, khata: $khata, initial_transferor_share: $initial_transferor_share, final_transferor_share: $final_transferor_share, final_transferee_share: $final_transferee_share) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
date_of_transfer: yup.date().required(),
initial_transferor_share: yup.number().required(),
final_transferor_share: yup.number().required(),
final_transferee_share: yup.number().required(),
 }).required();

const query = 'query a($filter:String!){cotenancy_by_filter(filter:$filter) { id court_order{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } transferor{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } transferee{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_transfer khata{ id  khata_no  category{ code  category  name }  area  status }  initial_transferor_share  final_transferor_share  final_transferee_share }  }'

export const CotenancyCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'cotenancy_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("court_order", items[0]["court_order"]["id"])
form.setValue("transferor", items[0]["transferor"]["id"])
form.setValue("transferee", items[0]["transferee"]["id"])
form.setValue("date_of_transfer",items[0]["date_of_transfer"])
form.setValue("khata", items[0]["khata"]["id"])
form.setValue("initial_transferor_share",items[0]["initial_transferor_share"])
form.setValue("final_transferor_share",items[0]["final_transferor_share"])
form.setValue("final_transferee_share",items[0]["final_transferee_share"])

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
    graphqlFetch(createUpdateCotenancyMutation, data, 'create_update_cotenancy').then(({items,errors,success})=>{
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
<ReactHookFormInput  form={form} comp={defaultComponents["transferor"]} name={"transferor"} label={"Transferor"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["transferee"]} name={"transferee"} label={"Transferee"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["date_of_transfer"]} name={"date_of_transfer"} label={"Date Of Transfer"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["khata"]} name={"khata"} label={"Khata"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["initial_transferor_share"]} name={"initial_transferor_share"} label={"Initial Transferor Share"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["final_transferor_share"]} name={"final_transferor_share"} label={"Final Transferor Share"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["final_transferee_share"]} name={"final_transferee_share"} label={"Final Transferee Share"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
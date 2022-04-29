
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateAmaldaramadMutation = `mutation something($id:String, $claim:String!, $khatauni:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata_no:String!, $transferred_share:String!, $status_of_amaldaramad:String!){
    create_update_amaldaramad(id: $id, claim: $claim, khatauni: $khatauni, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata_no: $gata_no, transferred_share: $transferred_share, status_of_amaldaramad: $status_of_amaldaramad) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
date_of_transfer: yup.date().required(),
gata_no: yup.string().required(),
transferred_share: yup.number().required(),
status_of_amaldaramad: yup.number().integer().required(),
 }).required();

const query = 'query a($filter:String!){amaldaramad_by_filter(filter:$filter) { id claim{ id  court_order{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part }  type_of_claim  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status } transferor{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } transferee{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_transfer  gata_no  transferred_share  status_of_amaldaramad  status }  }'

export const AmaldaramadCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'amaldaramad_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("claim", items[0]["claim"]["id"])
form.setValue("khatauni", items[0]["khatauni"]["id"])
form.setValue("transferor", items[0]["transferor"]["id"])
form.setValue("transferee", items[0]["transferee"]["id"])
form.setValue("date_of_transfer",items[0]["date_of_transfer"])
form.setValue("gata_no",items[0]["gata_no"])
form.setValue("transferred_share",items[0]["transferred_share"])
form.setValue("status_of_amaldaramad",items[0]["status_of_amaldaramad"])

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
    graphqlFetch(createUpdateAmaldaramadMutation, data, 'create_update_amaldaramad').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["claim"]} name={"claim"} label={"Claim"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["khatauni"]} name={"khatauni"} label={"Khatauni"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["transferor"]} name={"transferor"} label={"Transferor"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["transferee"]} name={"transferee"} label={"Transferee"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["date_of_transfer"]} name={"date_of_transfer"} label={"Date Of Transfer"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["gata_no"]} name={"gata_no"} label={"Gata No"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["transferred_share"]} name={"transferred_share"} label={"Transferred Share"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["status_of_amaldaramad"]} name={"status_of_amaldaramad"} label={"Status Of Amaldaramad"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
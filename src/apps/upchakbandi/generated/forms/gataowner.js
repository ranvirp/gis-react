
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateGataOwnerMutation = `mutation something($id:String, $khatauni:String!, $date_of_ownership:String!, $gata:String!, $owner:String!, $owner_details:String!, $owned_share:String!, $owned_area:String!){
    create_update_gata_owner(id: $id, khatauni: $khatauni, date_of_ownership: $date_of_ownership, gata: $gata, owner: $owner, owner_details: $owner_details, owned_share: $owned_share, owned_area: $owned_area) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
gata: yup.string().required(),
owned_share: yup.number().required(),
owned_area: yup.number().required(),
 }).required();

const query = 'query a($filter:String!){gata_owner_by_filter(filter:$filter) { id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  date_of_ownership  gata owner{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  owner_details  owned_share  owned_area }  }'

export const GataOwnerCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'gata_owner_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("khatauni", items[0]["khatauni"]["id"])
form.setValue("date_of_ownership",items[0]["date_of_ownership"])
form.setValue("gata",items[0]["gata"])
form.setValue("owner", items[0]["owner"]["id"])
form.setValue("owner_details",items[0]["owner_details"])
form.setValue("owned_share",items[0]["owned_share"])
form.setValue("owned_area",items[0]["owned_area"])

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
    graphqlFetch(createUpdateGataOwnerMutation, data, 'create_update_gata_owner').then(({items,errors,success})=>{
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
<ReactHookFormInput  form={form} comp={defaultComponents["date_of_ownership"]} name={"date_of_ownership"} label={"Date Of Ownership"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["gata"]} name={"gata"} label={"Gata"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["owner"]} name={"owner"} label={"Owner"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["owner_details"]} name={"owner_details"} label={"Owner Details"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["owned_share"]} name={"owned_share"} label={"Owned Share"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["owned_area"]} name={"owned_area"} label={"Owned Area"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
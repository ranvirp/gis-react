
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateRevenueVillageMutation = `mutation something($vname:String!, $village_code_census:String, $vname_eng:String!, $pname:String!, $flg_chakbandi:String!, $flg_survey:String!, $pargana_code_new:String!, $tehsil_code:String!, $district_code:String!){
    create_update_revenue_village(vname: $vname, village_code_census: $village_code_census, vname_eng: $vname_eng, pname: $pname, flg_chakbandi: $flg_chakbandi, flg_survey: $flg_survey, pargana_code_new: $pargana_code_new, tehsil_code: $tehsil_code, district_code: $district_code) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
vname: yup.string().required(),
vname_eng: yup.string().required(),
pname: yup.string().required(),
flg_chakbandi: yup.string().required(),
flg_survey: yup.string().required(),
pargana_code_new: yup.string().required(),
 }).required();

const query = 'query a($filter:String!){revenue_village_by_filter(filter:$filter) { vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng } district_code{ dname  district_code_census  dname_eng } }  }'

export const RevenueVillageCreateUpdateForm = ({,...props})=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'revenue_village_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("vname",items[0]["vname"])
form.setValue("vname_eng",items[0]["vname_eng"])
form.setValue("pname",items[0]["pname"])
form.setValue("flg_chakbandi",items[0]["flg_chakbandi"])
form.setValue("flg_survey",items[0]["flg_survey"])
form.setValue("pargana_code_new",items[0]["pargana_code_new"])
form.setValue("tehsil_code", items[0]["tehsil_code"]["tehsil_code_census"])
form.setValue("district_code", items[0]["district_code"]["district_code_census"])

       setId(items[0]['village_code_census'])
      
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
    graphqlFetch(createUpdateRevenueVillageMutation, data, 'create_update_revenue_village').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["vname"]} name={"vname"} label={"Vname"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["vname_eng"]} name={"vname_eng"} label={"Vname Eng"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["pname"]} name={"pname"} label={"Pname"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["flg_chakbandi"]} name={"flg_chakbandi"} label={"Flg Chakbandi"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["flg_survey"]} name={"flg_survey"} label={"Flg Survey"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["pargana_code_new"]} name={"pargana_code_new"} label={"Pargana Code New"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["tehsil_code"]} name={"tehsil_code"} label={"Tehsil Code"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["district_code"]} name={"district_code"} label={"District Code"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
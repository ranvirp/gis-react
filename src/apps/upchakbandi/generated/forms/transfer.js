
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateTransferMutation = `mutation something($id:String, $court_order:String!, $transferor:String!, $transferee:String!, $date_of_deed:String!, $type_of_deed:String!, $gata:String!, $total_title_area:String!, $sold_area:String!, $sold_share:String!){
    create_update_transfer(id: $id, court_order: $court_order, transferor: $transferor, transferee: $transferee, date_of_deed: $date_of_deed, type_of_deed: $type_of_deed, gata: $gata, total_title_area: $total_title_area, sold_area: $sold_area, sold_share: $sold_share) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
date_of_deed: yup.date().required(),
type_of_deed: yup.string().required(),
gata: yup.string().required(),
total_title_area: yup.number().required(),
sold_area: yup.number().required(),
sold_share: yup.number().required(),
 }).required();

const query = 'query a($filter:String!){transfer_by_filter(filter:$filter) { id court_order{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } transferor{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } transferee{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_deed  type_of_deed  gata  total_title_area  sold_area  sold_share }  }'

export const TransferCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'transfer_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("court_order", items[0]["court_order"]["id"])
form.setValue("transferor", items[0]["transferor"]["id"])
form.setValue("transferee", items[0]["transferee"]["id"])
form.setValue("date_of_deed",items[0]["date_of_deed"])
form.setValue("type_of_deed",items[0]["type_of_deed"])
form.setValue("gata",items[0]["gata"])
form.setValue("total_title_area",items[0]["total_title_area"])
form.setValue("sold_area",items[0]["sold_area"])
form.setValue("sold_share",items[0]["sold_share"])

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
    graphqlFetch(createUpdateTransferMutation, data, 'create_update_transfer').then(({items,errors,success})=>{
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
<ReactHookFormInput  form={form} comp={defaultComponents["date_of_deed"]} name={"date_of_deed"} label={"Date Of Deed"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["type_of_deed"]} name={"type_of_deed"} label={"Type Of Deed"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["gata"]} name={"gata"} label={"Gata"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["total_title_area"]} name={"total_title_area"} label={"Total Title Area"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["sold_area"]} name={"sold_area"} label={"Sold Area"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["sold_share"]} name={"sold_share"} label={"Sold Share"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
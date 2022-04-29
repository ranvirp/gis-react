
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateExchangeMutation = `mutation something($id:String, $court_order:String!, $partyA:String!, $partyB:String!, $date_of_exchange:String!, $date_of_order:String!, $gataA:String!, $gataB:String!, $exchanged_paisa:String!, $exchange_ratioA:String!, $exchange_ratioB:String!){
    create_update_exchange(id: $id, court_order: $court_order, partyA: $partyA, partyB: $partyB, date_of_exchange: $date_of_exchange, date_of_order: $date_of_order, gataA: $gataA, gataB: $gataB, exchanged_paisa: $exchanged_paisa, exchange_ratioA: $exchange_ratioA, exchange_ratioB: $exchange_ratioB) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
date_of_exchange: yup.date().required(),
date_of_order: yup.date().required(),
gataA: yup.string().required(),
gataB: yup.string().required(),
exchanged_paisa: yup.number().required(),
exchange_ratioA: yup.number().required(),
exchange_ratioB: yup.number().required(),
 }).required();

const query = 'query a($filter:String!){exchange_by_filter(filter:$filter) { id court_order{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } partyA{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } partyB{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_exchange  date_of_order  gataA  gataB  exchanged_paisa  exchange_ratioA  exchange_ratioB }  }'

export const ExchangeCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'exchange_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("court_order", items[0]["court_order"]["id"])
form.setValue("partyA", items[0]["partyA"]["id"])
form.setValue("partyB", items[0]["partyB"]["id"])
form.setValue("date_of_exchange",items[0]["date_of_exchange"])
form.setValue("date_of_order",items[0]["date_of_order"])
form.setValue("gataA",items[0]["gataA"])
form.setValue("gataB",items[0]["gataB"])
form.setValue("exchanged_paisa",items[0]["exchanged_paisa"])
form.setValue("exchange_ratioA",items[0]["exchange_ratioA"])
form.setValue("exchange_ratioB",items[0]["exchange_ratioB"])

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
    graphqlFetch(createUpdateExchangeMutation, data, 'create_update_exchange').then(({items,errors,success})=>{
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
<ReactHookFormInput  form={form} comp={defaultComponents["partyA"]} name={"partyA"} label={"Partya"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["partyB"]} name={"partyB"} label={"Partyb"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["date_of_exchange"]} name={"date_of_exchange"} label={"Date Of Exchange"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["date_of_order"]} name={"date_of_order"} label={"Date Of Order"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["gataA"]} name={"gataA"} label={"Gataa"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["gataB"]} name={"gataB"} label={"Gatab"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["exchanged_paisa"]} name={"exchanged_paisa"} label={"Exchanged Paisa"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["exchange_ratioA"]} name={"exchange_ratioA"} label={"Exchange Ratioa"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["exchange_ratioB"]} name={"exchange_ratioB"} label={"Exchange Ratiob"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
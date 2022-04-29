
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateCourtOrderMutation = `mutation something($id:String, $chakbandi:String!, $case_no:String!, $date_of_order:String!, $operative_part:String!){
    create_update_court_order(id: $id, chakbandi: $chakbandi, case_no: $case_no, date_of_order: $date_of_order, operative_part: $operative_part) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
case_no: yup.string().required(),
date_of_order: yup.date().required(),
 }).required();

const query = 'query a($filter:String!){court_order_by_filter(filter:$filter) { id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part }  }'

export const CourtOrderCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'court_order_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("chakbandi", items[0]["chakbandi"]["id"])
form.setValue("case_no",items[0]["case_no"])
form.setValue("date_of_order",items[0]["date_of_order"])
form.setValue("operative_part",items[0]["operative_part"])

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
    graphqlFetch(createUpdateCourtOrderMutation, data, 'create_update_court_order').then(({items,errors,success})=>{
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
<ReactHookFormInput  form={form} comp={defaultComponents["case_no"]} name={"case_no"} label={"Case No"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["date_of_order"]} name={"date_of_order"} label={"Date Of Order"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["operative_part"]} name={"operative_part"} label={"Operative Part"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
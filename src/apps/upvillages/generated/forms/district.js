
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateDistrictMutation = `mutation something($dname:String!, $district_code_census:String, $dname_eng:String!){
    create_update_district(dname: $dname, district_code_census: $district_code_census, dname_eng: $dname_eng) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
dname: yup.string().required(),
dname_eng: yup.string().required(),
 }).required();

const query = 'query a($filter:String!){district_by_filter(filter:$filter) { dname  district_code_census  dname_eng }  }'

export const DistrictCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'district_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("dname",items[0]["dname"])
form.setValue("dname_eng",items[0]["dname_eng"])

       setId(items[0]['district_code_census'])
      
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
    graphqlFetch(createUpdateDistrictMutation, data, 'create_update_district').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["dname"]} name={"dname"} label={"Dname"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["dname_eng"]} name={"dname_eng"} label={"Dname Eng"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    

import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateKhataMutation = `mutation something($id:String, $khatauni:String!, $khata_no:String!, $category:String!, $area:String!){
    create_update_khata(id: $id, khatauni: $khatauni, khata_no: $khata_no, category: $category, area: $area) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
khata_no: yup.number().integer().required(),
area: yup.number().required(),
 }).required();

const query = 'query a($filter:String!){khata_by_filter(filter:$filter) { id  khata_no category{ code  category  name }  area  status }  }'

export const KhataCreateUpdateForm = ({khatauni_id,...props})=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  data.khatauni_id=khatauni_id
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'khata_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("khata_no",items[0]["khata_no"])
form.setValue("category", items[0]["category"]["code"])
form.setValue("area",items[0]["area"])

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
    data.khatauni=khatauni_id
Object.keys(data).map(value=>{
     data[value] = String(data[value])
 })
    graphqlFetch(createUpdateKhataMutation, data, 'create_update_khata').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["khata_no"]} name={"khata_no"} label={"Khata No"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["category"]} name={"category"} label={"Category"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["area"]} name={"area"} label={"Area"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
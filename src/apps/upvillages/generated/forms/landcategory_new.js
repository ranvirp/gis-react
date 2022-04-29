
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateLandCategoryMutation = `mutation something($code:String, $category:String!, $name:String!){
    create_update_land_category(code: $code, category: $category, name: $name) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
category: yup.string().required(),
name: yup.string().required(),
 }).required();

const query = 'query a($filter:String!){land_category_by_filter(filter:$filter) { code  category  name }  }'

export const LandCategoryCreateUpdateForm = ({,...props})=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'land_category_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("category",items[0]["category"])
form.setValue("name",items[0]["name"])

       setId(items[0]['code'])
      
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
    graphqlFetch(createUpdateLandCategoryMutation, data, 'create_update_land_category').then(({items,errors,success})=>{
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
                    <ReactHookFormInput  form={form} comp={defaultComponents["category"]} name={"category"} label={"Category"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["name"]} name={"name"} label={"Name"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    
import React from "react";
import {FormField} from "../../../../components/forms/GenericCreateForm";
import {KhatedarCodeForm} from "./KhatedarCode";
import {Box, Stack, TextField} from "@mui/material";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {RelativesDropdown} from "../../../common/components/forms/relatives";
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import Button from "@mui/material/Button";
import {GendersDropdown} from "../../../common/components/forms/genders";
export const updateFarmerMutation = `mutation something($id:String!, $chakbandi:String!, $khatauni:String!, $unique_id:String!, $khatedar_code:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $address:String!){
    custom_update_farmer(id: $id, chakbandi: $chakbandi, khatauni: $khatauni, unique_id: $unique_id, khatedar_code: $khatedar_code, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, address: $address) {
        farmer {id chakbandi khatauni unique_id khatedar_code mobile_no name relationship relative_name year_of_birth gender address }
      ok
      errormessage
      
    }
    }`

export const createFarmerMutation = `mutation something($chakbandi:String!, $khatauni:String!, $unique_id:String!, $khatedar_code:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $address:String!){
        custom_create_farmer(chakbandi: $chakbandi, khatauni: $khatauni, unique_id: $unique_id, khatedar_code: $khatedar_code, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, address: $address) {
            farmer {id chakbandi khatauni unique_id khatedar_code mobile_no name relationship relative_name year_of_birth gender address }
          ok
          errormessage

        }
        }`
function devanagriTest(str)
{
    for (var i = 0; i < str.length; i++) {
        let hex = str.charCodeAt(i).toString(16).toUpperCase()
        //console.log(hex)
        if (hex === '20') continue
        if (hex < '900' || hex > '97F' ) return false

    }
    return true
}
function changeUnicodeNumber(e)
{
    let str = e.target.value
   // console.log(str)
    let out = ''

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 2406 && str.charCodeAt(i)<=2415){
            out += String.fromCharCode(str.charCodeAt(i) - 2406 + 48)
        } else {
            out += str.charAt(i)
        }

    }
    e.target.value = out
}
const yupSchema = yup.object({
    khatedar_code: yup.string().required(),
    mobile_no: yup.string(),
    name: yup.string().required().test(
        'hindiunicodetest',
        'Please enter name in Devanagri only',
        devanagriTest

    ),
    relationship: yup.string().required(),
    relative_name: yup.string().required().test(
        'hindiunicodetest',
        'Please enter name in Devanagri only',
        devanagriTest

    ),
    year_of_birth: yup.number().integer().required().test(
        'reasonableagetest',
        'Age should be more than 0 and less than 110',
        function(value)
        {
            let d = new Date()
            let age = d.getFullYear() - value
            return  age < 110 && age > 0
        }
    ),
    gender: yup.string().required(),
    address: yup.string().required(),
}).required();
export function FarmerDataEntryForm({chakbandi_id, khatauni_id, ...props})
{
    const [outcome,setOutcome] = React.useState('')
    const form = useForm({resolver:yupResolver(yupSchema)})
    function onSubmit(data)
    {
         let query = createFarmerMutation
         let queryName = 'custom_create_farmer'
         data.chakbandi = chakbandi_id
         data.khatauni = khatauni_id
         data.year_of_birth = String(data.year_of_birth)

         if (data.id != ''){ query = updateFarmerMutation; queryName = 'custom_update_farmer' } else {delete data.id}
         console.log(data)
         const result = graphqlFetch(query,data,queryName)
         result.then(value=>{
             console.log(value)
             if(value.errors.length > 0) setOutcome('errors' + value.errors[0].message)
             else setOutcome("Success")
             //
         })
    }
    return(
        <Box>
        <form onSubmit={form.handleSubmit(onSubmit)}>
<Stack>
               <Box sx={{backgroundColor:"#E2E2E2", height:"40px", verticalAlign:"centre"}}> {outcome}</Box>
            <ReactHookFormInput form={form} name="id" label="Id" comp={<input type={"hidden"}/>}/>,
            <ReactHookFormInput form={form} required={true} name="khatedar_code" label="खातेदार कोड " comp={<KhatedarCodeForm chakbandi_id={chakbandi_id} khatauni_id={khatauni_id}/>} />
            <ReactHookFormInput form={form} required={true} name="name" label="नाम"/>
            <ReactHookFormInput form={form} required={true} name="relationship" label="सम्बंध" comp={<RelativesDropdown/>}/>
            <ReactHookFormInput form={form} required={true} name="relative_name" label="सम्बन्धी का नाम"/>
            <ReactHookFormInput form={form} required={true} name="year_of_birth" label="जन्म का वर्ष" comp={<TextField />} onChange={changeUnicodeNumber} />
            <ReactHookFormInput form={form} required={true} name="gender" label="लिंग" comp={<GendersDropdown/>}/>
            <ReactHookFormInput form={form}  name="mobile_no" label="मोबाइल नम्बर" onChange={changeUnicodeNumber}/>
            <ReactHookFormInput form={form} required={true} name="address" label="पता"/>
            <ReactHookFormInput form={form} required={true} name="unique_id" label="आधार संख्या" comp={<input type={"hidden"} value={"00"}/>}/>
            <Button type={"submit"}>Submit</Button>
</Stack>
        </form>
        </Box>
    )
}
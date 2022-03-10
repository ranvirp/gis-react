
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
import {KhatedarCodeForm} from "./KhatedarCode";
import {TextField} from "@mui/material";
export const updateFarmerMutation = `mutation something($id:String!, $chakbandi:String!, $khatauni:String!, $unique_id:String!, $khatedar_code:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $address:String!){
    update_farmer(id: $id, chakbandi: $chakbandi, khatauni: $khatauni, unique_id: $unique_id, khatedar_code: $khatedar_code, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, address: $address) {
        farmer {id chakbandi khatauni unique_id khatedar_code mobile_no name relationship relative_name year_of_birth gender address }
      ok
      errormessage
      
    }
    }`
  
export const createFarmerMutation = `mutation something($chakbandi:String!, $khatauni:String!, $unique_id:String!, $khatedar_code:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $address:String!){
        create_farmer(chakbandi: $chakbandi, khatauni: $khatauni, unique_id: $unique_id, khatedar_code: $khatedar_code, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, address: $address) {
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
   console.log(str)
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
const formFields = [FormField("chakbandi","Chakbandi"),FormField("khatauni","Khatauni"),FormField("unique_id","Unique Id"),FormField("khatedar_code","Khatedar Code"),FormField("mobile_no","Mobile No"),FormField("name","Name"),FormField("relationship","Relationship"),FormField("relative_name","Relative Name"),FormField("year_of_birth","Year Of Birth"),FormField("gender","Gender"),FormField("address","Address")]
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
year_of_birth: yup.number().integer().required(),
gender: yup.string().required(),
address: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createFarmerMutation)
export const FarmerCreateForm = <GenericCreateUpdateForm title="किसान डेटा एंट्री फ़ॉर्म" formObject={formObject}/>
export const FarmerCreateUpdateForm = ({chakbandi_id,khatauni_id,...props})=> {
   const variablesFn = (value) => {
      value.chakbandi_id = chakbandi_id
      value.khatauni_id = khatauni_id
   }
   const formFields = [FormField("id","Id"),FormField("khatedar_code","खातेदार कोड ",<KhatedarCodeForm chakbandi_id={chakbandi_id} khatauni_id={khatauni_id}/> ),FormField("name","नाम",null,4),FormField("relationship","सम्बंध",null,4),FormField("relative_name","सम्बन्धी का नाम",null,4),
      FormField("year_of_birth","जन्म का वर्ष",<TextField onChange={changeUnicodeNumber}/>,4),FormField("gender","लिंग",null,4),
      FormField("mobile_no","मोबाइल नम्बर",null,4),FormField("address","पत्ता",null,12),FormField("unique_id","आधार संख्या",<input type={"hidden"} value={"00"}/>)]
   const mutation = props.edit? updateFarmerMutation:createFarmerMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, variablesFn, props.debug)
   //const myQuery = `query a{all_farmer { id chakbandi_id khatauni_id unique_id khatedar_code mobile_no name relationship relative_name year_of_birth gender address status }}`
   

   return (

   <GenericCreateUpdateForm title={props.pk?"अद्यतन करें ":"नयी एंट्री करें " + "-किसान का विवरण"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
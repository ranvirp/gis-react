
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
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

const formFields = [FormField("chakbandi","Chakbandi"),FormField("khatauni","Khatauni"),FormField("unique_id","Unique Id"),FormField("khatedar_code","Khatedar Code"),FormField("mobile_no","Mobile No"),FormField("name","Name"),FormField("relationship","Relationship"),FormField("relative_name","Relative Name"),FormField("year_of_birth","Year Of Birth"),FormField("gender","Gender"),FormField("address","Address")]
const yupSchema = yup.object({
unique_id: yup.string().required(),
khatedar_code: yup.string().required(),
mobile_no: yup.string().required(),
name: yup.string().required(),
relationship: yup.string().required(),
relative_name: yup.string().required(),
year_of_birth: yup.number().integer().required(),
gender: yup.string().required(),
address: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createFarmerMutation)
export const FarmerCreateForm = <GenericCreateUpdateForm title="Create Farmer" formObject={formObject}/>
export const FarmerCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("chakbandi","Chakbandi"),FormField("khatauni","Khatauni"),FormField("unique_id","Unique Id"),FormField("khatedar_code","Khatedar Code"),FormField("mobile_no","Mobile No"),FormField("name","Name"),FormField("relationship","Relationship"),FormField("relative_name","Relative Name"),FormField("year_of_birth","Year Of Birth"),FormField("gender","Gender"),FormField("address","Address")]
   const mutation = props.edit? updateFarmerMutation:createFarmerMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_farmer { id chakbandi_id khatauni_id unique_id khatedar_code mobile_no name relationship relative_name year_of_birth gender address status }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Farmer"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    

import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateFarmerMutation = `mutation something($id:String!, $khatauni:String!, $unique_id:String!, $khatedar_code:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $majra:String!){
    update_farmer(id: $id, khatauni: $khatauni, unique_id: $unique_id, khatedar_code: $khatedar_code, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, majra: $majra) {
        farmer {id khatauni unique_id khatedar_code mobile_no name relationship relative_name year_of_birth gender majra }
      ok
      errormessage
      
    }
    }`
  
export const createFarmerMutation = `mutation something($khatauni:String!, $unique_id:String!, $khatedar_code:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $majra:String!){
        create_farmer(khatauni: $khatauni, unique_id: $unique_id, khatedar_code: $khatedar_code, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, majra: $majra) {
            farmer {id khatauni unique_id khatedar_code mobile_no name relationship relative_name year_of_birth gender majra }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("unique_id","Unique Id"),FormField("khatedar_code","Khatedar Code"),FormField("mobile_no","Mobile No"),FormField("name","Name"),FormField("relationship","Relationship"),FormField("relative_name","Relative Name"),FormField("year_of_birth","Year Of Birth"),FormField("gender","Gender"),FormField("majra","Majra")]
const yupSchema = yup.object({
unique_id: yup.string().required(),
khatedar_code: yup.string().required(),
mobile_no: yup.string().required(),
name: yup.string().required(),
relationship: yup.string().required(),
relative_name: yup.string().required(),
year_of_birth: yup.number().integer().required(),
gender: yup.string().required(),
majra: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createFarmerMutation)
export const FarmerCreateForm = <GenericCreateUpdateForm title="Create Farmer" formObject={formObject}/>
export const FarmerCreateUpdateForm = (props)=> {
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("unique_id","Unique Id"),FormField("khatedar_code","Khatedar Code"),FormField("mobile_no","Mobile No"),FormField("name","Name"),FormField("relationship","Relationship"),FormField("relative_name","Relative Name"),FormField("year_of_birth","Year Of Birth"),FormField("gender","Gender"),FormField("majra","Majra")]
   const mutation = props.pk? updateFarmerMutation:createFarmerMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "Farmer"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    
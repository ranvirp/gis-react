
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateOfficerMutation = `mutation something($id:String!, $name:String!, $name_eng:String!, $mobile_no:String!, $unique_id:String!){
    update_officer(id: $id, name: $name, name_eng: $name_eng, mobile_no: $mobile_no, unique_id: $unique_id) {
        officer {id name name_eng mobile_no unique_id }
      ok
      errormessage
      
    }
    }`
  
export const createOfficerMutation = `mutation something($name:String!, $name_eng:String!, $mobile_no:String!, $unique_id:String!){
        create_officer(name: $name, name_eng: $name_eng, mobile_no: $mobile_no, unique_id: $unique_id) {
            officer {id name name_eng mobile_no unique_id }
          ok
          errormessage

        }
        }`

const formFields = [FormField("name","Name"),FormField("name_eng","Name Eng"),FormField("mobile_no","Mobile No"),FormField("unique_id","Unique Id")]
const yupSchema = yup.object({
name: yup.string().required(),
name_eng: yup.string().required(),
mobile_no: yup.string().required(),
unique_id: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createOfficerMutation)
export const OfficerCreateForm = <GenericCreateUpdateForm title="Create Officer" formObject={formObject}/>
export const OfficerCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("name","Name"),FormField("name_eng","Name Eng"),FormField("mobile_no","Mobile No"),FormField("unique_id","Unique Id")]
   const mutation = props.edit? updateOfficerMutation:createOfficerMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_officer { id name name_eng mobile_no unique_id }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Officer"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
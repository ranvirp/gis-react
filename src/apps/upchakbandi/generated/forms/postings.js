
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updatePostingsMutation = `mutation something($id:String!, $officer:String!, $designation:String!, $location_type:String!, $location_code:String!, $charge_from:String!, $charge_to:String!){
    update_postings(id: $id, officer: $officer, designation: $designation, location_type: $location_type, location_code: $location_code, charge_from: $charge_from, charge_to: $charge_to) {
        postings {id officer designation location_type location_code charge_from charge_to }
      ok
      errormessage
      
    }
    }`
  
export const createPostingsMutation = `mutation something($officer:String!, $designation:String!, $location_type:String!, $location_code:String!, $charge_from:String!, $charge_to:String!){
        create_postings(officer: $officer, designation: $designation, location_type: $location_type, location_code: $location_code, charge_from: $charge_from, charge_to: $charge_to) {
            postings {id officer designation location_type location_code charge_from charge_to }
          ok
          errormessage

        }
        }`

const formFields = [FormField("officer","Officer"),FormField("designation","Designation"),FormField("location_type","Location Type"),FormField("location_code","Location Code"),FormField("charge_from","Charge From"),FormField("charge_to","Charge To")]
const yupSchema = yup.object({
designation: yup.string().required(),
location_type: yup.string().required(),
location_code: yup.string().required(),
charge_from: yup.date().required(),
charge_to: yup.date().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createPostingsMutation)
export const PostingsCreateForm = <GenericCreateUpdateForm title="Create Postings" formObject={formObject}/>
export const PostingsCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("officer","Officer"),FormField("designation","Designation"),FormField("location_type","Location Type"),FormField("location_code","Location Code"),FormField("charge_from","Charge From"),FormField("charge_to","Charge To")]
   const mutation = props.edit? updatePostingsMutation:createPostingsMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_postings { id officer_id designation location_type location_code charge_from charge_to }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Postings"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
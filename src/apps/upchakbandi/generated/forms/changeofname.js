
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateChangeOfNameMutation = `mutation something($id:String!, $claim:String!, $khatedar:String!, $new_name:String!, $effective_date:String!){
    update_change_of_name(id: $id, claim: $claim, khatedar: $khatedar, new_name: $new_name, effective_date: $effective_date) {
        change_of_name {id claim khatedar new_name effective_date }
      ok
      errormessage
      
    }
    }`
  
export const createChangeOfNameMutation = `mutation something($claim:String!, $khatedar:String!, $new_name:String!, $effective_date:String!){
        create_change_of_name(claim: $claim, khatedar: $khatedar, new_name: $new_name, effective_date: $effective_date) {
            change_of_name {id claim khatedar new_name effective_date }
          ok
          errormessage

        }
        }`

const formFields = [FormField("claim","Claim"),FormField("khatedar","Khatedar"),FormField("new_name","New Name"),FormField("effective_date","Effective Date")]
const yupSchema = yup.object({
new_name: yup.string().required(),
effective_date: yup.date().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createChangeOfNameMutation)
export const ChangeOfNameCreateForm = <GenericCreateUpdateForm title="Create Change Of Name" formObject={formObject}/>
export const ChangeOfNameCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("claim","Claim"),FormField("khatedar","Khatedar"),FormField("new_name","New Name"),FormField("effective_date","Effective Date")]
   const mutation = props.edit? updateChangeOfNameMutation:createChangeOfNameMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_change_of_name { id claim_id khatedar_id new_name effective_date }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Change Of Name"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    

import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateClaimStatusMutation = `mutation something($id:String!, $claim:String!, $effective_date:String!, $latest_order:String!){
    update_claim_status(id: $id, claim: $claim, effective_date: $effective_date, latest_order: $latest_order) {
        claim_status {id claim effective_date latest_order }
      ok
      errormessage
      
    }
    }`
  
export const createClaimStatusMutation = `mutation something($claim:String!, $effective_date:String!, $latest_order:String!){
        create_claim_status(claim: $claim, effective_date: $effective_date, latest_order: $latest_order) {
            claim_status {id claim effective_date latest_order }
          ok
          errormessage

        }
        }`

const formFields = [FormField("claim","Claim"),FormField("effective_date","Effective Date"),FormField("latest_order","Latest Order")]
const yupSchema = yup.object({
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createClaimStatusMutation)
export const ClaimStatusCreateForm = <GenericCreateUpdateForm title="Create Claim Status" formObject={formObject}/>
export const ClaimStatusCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("claim","Claim"),FormField("effective_date","Effective Date"),FormField("latest_order","Latest Order")]
   const mutation = props.edit? updateClaimStatusMutation:createClaimStatusMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_claim_status { id claim_id status effective_date latest_order_id }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Claim Status"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
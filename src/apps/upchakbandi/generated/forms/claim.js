
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateClaimMutation = `mutation something($id:String!, $petition:String!, $claimant:String!, $date_of_claim:String!, $type_of_claim:String!, $latest_order:String!){
    update_claim(id: $id, petition: $petition, claimant: $claimant, date_of_claim: $date_of_claim, type_of_claim: $type_of_claim, latest_order: $latest_order) {
        claim {id petition claimant date_of_claim type_of_claim latest_order }
      ok
      errormessage
      
    }
    }`
  
export const createClaimMutation = `mutation something($petition:String!, $claimant:String!, $date_of_claim:String!, $type_of_claim:String!, $latest_order:String!){
        create_claim(petition: $petition, claimant: $claimant, date_of_claim: $date_of_claim, type_of_claim: $type_of_claim, latest_order: $latest_order) {
            claim {id petition claimant date_of_claim type_of_claim latest_order }
          ok
          errormessage

        }
        }`

const formFields = [FormField("petition","Petition"),FormField("claimant","Claimant"),FormField("date_of_claim","Date Of Claim"),FormField("type_of_claim","Type Of Claim"),FormField("latest_order","Latest Order")]
const yupSchema = yup.object({
date_of_claim: yup.date().required(),
type_of_claim: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createClaimMutation)
export const ClaimCreateForm = <GenericCreateUpdateForm title="Create Claim" formObject={formObject}/>
export const ClaimCreateUpdateForm = (props)=> {
   const formFields = [FormField("id","Id"),FormField("petition","Petition"),FormField("claimant","Claimant"),FormField("date_of_claim","Date Of Claim"),FormField("type_of_claim","Type Of Claim"),FormField("latest_order","Latest Order")]
   const mutation = props.pk? updateClaimMutation:createClaimMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "Claim"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    

import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateClaimMutation = `mutation something($id:String!, $petition:String!, $date_of_claim:String!, $type_of_claim:String!){
    update_claim(id: $id, petition: $petition, date_of_claim: $date_of_claim, type_of_claim: $type_of_claim) {
        claim {id petition date_of_claim type_of_claim }
      ok
      errormessage
      
    }
    }`
  
export const createClaimMutation = `mutation something($petition:String!, $date_of_claim:String!, $type_of_claim:String!){
        create_claim(petition: $petition, date_of_claim: $date_of_claim, type_of_claim: $type_of_claim) {
            claim {id petition date_of_claim type_of_claim }
          ok
          errormessage

        }
        }`

const formFields = [FormField("petition","Petition"),FormField("date_of_claim","Date Of Claim"),FormField("type_of_claim","Type Of Claim")]
const yupSchema = yup.object({
date_of_claim: yup.date().required(),
type_of_claim: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createClaimMutation)
export const ClaimCreateForm = <GenericCreateUpdateForm title="Create Claim" formObject={formObject}/>
export const ClaimCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("petition","Petition"),FormField("date_of_claim","Date Of Claim"),FormField("type_of_claim","Type Of Claim")]
   const mutation = props.edit? updateClaimMutation:createClaimMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_claim { id petition_id date_of_claim type_of_claim status }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Claim"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
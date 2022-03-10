
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateClaimMutation = `mutation something($id:String!, $court_order:String!, $type_of_claim:String!){
    update_claim(id: $id, court_order: $court_order, type_of_claim: $type_of_claim) {
        claim {id court_order type_of_claim }
      ok
      errormessage
      
    }
    }`
  
export const createClaimMutation = `mutation something($court_order:String!, $type_of_claim:String!){
        create_claim(court_order: $court_order, type_of_claim: $type_of_claim) {
            claim {id court_order type_of_claim }
          ok
          errormessage

        }
        }`

const formFields = [FormField("court_order","Court Order"),FormField("type_of_claim","Type Of Claim")]
const yupSchema = yup.object({
type_of_claim: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createClaimMutation)
export const ClaimCreateForm = <GenericCreateUpdateForm title="Create Claim" formObject={formObject}/>
export const ClaimCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("court_order","Court Order"),FormField("type_of_claim","Type Of Claim")]
   const mutation = props.edit? updateClaimMutation:createClaimMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_claim { id court_order_id type_of_claim status }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Claim"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
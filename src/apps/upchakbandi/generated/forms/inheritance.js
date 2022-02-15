
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateInheritanceMutation = `mutation something($id:String!, $claim:String!, $dead_khatedar:String!, $date_of_death:String!, $legal_heir:String!, $share:String!){
    update_inheritance(id: $id, claim: $claim, dead_khatedar: $dead_khatedar, date_of_death: $date_of_death, legal_heir: $legal_heir, share: $share) {
        inheritance {id claim dead_khatedar date_of_death legal_heir share }
      ok
      errormessage
      
    }
    }`
  
export const createInheritanceMutation = `mutation something($claim:String!, $dead_khatedar:String!, $date_of_death:String!, $legal_heir:String!, $share:String!){
        create_inheritance(claim: $claim, dead_khatedar: $dead_khatedar, date_of_death: $date_of_death, legal_heir: $legal_heir, share: $share) {
            inheritance {id claim dead_khatedar date_of_death legal_heir share }
          ok
          errormessage

        }
        }`

const formFields = [FormField("claim","Claim"),FormField("dead_khatedar","Dead Khatedar"),FormField("date_of_death","Date Of Death"),FormField("legal_heir","Legal Heir"),FormField("share","Share")]
const yupSchema = yup.object({
date_of_death: yup.date().required(),
share: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createInheritanceMutation)
export const InheritanceCreateForm = <GenericCreateUpdateForm title="Create Inheritance" formObject={formObject}/>
export const InheritanceCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("claim","Claim"),FormField("dead_khatedar","Dead Khatedar"),FormField("date_of_death","Date Of Death"),FormField("legal_heir","Legal Heir"),FormField("share","Share")]
   const mutation = props.edit? updateInheritanceMutation:createInheritanceMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_inheritance { id claim_id dead_khatedar_id date_of_death legal_heir_id share }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Inheritance"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
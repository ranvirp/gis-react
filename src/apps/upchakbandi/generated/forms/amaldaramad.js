
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateAmaldaramadMutation = `mutation something($id:String!, $claim:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $total_title_area:String!, $transferred_area:String!, $transferred_share:String!, $status_of_amaldaramad:String!){
    update_amaldaramad(id: $id, claim: $claim, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, total_title_area: $total_title_area, transferred_area: $transferred_area, transferred_share: $transferred_share, status_of_amaldaramad: $status_of_amaldaramad) {
        amaldaramad {id claim transferor transferee date_of_transfer gata total_title_area transferred_area transferred_share status_of_amaldaramad }
      ok
      errormessage
      
    }
    }`
  
export const createAmaldaramadMutation = `mutation something($claim:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $total_title_area:String!, $transferred_area:String!, $transferred_share:String!, $status_of_amaldaramad:String!){
        create_amaldaramad(claim: $claim, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, total_title_area: $total_title_area, transferred_area: $transferred_area, transferred_share: $transferred_share, status_of_amaldaramad: $status_of_amaldaramad) {
            amaldaramad {id claim transferor transferee date_of_transfer gata total_title_area transferred_area transferred_share status_of_amaldaramad }
          ok
          errormessage

        }
        }`

const formFields = [FormField("claim","Claim"),FormField("transferor","Transferor"),FormField("transferee","Transferee"),FormField("date_of_transfer","Date Of Transfer"),FormField("gata","Gata"),FormField("total_title_area","Total Title Area"),FormField("transferred_area","Transferred Area"),FormField("transferred_share","Transferred Share"),FormField("status_of_amaldaramad","Status Of Amaldaramad")]
const yupSchema = yup.object({
date_of_transfer: yup.date().required(),
gata: yup.string().required(),
total_title_area: yup.number().required(),
transferred_area: yup.number().required(),
transferred_share: yup.number().required(),
status_of_amaldaramad: yup.number().integer().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createAmaldaramadMutation)
export const AmaldaramadCreateForm = <GenericCreateUpdateForm title="Create Amaldaramad" formObject={formObject}/>
export const AmaldaramadCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("claim","Claim"),FormField("transferor","Transferor"),FormField("transferee","Transferee"),FormField("date_of_transfer","Date Of Transfer"),FormField("gata","Gata"),FormField("total_title_area","Total Title Area"),FormField("transferred_area","Transferred Area"),FormField("transferred_share","Transferred Share"),FormField("status_of_amaldaramad","Status Of Amaldaramad")]
   const mutation = props.edit? updateAmaldaramadMutation:createAmaldaramadMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_amaldaramad { id claim_id transferor_id transferee_id date_of_transfer gata total_title_area transferred_area transferred_share status_of_amaldaramad status }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Amaldaramad"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    

import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateAmaldaramadMutation = `mutation something($id:String!, $claim:String!, $order:String!, $date_of_order:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $total_title_area:String!, $transferred_area:String!, $transferred_share:String!, $status_of_amaldaramad:String!){
    update_amaldaramad(id: $id, claim: $claim, order: $order, date_of_order: $date_of_order, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, total_title_area: $total_title_area, transferred_area: $transferred_area, transferred_share: $transferred_share, status_of_amaldaramad: $status_of_amaldaramad) {
        amaldaramad {id claim order date_of_order transferor transferee date_of_transfer gata total_title_area transferred_area transferred_share status_of_amaldaramad }
      ok
      errormessage
      
    }
    }`
  
export const createAmaldaramadMutation = `mutation something($claim:String!, $order:String!, $date_of_order:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $total_title_area:String!, $transferred_area:String!, $transferred_share:String!, $status_of_amaldaramad:String!){
        create_amaldaramad(claim: $claim, order: $order, date_of_order: $date_of_order, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, total_title_area: $total_title_area, transferred_area: $transferred_area, transferred_share: $transferred_share, status_of_amaldaramad: $status_of_amaldaramad) {
            amaldaramad {id claim order date_of_order transferor transferee date_of_transfer gata total_title_area transferred_area transferred_share status_of_amaldaramad }
          ok
          errormessage

        }
        }`

const formFields = [FormField("claim","Claim"),FormField("order","Order"),FormField("date_of_order","Date Of Order"),FormField("transferor","Transferor"),FormField("transferee","Transferee"),FormField("date_of_transfer","Date Of Transfer"),FormField("gata","Gata"),FormField("total_title_area","Total Title Area"),FormField("transferred_area","Transferred Area"),FormField("transferred_share","Transferred Share"),FormField("status_of_amaldaramad","Status Of Amaldaramad")]
const yupSchema = yup.object({
date_of_order: yup.date().required(),
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
   const formFields = [FormField("id","Id"),FormField("claim","Claim"),FormField("order","Order"),FormField("date_of_order","Date Of Order"),FormField("transferor","Transferor"),FormField("transferee","Transferee"),FormField("date_of_transfer","Date Of Transfer"),FormField("gata","Gata"),FormField("total_title_area","Total Title Area"),FormField("transferred_area","Transferred Area"),FormField("transferred_share","Transferred Share"),FormField("status_of_amaldaramad","Status Of Amaldaramad")]
   const mutation = props.pk? updateAmaldaramadMutation:createAmaldaramadMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "Amaldaramad"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    

import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateCourtOrderMutation = `mutation something($id:String!, $petition:String!, $date_of_order:String!, $ordering_court:String!, $order_txt:String!, $operative_part:String!, $copy_of_order:String!, $section_of_order:String!, $appeal_or_revision:String!, $remarks:String!){
    update_court_order(id: $id, petition: $petition, date_of_order: $date_of_order, ordering_court: $ordering_court, order_txt: $order_txt, operative_part: $operative_part, copy_of_order: $copy_of_order, section_of_order: $section_of_order, appeal_or_revision: $appeal_or_revision, remarks: $remarks) {
        court_order {id petition date_of_order ordering_court order_txt operative_part copy_of_order section_of_order appeal_or_revision remarks }
      ok
      errormessage
      
    }
    }`
  
export const createCourtOrderMutation = `mutation something($petition:String!, $date_of_order:String!, $ordering_court:String!, $order_txt:String!, $operative_part:String!, $copy_of_order:String!, $section_of_order:String!, $appeal_or_revision:String!, $remarks:String!){
        create_court_order(petition: $petition, date_of_order: $date_of_order, ordering_court: $ordering_court, order_txt: $order_txt, operative_part: $operative_part, copy_of_order: $copy_of_order, section_of_order: $section_of_order, appeal_or_revision: $appeal_or_revision, remarks: $remarks) {
            court_order {id petition date_of_order ordering_court order_txt operative_part copy_of_order section_of_order appeal_or_revision remarks }
          ok
          errormessage

        }
        }`

const formFields = [FormField("petition","Petition"),FormField("date_of_order","Date Of Order"),FormField("ordering_court","Ordering Court"),FormField("order_txt","Order Txt"),FormField("operative_part","Operative Part"),FormField("copy_of_order","Copy Of Order"),FormField("section_of_order","Section Of Order"),FormField("appeal_or_revision","Appeal Or Revision"),FormField("remarks","Remarks")]
const yupSchema = yup.object({
date_of_order: yup.date().required(),
section_of_order: yup.string().required(),
appeal_or_revision: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createCourtOrderMutation)
export const CourtOrderCreateForm = <GenericCreateUpdateForm title="Create Court Order" formObject={formObject}/>
export const CourtOrderCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("petition","Petition"),FormField("date_of_order","Date Of Order"),FormField("ordering_court","Ordering Court"),FormField("order_txt","Order Txt"),FormField("operative_part","Operative Part"),FormField("copy_of_order","Copy Of Order"),FormField("section_of_order","Section Of Order"),FormField("appeal_or_revision","Appeal Or Revision"),FormField("remarks","Remarks")]
   const mutation = props.edit? updateCourtOrderMutation:createCourtOrderMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_court_order { id petition_id date_of_order ordering_court_id order_txt operative_part copy_of_order section_of_order appeal_or_revision remarks }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Court Order"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    

import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateCourtOrderMutation = `mutation something($id:String!, $khatauni:String!, $petition:String!, $date_of_order:String!, $ordering_court:String!, $order_txt:String!, $operative_part:String!, $copy_of_order:String!, $section_of_order:String!, $appeal_or_revision:String!, $remarks:String!){
    update_court_order(id: $id, khatauni: $khatauni, petition: $petition, date_of_order: $date_of_order, ordering_court: $ordering_court, order_txt: $order_txt, operative_part: $operative_part, copy_of_order: $copy_of_order, section_of_order: $section_of_order, appeal_or_revision: $appeal_or_revision, remarks: $remarks) {
        court_order {id khatauni petition date_of_order ordering_court order_txt operative_part copy_of_order section_of_order appeal_or_revision remarks }
      ok
      errormessage
      
    }
    }`
  
export const createCourtOrderMutation = `mutation something($khatauni:String!, $petition:String!, $date_of_order:String!, $ordering_court:String!, $order_txt:String!, $operative_part:String!, $copy_of_order:String!, $section_of_order:String!, $appeal_or_revision:String!, $remarks:String!){
        create_court_order(khatauni: $khatauni, petition: $petition, date_of_order: $date_of_order, ordering_court: $ordering_court, order_txt: $order_txt, operative_part: $operative_part, copy_of_order: $copy_of_order, section_of_order: $section_of_order, appeal_or_revision: $appeal_or_revision, remarks: $remarks) {
            court_order {id khatauni petition date_of_order ordering_court order_txt operative_part copy_of_order section_of_order appeal_or_revision remarks }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("petition","Petition"),FormField("date_of_order","Date Of Order"),FormField("ordering_court","Ordering Court"),FormField("order_txt","Order Txt"),FormField("operative_part","Operative Part"),FormField("copy_of_order","Copy Of Order"),FormField("section_of_order","Section Of Order"),FormField("appeal_or_revision","Appeal Or Revision"),FormField("remarks","Remarks")]
const yupSchema = yup.object({
date_of_order: yup.date().required(),
section_of_order: yup.string().required(),
appeal_or_revision: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createCourtOrderMutation)
export const CourtOrderCreateForm = <GenericCreateUpdateForm title="Create Court Order" formObject={formObject}/>
export const CourtOrderCreateUpdateForm = (props)=> {
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("petition","Petition"),FormField("date_of_order","Date Of Order"),FormField("ordering_court","Ordering Court"),FormField("order_txt","Order Txt"),FormField("operative_part","Operative Part"),FormField("copy_of_order","Copy Of Order"),FormField("section_of_order","Section Of Order"),FormField("appeal_or_revision","Appeal Or Revision"),FormField("remarks","Remarks")]
   const mutation = props.pk? updateCourtOrderMutation:createCourtOrderMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "Court Order"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    
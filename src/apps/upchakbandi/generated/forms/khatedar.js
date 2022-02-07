
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateKhatedarMutation = `mutation something($id:String!, $khatauni:String!, $khata:String!, $khatedar:String!, $slno_in_khata:String!, $share:String!){
    update_khatedar(id: $id, khatauni: $khatauni, khata: $khata, khatedar: $khatedar, slno_in_khata: $slno_in_khata, share: $share) {
        khatedar {id khatauni khata khatedar slno_in_khata share }
      ok
      errormessage
      
    }
    }`
  
export const createKhatedarMutation = `mutation something($khatauni:String!, $khata:String!, $khatedar:String!, $slno_in_khata:String!, $share:String!){
        create_khatedar(khatauni: $khatauni, khata: $khata, khatedar: $khatedar, slno_in_khata: $slno_in_khata, share: $share) {
            khatedar {id khatauni khata khatedar slno_in_khata share }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("khata","Khata"),FormField("khatedar","Khatedar"),FormField("slno_in_khata","Slno In Khata"),FormField("share","Share")]
const yupSchema = yup.object({
slno_in_khata: yup.number().integer().required(),
share: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createKhatedarMutation)
export const KhatedarCreateForm = <GenericCreateUpdateForm title="Create Khatedar" formObject={formObject}/>
export const KhatedarCreateUpdateForm = (props)=> {
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("khata","Khata"),FormField("khatedar","Khatedar"),FormField("slno_in_khata","Slno In Khata"),FormField("share","Share")]
   const mutation = props.pk? updateKhatedarMutation:createKhatedarMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "Khatedar"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    
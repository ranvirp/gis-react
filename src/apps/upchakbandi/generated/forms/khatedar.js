
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateKhatedarMutation = `mutation something($id:String!, $khatauni:String!, $khata_no:String!, $farmer:String!, $khatedar_code:String!, $slno_in_khata:String!, $share:String!){
    update_khatedar(id: $id, khatauni: $khatauni, khata_no: $khata_no, farmer: $farmer, khatedar_code: $khatedar_code, slno_in_khata: $slno_in_khata, share: $share) {
        khatedar {id khatauni khata_no farmer khatedar_code slno_in_khata share }
      ok
      errormessage
      
    }
    }`
  
export const createKhatedarMutation = `mutation something($khatauni:String!, $khata_no:String!, $farmer:String!, $khatedar_code:String!, $slno_in_khata:String!, $share:String!){
        create_khatedar(khatauni: $khatauni, khata_no: $khata_no, farmer: $farmer, khatedar_code: $khatedar_code, slno_in_khata: $slno_in_khata, share: $share) {
            khatedar {id khatauni khata_no farmer khatedar_code slno_in_khata share }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("khata_no","Khata No"),FormField("farmer","Farmer"),FormField("khatedar_code","Khatedar Code"),FormField("slno_in_khata","Slno In Khata"),FormField("share","Share")]
const yupSchema = yup.object({
khata_no: yup.number().integer().required(),
khatedar_code: yup.string().required(),
slno_in_khata: yup.number().integer().required(),
share: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createKhatedarMutation)
export const KhatedarCreateForm = <GenericCreateUpdateForm title="Create Khatedar" formObject={formObject}/>
export const KhatedarCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("khata_no","Khata No"),FormField("farmer","Farmer"),FormField("khatedar_code","Khatedar Code"),FormField("slno_in_khata","Slno In Khata"),FormField("share","Share")]
   const mutation = props.edit? updateKhatedarMutation:createKhatedarMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_khatedar { id khatauni_id khata_no farmer_id khatedar_code slno_in_khata share status }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Khatedar"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
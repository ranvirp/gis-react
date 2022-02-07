
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateKhatauniMutation = `mutation something($id:String!, $village:String!, $fasli_year:String!, $type_of_khatauni:String!, $no_of_khatas:String!, $area:String!){
    update_khatauni(id: $id, village: $village, fasli_year: $fasli_year, type_of_khatauni: $type_of_khatauni, no_of_khatas: $no_of_khatas, area: $area) {
        khatauni {id village fasli_year type_of_khatauni no_of_khatas area }
      ok
      errormessage
      
    }
    }`
  
export const createKhatauniMutation = `mutation something($village:String!, $fasli_year:String!, $type_of_khatauni:String!, $no_of_khatas:String!, $area:String!){
        create_khatauni(village: $village, fasli_year: $fasli_year, type_of_khatauni: $type_of_khatauni, no_of_khatas: $no_of_khatas, area: $area) {
            khatauni {id village fasli_year type_of_khatauni no_of_khatas area }
          ok
          errormessage

        }
        }`

const formFields = [FormField("village","Village"),FormField("fasli_year","Fasli Year"),FormField("type_of_khatauni","Type Of Khatauni"),FormField("no_of_khatas","No Of Khatas"),FormField("area","Area")]
const yupSchema = yup.object({
fasli_year: yup.number().integer().required(),
type_of_khatauni: yup.string().required(),
no_of_khatas: yup.number().integer().required(),
area: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createKhatauniMutation)
export const KhatauniCreateForm = <GenericCreateUpdateForm title="Create Khatauni" formObject={formObject}/>
export const KhatauniCreateUpdateForm = (props)=> {
   const formFields = [FormField("id","Id"),FormField("village","Village"),FormField("fasli_year","Fasli Year"),FormField("type_of_khatauni","Type Of Khatauni"),FormField("no_of_khatas","No Of Khatas"),FormField("area","Area")]
   const mutation = props.pk? updateKhatauniMutation:createKhatauniMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "Khatauni"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    
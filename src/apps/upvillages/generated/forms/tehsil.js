
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateTehsilMutation = `mutation something($district_code:String!, $tname:String!, $tehsil_code_census:String!, $tname_eng:String!){
    update_tehsil(district_code: $district_code, tname: $tname, tehsil_code_census: $tehsil_code_census, tname_eng: $tname_eng) {
        tehsil {district_code tname tehsil_code_census tname_eng }
      ok
      errormessage
      
    }
    }`
  
export const createTehsilMutation = `mutation something($district_code:String!, $tname:String!, $tname_eng:String!){
        create_tehsil(district_code: $district_code, tname: $tname, tname_eng: $tname_eng) {
            tehsil {district_code tname tehsil_code_census tname_eng }
          ok
          errormessage

        }
        }`

const formFields = [FormField("district_code","District Code"),FormField("tname","Tname"),FormField("tname_eng","Tname Eng")]
const yupSchema = yup.object({
tname: yup.string().required(),
tname_eng: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createTehsilMutation)
export const TehsilCreateForm = <GenericCreateUpdateForm title="Create Tehsil" formObject={formObject}/>
export const TehsilCreateUpdateForm = (props)=> {
   const formFields = [FormField("district_code","District Code"),FormField("tname","Tname"),FormField("tehsil_code_census","Tehsil Code Census"),FormField("tname_eng","Tname Eng")]
   const mutation = props.pk? updateTehsilMutation:createTehsilMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "Tehsil"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    

import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateDistrictMutation = `mutation something($dname:String!, $district_code_census:String!, $dname_eng:String!){
    update_district(dname: $dname, district_code_census: $district_code_census, dname_eng: $dname_eng) {
        district {dname district_code_census dname_eng }
      ok
      errormessage
      
    }
    }`
  
export const createDistrictMutation = `mutation something($dname:String!, $dname_eng:String!){
        create_district(dname: $dname, dname_eng: $dname_eng) {
            district {dname district_code_census dname_eng }
          ok
          errormessage

        }
        }`

const formFields = [FormField("dname","Dname"),FormField("dname_eng","Dname Eng")]
const yupSchema = yup.object({
dname: yup.string().required(),
dname_eng: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createDistrictMutation)
export const DistrictCreateForm = <GenericCreateUpdateForm title="Create District" formObject={formObject}/>
export const DistrictCreateUpdateForm = (props)=> {
   const formFields = [FormField("dname","Dname"),FormField("district_code_census","District Code Census"),FormField("dname_eng","Dname Eng")]
   const mutation = props.pk? updateDistrictMutation:createDistrictMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "District"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    
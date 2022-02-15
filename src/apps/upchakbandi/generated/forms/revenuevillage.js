
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateRevenueVillageMutation = `mutation something($vname:String!, $village_code_census:String!, $vname_eng:String!, $pname:String!, $flg_chakbandi:String!, $flg_survey:String!, $pargana_code_new:String!, $tehsil_code:String!, $district_code:String!){
    update_revenue_village(vname: $vname, village_code_census: $village_code_census, vname_eng: $vname_eng, pname: $pname, flg_chakbandi: $flg_chakbandi, flg_survey: $flg_survey, pargana_code_new: $pargana_code_new, tehsil_code: $tehsil_code, district_code: $district_code) {
        revenue_village {vname village_code_census vname_eng pname flg_chakbandi flg_survey pargana_code_new tehsil_code district_code }
      ok
      errormessage
      
    }
    }`
  
export const createRevenueVillageMutation = `mutation something($vname:String!, $vname_eng:String!, $pname:String!, $flg_chakbandi:String!, $flg_survey:String!, $pargana_code_new:String!, $tehsil_code:String!, $district_code:String!){
        create_revenue_village(vname: $vname, vname_eng: $vname_eng, pname: $pname, flg_chakbandi: $flg_chakbandi, flg_survey: $flg_survey, pargana_code_new: $pargana_code_new, tehsil_code: $tehsil_code, district_code: $district_code) {
            revenue_village {vname village_code_census vname_eng pname flg_chakbandi flg_survey pargana_code_new tehsil_code district_code }
          ok
          errormessage

        }
        }`

const formFields = [FormField("vname","Vname"),FormField("vname_eng","Vname Eng"),FormField("pname","Pname"),FormField("flg_chakbandi","Flg Chakbandi"),FormField("flg_survey","Flg Survey"),FormField("pargana_code_new","Pargana Code New"),FormField("tehsil_code","Tehsil Code"),FormField("district_code","District Code")]
const yupSchema = yup.object({
vname: yup.string().required(),
vname_eng: yup.string().required(),
pname: yup.string().required(),
flg_chakbandi: yup.string().required(),
flg_survey: yup.string().required(),
pargana_code_new: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createRevenueVillageMutation)
export const RevenueVillageCreateForm = <GenericCreateUpdateForm title="Create Revenue Village" formObject={formObject}/>
export const RevenueVillageCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("vname","Vname"),FormField("village_code_census","Village Code Census"),FormField("vname_eng","Vname Eng"),FormField("pname","Pname"),FormField("flg_chakbandi","Flg Chakbandi"),FormField("flg_survey","Flg Survey"),FormField("pargana_code_new","Pargana Code New"),FormField("tehsil_code","Tehsil Code"),FormField("district_code","District Code")]
   const mutation = props.edit? updateRevenueVillageMutation:createRevenueVillageMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_revenue_village { vname village_code_census vname_eng pname flg_chakbandi flg_survey pargana_code_new tehsil_code_id district_code_id }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Revenue Village"} pk={"village_code_census"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
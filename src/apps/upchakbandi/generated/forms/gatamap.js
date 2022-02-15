
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateGataMapMutation = `mutation something($id:String!, $khatauni:String!, $new_gata_no:String!, $old_gata_no:String!, $area:String!, $bhaumik_year:String!){
    update_gata_map(id: $id, khatauni: $khatauni, new_gata_no: $new_gata_no, old_gata_no: $old_gata_no, area: $area, bhaumik_year: $bhaumik_year) {
        gata_map {id khatauni new_gata_no old_gata_no area bhaumik_year }
      ok
      errormessage
      
    }
    }`
  
export const createGataMapMutation = `mutation something($khatauni:String!, $new_gata_no:String!, $old_gata_no:String!, $area:String!, $bhaumik_year:String!){
        create_gata_map(khatauni: $khatauni, new_gata_no: $new_gata_no, old_gata_no: $old_gata_no, area: $area, bhaumik_year: $bhaumik_year) {
            gata_map {id khatauni new_gata_no old_gata_no area bhaumik_year }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("new_gata_no","New Gata No"),FormField("old_gata_no","Old Gata No"),FormField("area","Area"),FormField("bhaumik_year","Bhaumik Year")]
const yupSchema = yup.object({
new_gata_no: yup.string().required(),
old_gata_no: yup.string().required(),
area: yup.number().required(),
bhaumik_year: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createGataMapMutation)
export const GataMapCreateForm = <GenericCreateUpdateForm title="Create Gata Map" formObject={formObject}/>
export const GataMapCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("new_gata_no","New Gata No"),FormField("old_gata_no","Old Gata No"),FormField("area","Area"),FormField("bhaumik_year","Bhaumik Year")]
   const mutation = props.edit? updateGataMapMutation:createGataMapMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_gata_map { id khatauni_id new_gata_no old_gata_no area bhaumik_year status }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Gata Map"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
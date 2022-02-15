
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateGataMutation = `mutation something($id:String!, $khatauni:String!, $gata_no:String!, $area:String!, $khata_no:String!, $bhaumik_year:String!){
    update_gata(id: $id, khatauni: $khatauni, gata_no: $gata_no, area: $area, khata_no: $khata_no, bhaumik_year: $bhaumik_year) {
        gata {id khatauni gata_no area khata_no bhaumik_year }
      ok
      errormessage
      
    }
    }`
  
export const createGataMutation = `mutation something($khatauni:String!, $gata_no:String!, $area:String!, $khata_no:String!, $bhaumik_year:String!){
        create_gata(khatauni: $khatauni, gata_no: $gata_no, area: $area, khata_no: $khata_no, bhaumik_year: $bhaumik_year) {
            gata {id khatauni gata_no area khata_no bhaumik_year }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("gata_no","Gata No"),FormField("area","Area"),FormField("khata_no","Khata No"),FormField("bhaumik_year","Bhaumik Year")]
const yupSchema = yup.object({
gata_no: yup.string().required(),
area: yup.number().required(),
khata_no: yup.number().integer().required(),
bhaumik_year: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createGataMutation)
export const GataCreateForm = <GenericCreateUpdateForm title="Create Gata" formObject={formObject}/>
export const GataCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("gata_no","Gata No"),FormField("area","Area"),FormField("khata_no","Khata No"),FormField("bhaumik_year","Bhaumik Year")]
   const mutation = props.edit? updateGataMutation:createGataMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_gata { id khatauni_id gata_no area khata_no bhaumik_year status }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Gata"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
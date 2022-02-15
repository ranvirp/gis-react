
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateKhataMutation = `mutation something($id:String!, $khatauni:String!, $khata_no:String!, $category:String!, $area:String!){
    update_khata(id: $id, khatauni: $khatauni, khata_no: $khata_no, category: $category, area: $area) {
        khata {id khatauni khata_no category area }
      ok
      errormessage
      
    }
    }`
  
export const createKhataMutation = `mutation something($khatauni:String!, $khata_no:String!, $category:String!, $area:String!){
        create_khata(khatauni: $khatauni, khata_no: $khata_no, category: $category, area: $area) {
            khata {id khatauni khata_no category area }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("khata_no","Khata No"),FormField("category","Category"),FormField("area","Area")]
const yupSchema = yup.object({
khata_no: yup.number().integer().required(),
area: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createKhataMutation)
export const KhataCreateForm = <GenericCreateUpdateForm title="Create Khata" formObject={formObject}/>
export const KhataCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("khata_no","Khata No"),FormField("category","Category"),FormField("area","Area")]
   const mutation = props.edit? updateKhataMutation:createKhataMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_khata { id khatauni_id khata_no category_id area status }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Khata"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
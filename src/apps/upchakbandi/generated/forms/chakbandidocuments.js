
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateChakbandiDocumentsMutation = `mutation something($id:String!, $chakbandi:String!, $khatauni:String!){
    update_chakbandi_documents(id: $id, chakbandi: $chakbandi, khatauni: $khatauni) {
        chakbandi_documents {id chakbandi khatauni }
      ok
      errormessage
      
    }
    }`
  
export const createChakbandiDocumentsMutation = `mutation something($chakbandi:String!, $khatauni:String!){
        create_chakbandi_documents(chakbandi: $chakbandi, khatauni: $khatauni) {
            chakbandi_documents {id chakbandi khatauni }
          ok
          errormessage

        }
        }`

const formFields = [FormField("chakbandi","Chakbandi"),FormField("khatauni","Khatauni")]
const yupSchema = yup.object({
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createChakbandiDocumentsMutation)
export const ChakbandiDocumentsCreateForm = <GenericCreateUpdateForm title="Create Chakbandi Documents" formObject={formObject}/>
export const ChakbandiDocumentsCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("chakbandi","Chakbandi"),FormField("khatauni","Khatauni")]
   const mutation = props.edit? updateChakbandiDocumentsMutation:createChakbandiDocumentsMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_chakbandi_documents { id chakbandi_id khatauni_id }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Chakbandi Documents"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
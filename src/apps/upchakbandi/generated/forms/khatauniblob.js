
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateKhatauniBlobMutation = `mutation something($id:String!, $khatauni:String!, $date_of_lock:String!, $data:String!, $hash:String!){
    update_khatauni_blob(id: $id, khatauni: $khatauni, date_of_lock: $date_of_lock, data: $data, hash: $hash) {
        khatauni_blob {id khatauni date_of_lock data hash }
      ok
      errormessage
      
    }
    }`
  
export const createKhatauniBlobMutation = `mutation something($khatauni:String!, $date_of_lock:String!, $data:String!, $hash:String!){
        create_khatauni_blob(khatauni: $khatauni, date_of_lock: $date_of_lock, data: $data, hash: $hash) {
            khatauni_blob {id khatauni date_of_lock data hash }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("date_of_lock","Date Of Lock"),FormField("data","Data"),FormField("hash","Hash")]
const yupSchema = yup.object({
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createKhatauniBlobMutation)
export const KhatauniBlobCreateForm = <GenericCreateUpdateForm title="Create Khatauni Blob" formObject={formObject}/>
export const KhatauniBlobCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("date_of_lock","Date Of Lock"),FormField("data","Data"),FormField("hash","Hash")]
   const mutation = props.edit? updateKhatauniBlobMutation:createKhatauniBlobMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_khatauni_blob { id khatauni_id date_of_lock data hash }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Khatauni Blob"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
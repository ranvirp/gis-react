
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateAuditlogsMutation = `mutation something($id:String!, $object_id:String!, $object_name:String!, $object_value:String!, $object_hash:String!, $type_of_action:String!, $hash_code:String!, $action_by:String!, $action_on:String!){
    update_auditlogs(id: $id, object_id: $object_id, object_name: $object_name, object_value: $object_value, object_hash: $object_hash, type_of_action: $type_of_action, hash_code: $hash_code, action_by: $action_by, action_on: $action_on) {
        auditlogs {id object_id object_name object_value object_hash type_of_action hash_code action_by action_on }
      ok
      errormessage
      
    }
    }`
  
export const createAuditlogsMutation = `mutation something($object_id:String!, $object_name:String!, $object_value:String!, $object_hash:String!, $type_of_action:String!, $hash_code:String!, $action_by:String!, $action_on:String!){
        create_auditlogs(object_id: $object_id, object_name: $object_name, object_value: $object_value, object_hash: $object_hash, type_of_action: $type_of_action, hash_code: $hash_code, action_by: $action_by, action_on: $action_on) {
            auditlogs {id object_id object_name object_value object_hash type_of_action hash_code action_by action_on }
          ok
          errormessage

        }
        }`

const formFields = [FormField("object_id","Object Id"),FormField("object_name","Object Name"),FormField("object_value","Object Value"),FormField("object_hash","Object Hash"),FormField("type_of_action","Type Of Action"),FormField("hash_code","Hash Code"),FormField("action_by","Action By"),FormField("action_on","Action On")]
const yupSchema = yup.object({
object_id: yup.string().required(),
object_name: yup.string().required(),
object_hash: yup.string().required(),
type_of_action: yup.string().required(),
action_by: yup.string().required(),
action_on: yup.date().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createAuditlogsMutation)
export const AuditlogsCreateForm = <GenericCreateUpdateForm title="Create Auditlogs" formObject={formObject}/>
export const AuditlogsCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("object_id","Object Id"),FormField("object_name","Object Name"),FormField("object_value","Object Value"),FormField("object_hash","Object Hash"),FormField("type_of_action","Type Of Action"),FormField("hash_code","Hash Code"),FormField("action_by","Action By"),FormField("action_on","Action On")]
   const mutation = props.edit? updateAuditlogsMutation:createAuditlogsMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_auditlogs { id object_id object_name object_value object_hash type_of_action hash_code action_by action_on }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Auditlogs"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
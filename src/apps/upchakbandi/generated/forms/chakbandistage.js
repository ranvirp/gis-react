
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateChakbandiStageMutation = `mutation something($id:String!, $chakbandi:String!, $date_of_stage:String!, $stage:String!){
    update_chakbandi_stage(id: $id, chakbandi: $chakbandi, date_of_stage: $date_of_stage, stage: $stage) {
        chakbandi_stage {id chakbandi date_of_stage stage }
      ok
      errormessage
      
    }
    }`
  
export const createChakbandiStageMutation = `mutation something($chakbandi:String!, $date_of_stage:String!, $stage:String!){
        create_chakbandi_stage(chakbandi: $chakbandi, date_of_stage: $date_of_stage, stage: $stage) {
            chakbandi_stage {id chakbandi date_of_stage stage }
          ok
          errormessage

        }
        }`

const formFields = [FormField("chakbandi","Chakbandi"),FormField("date_of_stage","Date Of Stage"),FormField("stage","Stage")]
const yupSchema = yup.object({
stage: yup.number().integer().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createChakbandiStageMutation)
export const ChakbandiStageCreateForm = <GenericCreateUpdateForm title="Create Chakbandi Stage" formObject={formObject}/>
export const ChakbandiStageCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("chakbandi","Chakbandi"),FormField("date_of_stage","Date Of Stage"),FormField("stage","Stage")]
   const mutation = props.edit? updateChakbandiStageMutation:createChakbandiStageMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_chakbandi_stage { id chakbandi_id date_of_stage stage }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Chakbandi Stage"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
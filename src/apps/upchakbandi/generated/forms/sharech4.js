
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateShareCh4Mutation = `mutation something($khatedar:String!, $share:String!){
    update_share_ch4(khatedar: $khatedar, share: $share) {
        share_ch4 {khatedar share }
      ok
      errormessage
      
    }
    }`
  
export const createShareCh4Mutation = `mutation something($share:String!){
        create_share_ch4(share: $share) {
            share_ch4 {khatedar share }
          ok
          errormessage

        }
        }`

const formFields = [FormField("share","Share")]
const yupSchema = yup.object({
share: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createShareCh4Mutation)
export const ShareCh4CreateForm = <GenericCreateUpdateForm title="Create Share Ch4" formObject={formObject}/>
export const ShareCh4CreateUpdateForm = (props)=> {
   
   const formFields = [FormField("khatedar","Khatedar"),FormField("share","Share")]
   const mutation = props.edit? updateShareCh4Mutation:createShareCh4Mutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_share_ch4 { khatedar_id share }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Share Ch4"} pk={"khatedar"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
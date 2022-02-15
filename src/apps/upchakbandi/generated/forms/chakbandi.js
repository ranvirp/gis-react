
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateChakbandiMutation = `mutation something($id:String!, $date_of_4notification:String!, $village:String!){
    update_chakbandi(id: $id, date_of_4notification: $date_of_4notification, village: $village) {
        chakbandi {id date_of_4notification village }
      ok
      errormessage
      
    }
    }`
  
export const createChakbandiMutation = `mutation something($date_of_4notification:String!, $village:String!){
        create_chakbandi(date_of_4notification: $date_of_4notification, village: $village) {
            chakbandi {id date_of_4notification village }
          ok
          errormessage

        }
        }`

const formFields = [FormField("date_of_4notification","Date Of 4notification"),FormField("village","Village")]
const yupSchema = yup.object({
date_of_4notification: yup.date().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createChakbandiMutation)
export const ChakbandiCreateForm = <GenericCreateUpdateForm title="Create Chakbandi" formObject={formObject}/>
export const ChakbandiCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("date_of_4notification","Date Of 4notification"),FormField("village","Village")]
   const mutation = props.edit? updateChakbandiMutation:createChakbandiMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_chakbandi { id date_of_4notification village_id status }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Chakbandi"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
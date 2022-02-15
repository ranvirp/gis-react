
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateExchangeMutation = `mutation something($id:String!, $claim:String!, $partyA:String!, $partyB:String!, $date_of_exchange:String!, $date_of_order:String!, $gataA:String!, $gataB:String!, $areaA:String!, $areaB:String!){
    update_exchange(id: $id, claim: $claim, partyA: $partyA, partyB: $partyB, date_of_exchange: $date_of_exchange, date_of_order: $date_of_order, gataA: $gataA, gataB: $gataB, areaA: $areaA, areaB: $areaB) {
        exchange {id claim partyA partyB date_of_exchange date_of_order gataA gataB areaA areaB }
      ok
      errormessage
      
    }
    }`
  
export const createExchangeMutation = `mutation something($claim:String!, $partyA:String!, $partyB:String!, $date_of_exchange:String!, $date_of_order:String!, $gataA:String!, $gataB:String!, $areaA:String!, $areaB:String!){
        create_exchange(claim: $claim, partyA: $partyA, partyB: $partyB, date_of_exchange: $date_of_exchange, date_of_order: $date_of_order, gataA: $gataA, gataB: $gataB, areaA: $areaA, areaB: $areaB) {
            exchange {id claim partyA partyB date_of_exchange date_of_order gataA gataB areaA areaB }
          ok
          errormessage

        }
        }`

const formFields = [FormField("claim","Claim"),FormField("partyA","Partya"),FormField("partyB","Partyb"),FormField("date_of_exchange","Date Of Exchange"),FormField("date_of_order","Date Of Order"),FormField("gataA","Gataa"),FormField("gataB","Gatab"),FormField("areaA","Areaa"),FormField("areaB","Areab")]
const yupSchema = yup.object({
date_of_exchange: yup.date().required(),
date_of_order: yup.date().required(),
gataA: yup.string().required(),
gataB: yup.string().required(),
areaA: yup.number().required(),
areaB: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createExchangeMutation)
export const ExchangeCreateForm = <GenericCreateUpdateForm title="Create Exchange" formObject={formObject}/>
export const ExchangeCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("claim","Claim"),FormField("partyA","Partya"),FormField("partyB","Partyb"),FormField("date_of_exchange","Date Of Exchange"),FormField("date_of_order","Date Of Order"),FormField("gataA","Gataa"),FormField("gataB","Gatab"),FormField("areaA","Areaa"),FormField("areaB","Areab")]
   const mutation = props.edit? updateExchangeMutation:createExchangeMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_exchange { id claim_id partyA_id partyB_id date_of_exchange date_of_order gataA gataB areaA areaB }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Exchange"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
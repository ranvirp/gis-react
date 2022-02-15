
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateTransferMutation = `mutation something($id:String!, $claim:String!, $transferor:String!, $transferee:String!, $date_of_deed:String!, $type_of_deed:String!, $gata:String!, $total_title_area:String!, $sold_area:String!, $sold_share:String!){
    update_transfer(id: $id, claim: $claim, transferor: $transferor, transferee: $transferee, date_of_deed: $date_of_deed, type_of_deed: $type_of_deed, gata: $gata, total_title_area: $total_title_area, sold_area: $sold_area, sold_share: $sold_share) {
        transfer {id claim transferor transferee date_of_deed type_of_deed gata total_title_area sold_area sold_share }
      ok
      errormessage
      
    }
    }`
  
export const createTransferMutation = `mutation something($claim:String!, $transferor:String!, $transferee:String!, $date_of_deed:String!, $type_of_deed:String!, $gata:String!, $total_title_area:String!, $sold_area:String!, $sold_share:String!){
        create_transfer(claim: $claim, transferor: $transferor, transferee: $transferee, date_of_deed: $date_of_deed, type_of_deed: $type_of_deed, gata: $gata, total_title_area: $total_title_area, sold_area: $sold_area, sold_share: $sold_share) {
            transfer {id claim transferor transferee date_of_deed type_of_deed gata total_title_area sold_area sold_share }
          ok
          errormessage

        }
        }`

const formFields = [FormField("claim","Claim"),FormField("transferor","Transferor"),FormField("transferee","Transferee"),FormField("date_of_deed","Date Of Deed"),FormField("type_of_deed","Type Of Deed"),FormField("gata","Gata"),FormField("total_title_area","Total Title Area"),FormField("sold_area","Sold Area"),FormField("sold_share","Sold Share")]
const yupSchema = yup.object({
date_of_deed: yup.date().required(),
type_of_deed: yup.string().required(),
gata: yup.string().required(),
total_title_area: yup.number().required(),
sold_area: yup.number().required(),
sold_share: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createTransferMutation)
export const TransferCreateForm = <GenericCreateUpdateForm title="Create Transfer" formObject={formObject}/>
export const TransferCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("claim","Claim"),FormField("transferor","Transferor"),FormField("transferee","Transferee"),FormField("date_of_deed","Date Of Deed"),FormField("type_of_deed","Type Of Deed"),FormField("gata","Gata"),FormField("total_title_area","Total Title Area"),FormField("sold_area","Sold Area"),FormField("sold_share","Sold Share")]
   const mutation = props.edit? updateTransferMutation:createTransferMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_transfer { id claim_id transferor_id transferee_id date_of_deed type_of_deed gata total_title_area sold_area sold_share }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Transfer"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
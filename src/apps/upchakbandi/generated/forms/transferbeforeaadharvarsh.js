
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateTransferBeforeAadharvarshMutation = `mutation something($id:String!, $claim:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $sold_area:String!, $sold_share:String!){
    update_transfer_before_aadharvarsh(id: $id, claim: $claim, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, sold_area: $sold_area, sold_share: $sold_share) {
        transfer_before_aadharvarsh {id claim transferor transferee date_of_transfer gata sold_area sold_share }
      ok
      errormessage
      
    }
    }`
  
export const createTransferBeforeAadharvarshMutation = `mutation something($claim:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $sold_area:String!, $sold_share:String!){
        create_transfer_before_aadharvarsh(claim: $claim, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, sold_area: $sold_area, sold_share: $sold_share) {
            transfer_before_aadharvarsh {id claim transferor transferee date_of_transfer gata sold_area sold_share }
          ok
          errormessage

        }
        }`

const formFields = [FormField("claim","Claim"),FormField("transferor","Transferor"),FormField("transferee","Transferee"),FormField("date_of_transfer","Date Of Transfer"),FormField("gata","Gata"),FormField("sold_area","Sold Area"),FormField("sold_share","Sold Share")]
const yupSchema = yup.object({
date_of_transfer: yup.date().required(),
gata: yup.string().required(),
sold_area: yup.number().required(),
sold_share: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createTransferBeforeAadharvarshMutation)
export const TransferBeforeAadharvarshCreateForm = <GenericCreateUpdateForm title="Create Transfer Before Aadharvarsh" formObject={formObject}/>
export const TransferBeforeAadharvarshCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("claim","Claim"),FormField("transferor","Transferor"),FormField("transferee","Transferee"),FormField("date_of_transfer","Date Of Transfer"),FormField("gata","Gata"),FormField("sold_area","Sold Area"),FormField("sold_share","Sold Share")]
   const mutation = props.edit? updateTransferBeforeAadharvarshMutation:createTransferBeforeAadharvarshMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_transfer_before_aadharvarsh { id claim_id transferor_id transferee_id date_of_transfer gata sold_area sold_share }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Transfer Before Aadharvarsh"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
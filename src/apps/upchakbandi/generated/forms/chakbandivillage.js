
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateChakbandiVillageMutation = `mutation something($id:String!, $chakbandi:String!, $village:String!){
    update_chakbandi_village(id: $id, chakbandi: $chakbandi, village: $village) {
        chakbandi_village {id chakbandi village }
      ok
      errormessage
      
    }
    }`
  
export const createChakbandiVillageMutation = `mutation something($chakbandi:String!, $village:String!){
        create_chakbandi_village(chakbandi: $chakbandi, village: $village) {
            chakbandi_village {id chakbandi village }
          ok
          errormessage

        }
        }`

const formFields = [FormField("chakbandi","Chakbandi"),FormField("village","Village")]
const yupSchema = yup.object({
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createChakbandiVillageMutation)
export const ChakbandiVillageCreateForm = <GenericCreateUpdateForm title="Create Chakbandi Village" formObject={formObject}/>
export const ChakbandiVillageCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("chakbandi","Chakbandi"),FormField("village","Village")]
   const mutation = props.pk? updateChakbandiVillageMutation:createChakbandiVillageMutation
   const defprops = props.pk ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation)
   //const myQuery = `query a{all_chakbandi_village { id chakbandi_id village_id }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Chakbandi Village"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    
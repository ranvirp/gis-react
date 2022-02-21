
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateGataOwnerMutation = `mutation something($id:String!, $khatauni:String!, $date_of_ownership:String!, $gata:String!, $owner:String!, $owner_details:String!, $owned_share:String!, $owned_area:String!){
    update_gata_owner(id: $id, khatauni: $khatauni, date_of_ownership: $date_of_ownership, gata: $gata, owner: $owner, owner_details: $owner_details, owned_share: $owned_share, owned_area: $owned_area) {
        gata_owner {id khatauni date_of_ownership gata owner owner_details owned_share owned_area }
      ok
      errormessage
      
    }
    }`
  
export const createGataOwnerMutation = `mutation something($khatauni:String!, $date_of_ownership:String!, $gata:String!, $owner:String!, $owner_details:String!, $owned_share:String!, $owned_area:String!){
        create_gata_owner(khatauni: $khatauni, date_of_ownership: $date_of_ownership, gata: $gata, owner: $owner, owner_details: $owner_details, owned_share: $owned_share, owned_area: $owned_area) {
            gata_owner {id khatauni date_of_ownership gata owner owner_details owned_share owned_area }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("date_of_ownership","Date Of Ownership"),FormField("gata","Gata"),FormField("owner","Owner"),FormField("owner_details","Owner Details"),FormField("owned_share","Owned Share"),FormField("owned_area","Owned Area")]
const yupSchema = yup.object({
gata: yup.string().required(),
owned_share: yup.number().required(),
owned_area: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createGataOwnerMutation)
export const GataOwnerCreateForm = <GenericCreateUpdateForm title="Create Gata Owner" formObject={formObject}/>
export const GataOwnerCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("date_of_ownership","Date Of Ownership"),FormField("gata","Gata"),FormField("owner","Owner"),FormField("owner_details","Owner Details"),FormField("owned_share","Owned Share"),FormField("owned_area","Owned Area")]
   const mutation = props.edit? updateGataOwnerMutation:createGataOwnerMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_gata_owner { id khatauni_id date_of_ownership gata owner_id owner_details owned_share owned_area }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Gata Owner"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
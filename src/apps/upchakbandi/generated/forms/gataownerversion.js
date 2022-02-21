
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateGataOwnerVersionMutation = `mutation something($id:String!, $khatauni:String!, $gata:String!, $date_of_ownership:String!, $owner:String!, $owner_details:String!, $owned_share:String!, $owned_area:String!){
    update_gata_owner_version(id: $id, khatauni: $khatauni, gata: $gata, date_of_ownership: $date_of_ownership, owner: $owner, owner_details: $owner_details, owned_share: $owned_share, owned_area: $owned_area) {
        gata_owner_version {id khatauni gata date_of_ownership owner owner_details owned_share owned_area }
      ok
      errormessage
      
    }
    }`
  
export const createGataOwnerVersionMutation = `mutation something($khatauni:String!, $gata:String!, $date_of_ownership:String!, $owner:String!, $owner_details:String!, $owned_share:String!, $owned_area:String!){
        create_gata_owner_version(khatauni: $khatauni, gata: $gata, date_of_ownership: $date_of_ownership, owner: $owner, owner_details: $owner_details, owned_share: $owned_share, owned_area: $owned_area) {
            gata_owner_version {id khatauni gata date_of_ownership owner owner_details owned_share owned_area }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("gata","Gata"),FormField("date_of_ownership","Date Of Ownership"),FormField("owner","Owner"),FormField("owner_details","Owner Details"),FormField("owned_share","Owned Share"),FormField("owned_area","Owned Area")]
const yupSchema = yup.object({
gata: yup.string().required(),
owned_share: yup.number().required(),
owned_area: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createGataOwnerVersionMutation)
export const GataOwnerVersionCreateForm = <GenericCreateUpdateForm title="Create Gata Owner Version" formObject={formObject}/>
export const GataOwnerVersionCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("gata","Gata"),FormField("date_of_ownership","Date Of Ownership"),FormField("owner","Owner"),FormField("owner_details","Owner Details"),FormField("owned_share","Owned Share"),FormField("owned_area","Owned Area")]
   const mutation = props.edit? updateGataOwnerVersionMutation:createGataOwnerVersionMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_gata_owner_version { id khatauni_id gata date_of_ownership owner_id owner_details owned_share owned_area }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Gata Owner Version"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    
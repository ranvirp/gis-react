
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateGataOwnerMutation = `mutation something($id:String!, $khatauni:String!, $gata:String!, $owner:String!, $owned_share:String!, $owned_area:String!, $amaldaramad:String!){
    update_gata_owner(id: $id, khatauni: $khatauni, gata: $gata, owner: $owner, owned_share: $owned_share, owned_area: $owned_area, amaldaramad: $amaldaramad) {
        gata_owner {id khatauni gata owner owned_share owned_area amaldaramad }
      ok
      errormessage
      
    }
    }`
  
export const createGataOwnerMutation = `mutation something($khatauni:String!, $gata:String!, $owner:String!, $owned_share:String!, $owned_area:String!, $amaldaramad:String!){
        create_gata_owner(khatauni: $khatauni, gata: $gata, owner: $owner, owned_share: $owned_share, owned_area: $owned_area, amaldaramad: $amaldaramad) {
            gata_owner {id khatauni gata owner owned_share owned_area amaldaramad }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("gata","Gata"),FormField("owner","Owner"),FormField("owned_share","Owned Share"),FormField("owned_area","Owned Area"),FormField("amaldaramad","Amaldaramad")]
const yupSchema = yup.object({
gata: yup.string().required(),
owned_share: yup.number().required(),
owned_area: yup.number().required(),
amaldaramad: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createGataOwnerMutation)
export const GataOwnerCreateForm = <GenericCreateUpdateForm title="Create Gata Owner" formObject={formObject}/>
export const GataOwnerCreateUpdateForm = (props)=> {
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("gata","Gata"),FormField("owner","Owner"),FormField("owned_share","Owned Share"),FormField("owned_area","Owned Area"),FormField("amaldaramad","Amaldaramad")]
   const mutation = props.pk? updateGataOwnerMutation:createGataOwnerMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "Gata Owner"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    
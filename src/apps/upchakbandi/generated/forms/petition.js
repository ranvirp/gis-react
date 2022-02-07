
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updatePetitionMutation = `mutation something($id:String!, $khatauni:String!, $date_of_petition:String!, $name_of_petitioner:String!, $case_no:String!){
    update_petition(id: $id, khatauni: $khatauni, date_of_petition: $date_of_petition, name_of_petitioner: $name_of_petitioner, case_no: $case_no) {
        petition {id khatauni date_of_petition name_of_petitioner case_no }
      ok
      errormessage
      
    }
    }`
  
export const createPetitionMutation = `mutation something($khatauni:String!, $date_of_petition:String!, $name_of_petitioner:String!, $case_no:String!){
        create_petition(khatauni: $khatauni, date_of_petition: $date_of_petition, name_of_petitioner: $name_of_petitioner, case_no: $case_no) {
            petition {id khatauni date_of_petition name_of_petitioner case_no }
          ok
          errormessage

        }
        }`

const formFields = [FormField("khatauni","Khatauni"),FormField("date_of_petition","Date Of Petition"),FormField("name_of_petitioner","Name Of Petitioner"),FormField("case_no","Case No")]
const yupSchema = yup.object({
name_of_petitioner: yup.string().required(),
case_no: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createPetitionMutation)
export const PetitionCreateForm = <GenericCreateUpdateForm title="Create Petition" formObject={formObject}/>
export const PetitionCreateUpdateForm = (props)=> {
   const formFields = [FormField("id","Id"),FormField("khatauni","Khatauni"),FormField("date_of_petition","Date Of Petition"),FormField("name_of_petitioner","Name Of Petitioner"),FormField("case_no","Case No")]
   const mutation = props.pk? updatePetitionMutation:createPetitionMutation
   const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,mutation)

   return (
   <GenericCreateUpdateForm title={props.pk?"Update":"Create" + "Petition"} pk={props.pk} defaultValues={props.defaultValues} formObject={formObject}/>
   )
}
    
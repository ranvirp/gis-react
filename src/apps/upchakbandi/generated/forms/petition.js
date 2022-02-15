
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updatePetitionMutation = `mutation something($id:String!, $chakbandi:String!, $date_of_petition:String!, $name_of_petitioner:String!, $case_no:String!){
    update_petition(id: $id, chakbandi: $chakbandi, date_of_petition: $date_of_petition, name_of_petitioner: $name_of_petitioner, case_no: $case_no) {
        petition {id chakbandi date_of_petition name_of_petitioner case_no }
      ok
      errormessage
      
    }
    }`
  
export const createPetitionMutation = `mutation something($chakbandi:String!, $date_of_petition:String!, $name_of_petitioner:String!, $case_no:String!){
        create_petition(chakbandi: $chakbandi, date_of_petition: $date_of_petition, name_of_petitioner: $name_of_petitioner, case_no: $case_no) {
            petition {id chakbandi date_of_petition name_of_petitioner case_no }
          ok
          errormessage

        }
        }`

const formFields = [FormField("chakbandi","Chakbandi"),FormField("date_of_petition","Date Of Petition"),FormField("name_of_petitioner","Name Of Petitioner"),FormField("case_no","Case No")]
const yupSchema = yup.object({
name_of_petitioner: yup.string().required(),
case_no: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createPetitionMutation)
export const PetitionCreateForm = <GenericCreateUpdateForm title="Create Petition" formObject={formObject}/>
export const PetitionCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("chakbandi","Chakbandi"),FormField("date_of_petition","Date Of Petition"),FormField("name_of_petitioner","Name Of Petitioner"),FormField("case_no","Case No")]
   const mutation = props.edit? updatePetitionMutation:createPetitionMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_petition { id chakbandi_id date_of_petition name_of_petitioner case_no }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Petition"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    

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

const formFields = [FormField("khatauni","Khatauni"),FormField("date_of_petition","Date Of Petition",null,4),FormField("name_of_petitioner","Name Of Petitioner",null,4),FormField("case_no","Case No",null,4)]
const yupSchema = yup.object({
name_of_petitioner: yup.string().required(),
case_no: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createPetitionMutation)
export const PetitionCreateForm = <GenericCreateUpdateForm title="My Form" formObject={formObject}/>
   
    
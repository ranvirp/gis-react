import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents from "../../inputparameters";
import * as yup from 'yup'
const formFields = [FormField('khatauni', 'Khatauni')]
const yupSchema = yup.object({'khatauni':yup.string().required()}).required();
const formObject = new FormObject(defaultComponents,formFields,yupSchema,'')
export const MyGataForm = <GenericCreateUpdateForm title="My Form" formObject={formObject} defaultValues={{}}/>
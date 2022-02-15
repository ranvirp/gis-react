
import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateLandCategoryMutation = `mutation something($code:String!, $category:String!, $category_eng:String!, $name:String!, $name_eng:String!){
    update_land_category(code: $code, category: $category, category_eng: $category_eng, name: $name, name_eng: $name_eng) {
        land_category {code category category_eng name name_eng }
      ok
      errormessage
      
    }
    }`
  
export const createLandCategoryMutation = `mutation something($category:String!, $category_eng:String!, $name:String!, $name_eng:String!){
        create_land_category(category: $category, category_eng: $category_eng, name: $name, name_eng: $name_eng) {
            land_category {code category category_eng name name_eng }
          ok
          errormessage

        }
        }`

const formFields = [FormField("category","Category"),FormField("category_eng","Category Eng"),FormField("name","Name"),FormField("name_eng","Name Eng")]
const yupSchema = yup.object({
category: yup.string().required(),
category_eng: yup.string().required(),
name: yup.string().required(),
name_eng: yup.string().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createLandCategoryMutation)
export const LandCategoryCreateForm = <GenericCreateUpdateForm title="Create Land Category" formObject={formObject}/>
export const LandCategoryCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("code","Code"),FormField("category","Category"),FormField("category_eng","Category Eng"),FormField("name","Name"),FormField("name_eng","Name Eng")]
   const mutation = props.edit? updateLandCategoryMutation:createLandCategoryMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_land_category { code category category_eng name name_eng }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Land Category"} pk={"code"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    

import React from "react";
import {FormField, FormObject, GenericCreateUpdateForm} from "../../../../components/forms/GenericCreateForm";
import defaultComponents,{defaultProps} from "../../inputparameters";
import * as yup from 'yup'
export const updateTaskMutation = `mutation something($id:String!, $app_name:String!, $app_id:String!, $task_name:String!, $progress:String!){
    update_task(id: $id, app_name: $app_name, app_id: $app_id, task_name: $task_name, progress: $progress) {
        task {id app_name app_id task_name progress }
      ok
      errormessage
      
    }
    }`
  
export const createTaskMutation = `mutation something($app_name:String!, $app_id:String!, $task_name:String!, $progress:String!){
        create_task(app_name: $app_name, app_id: $app_id, task_name: $task_name, progress: $progress) {
            task {id app_name app_id task_name progress }
          ok
          errormessage

        }
        }`

const formFields = [FormField("app_name","App Name"),FormField("app_id","App Id"),FormField("task_name","Task Name"),FormField("progress","Progress")]
const yupSchema = yup.object({
app_name: yup.string().required(),
app_id: yup.string().required(),
task_name: yup.string().required(),
progress: yup.number().required(),
 }).required();

const formObject = new FormObject(defaultProps,defaultComponents,formFields,yupSchema,createTaskMutation)
export const TaskCreateForm = <GenericCreateUpdateForm title="Create Task" formObject={formObject}/>
export const TaskCreateUpdateForm = (props)=> {
   
   const formFields = [FormField("id","Id"),FormField("app_name","App Name"),FormField("app_id","App Id"),FormField("task_name","Task Name"),FormField("progress","Progress")]
   const mutation = props.edit? updateTaskMutation:createTaskMutation
   const defprops = props.edit ? {}: defaultProps
   const formObject = new FormObject(defprops,defaultComponents,formFields,yupSchema,mutation,props.afterSubmitFn, props.variablesFn, props.debug)
   //const myQuery = `query a{all_task { id app_name app_id task_name status progress }}`
   

   return (
   <GenericCreateUpdateForm title={props.pk?"Update ":"Create " + "Task"} pk={"id"} defaultValues={props.defaultValues} formObject={formObject} {...props}/>
   )
}
    

import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {TaskCreateUpdateForm} from "../forms/task";
export const TaskQuery = `query a {all_task { id  app_name  app_id  task_name  status  progress }  }`
export const TaskFilterQuery = `query a($filter:String!) {task_by_filter(filter: $filter){ id  app_name  app_id  task_name  status  progress }  }`
const TaskColumns = [
{ id: 'app_name',label: 'App Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'app_id',label: 'App Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'task_name',label: 'Task Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'progress',label: 'Progress',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const TaskReportObject = new ReportObject(TaskColumns,TaskQuery,{},(value)=>{
    const results = value['all_task']

    return results.map ((value)=>{ return value})
})
export const TaskByFilter = (props) => {
const TaskReportObject = new ReportObject(props.columns??TaskColumns,TaskFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['task_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TaskReportObject}/>
    )
}
export const TaskAll = (props) => {
const TaskReportObject = new ReportObject(props.columns??TaskColumns,TaskQuery,{},(value)=>{
    const results = value['all_task']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TaskReportObject}/>
    )
}
export const TaskWithEdit = (props) => {
TaskColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const TaskReportObject = new ReportObject(props.columns??TaskColumns,TaskQuery,{},(value)=>{
    const results = value['all_task']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <TaskCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TaskReportObject}/>
    )
}
export const TaskList = <GenericReportWithStickyHead reportObject={TaskReportObject}/>
   
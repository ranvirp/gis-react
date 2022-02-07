
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {OfficerCreateUpdateForm} from "../forms/officer";
const OfficerQuery = `query a {all_officer { id  name  name_eng  mobile_no  unique_id }  }`
const OfficerFilterQuery = `query a($filter:String!) {officer_by_filter(filter: $filter){ id  name  name_eng  mobile_no  unique_id }  }`
const OfficerColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'name',label: 'Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'name_eng',label: 'Name Eng',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'mobile_no',label: 'Mobile No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'unique_id',label: 'Unique Id',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const OfficerReportObject = new ReportObject(OfficerColumns,OfficerQuery,{},(value)=>{
    const results = value['all_officer']

    return results.map ((value)=>{ return value})
})
export const OfficerByFilter = (props) => {
const OfficerReportObject = new ReportObject(props.columns??OfficerColumns,OfficerFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['officer_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={OfficerReportObject}/>
    )
}
export const OfficerAll = (props) => {
const OfficerReportObject = new ReportObject(props.columns??OfficerColumns,OfficerQuery,{},(value)=>{
    const results = value['all_officer']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={OfficerReportObject}/>
    )
}
export const OfficerWithEdit = (props) => {
OfficerColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const OfficerReportObject = new ReportObject(props.columns??OfficerColumns,OfficerQuery,{},(value)=>{
    const results = value['all_officer']
     const comp = <OfficerCreateUpdateForm pk="id" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={OfficerReportObject}/>
    )
}
export const OfficerList = <GenericReportWithStickyHead reportObject={OfficerReportObject}/>
   

import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {AuditlogsCreateUpdateForm} from "../forms/auditlogs";
const AuditlogsQuery = `query a {all_auditlogs { id  object_id  object_name  object_value  object_hash  type_of_action  hash_code  action_by  action_on }  }`
const AuditlogsFilterQuery = `query a($filter:String!) {auditlogs_by_filter(filter: $filter){ id  object_id  object_name  object_value  object_hash  type_of_action  hash_code  action_by  action_on }  }`
const AuditlogsColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'object_id',label: 'Object Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'object_name',label: 'Object Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'object_value',label: 'Object Value',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'object_hash',label: 'Object Hash',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'type_of_action',label: 'Type Of Action',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'hash_code',label: 'Hash Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'action_by',label: 'Action By',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'action_on',label: 'Action On',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const AuditlogsReportObject = new ReportObject(AuditlogsColumns,AuditlogsQuery,{},(value)=>{
    const results = value['all_auditlogs']

    return results.map ((value)=>{ return value})
})
export const AuditlogsByFilter = (props) => {
const AuditlogsReportObject = new ReportObject(props.columns??AuditlogsColumns,AuditlogsFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['auditlogs_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={AuditlogsReportObject}/>
    )
}
export const AuditlogsAll = (props) => {
const AuditlogsReportObject = new ReportObject(props.columns??AuditlogsColumns,AuditlogsQuery,{},(value)=>{
    const results = value['all_auditlogs']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={AuditlogsReportObject}/>
    )
}
export const AuditlogsWithEdit = (props) => {
AuditlogsColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const AuditlogsReportObject = new ReportObject(props.columns??AuditlogsColumns,AuditlogsQuery,{},(value)=>{
    const results = value['all_auditlogs']
     const comp = <AuditlogsCreateUpdateForm pk="id" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={AuditlogsReportObject}/>
    )
}
export const AuditlogsList = <GenericReportWithStickyHead reportObject={AuditlogsReportObject}/>
   
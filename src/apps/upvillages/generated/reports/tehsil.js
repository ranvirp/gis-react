
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {TehsilCreateUpdateForm} from "../forms/tehsil";
const TehsilQuery = `query a {all_tehsil {district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  }`
const TehsilFilterQuery = `query a($filter:String!) {tehsil_by_filter(filter: $filter){district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  }`
const TehsilColumns = [
{ id: 'district_code',label: 'District Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'tname',label: 'Tname',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'tehsil_code_census',label: 'Tehsil Code Census',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'tname_eng',label: 'Tname Eng',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const TehsilReportObject = new ReportObject(TehsilColumns,TehsilQuery,{},(value)=>{
    const results = value['all_tehsil']

    return results.map ((value)=>{ return value})
})
export const TehsilByFilter = (props) => {
const TehsilReportObject = new ReportObject(props.columns??TehsilColumns,TehsilFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['tehsil_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TehsilReportObject}/>
    )
}
export const TehsilAll = (props) => {
const TehsilReportObject = new ReportObject(props.columns??TehsilColumns,TehsilQuery,{},(value)=>{
    const results = value['all_tehsil']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TehsilReportObject}/>
    )
}
export const TehsilWithEdit = (props) => {
TehsilColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const TehsilReportObject = new ReportObject(props.columns??TehsilColumns,TehsilQuery,{},(value)=>{
    const results = value['all_tehsil']
     const comp = <TehsilCreateUpdateForm pk="tehsil_code_census" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TehsilReportObject}/>
    )
}
export const TehsilList = <GenericReportWithStickyHead reportObject={TehsilReportObject}/>
   
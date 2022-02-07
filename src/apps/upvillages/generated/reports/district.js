
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {DistrictCreateUpdateForm} from "../forms/district";
const DistrictQuery = `query a {all_district { dname  district_code_census  dname_eng }  }`
const DistrictFilterQuery = `query a($filter:String!) {district_by_filter(filter: $filter){ dname  district_code_census  dname_eng }  }`
const DistrictColumns = [
{ id: 'dname',label: 'Dname',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'district_code_census',label: 'District Code Census',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'dname_eng',label: 'Dname Eng',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const DistrictReportObject = new ReportObject(DistrictColumns,DistrictQuery,{},(value)=>{
    const results = value['all_district']

    return results.map ((value)=>{ return value})
})
export const DistrictByFilter = (props) => {
const DistrictReportObject = new ReportObject(props.columns??DistrictColumns,DistrictFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['district_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={DistrictReportObject}/>
    )
}
export const DistrictAll = (props) => {
const DistrictReportObject = new ReportObject(props.columns??DistrictColumns,DistrictQuery,{},(value)=>{
    const results = value['all_district']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={DistrictReportObject}/>
    )
}
export const DistrictWithEdit = (props) => {
DistrictColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const DistrictReportObject = new ReportObject(props.columns??DistrictColumns,DistrictQuery,{},(value)=>{
    const results = value['all_district']
     const comp = <DistrictCreateUpdateForm pk="district_code_census" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={DistrictReportObject}/>
    )
}
export const DistrictList = <GenericReportWithStickyHead reportObject={DistrictReportObject}/>
   
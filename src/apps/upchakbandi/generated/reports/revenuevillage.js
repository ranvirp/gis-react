
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {RevenueVillageCreateUpdateForm} from "../forms/revenuevillage";
const RevenueVillageQuery = `query a {all_revenue_village { vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new tehsil_code{district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng } district_code{ dname  district_code_census  dname_eng } }  }`
const RevenueVillageFilterQuery = `query a($filter:String!) {revenue_village_by_filter(filter: $filter){ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new tehsil_code{district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng } district_code{ dname  district_code_census  dname_eng } }  }`
const RevenueVillageColumns = [
{ id: 'vname',label: 'Vname',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'village_code_census',label: 'Village Code Census',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'vname_eng',label: 'Vname Eng',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'pname',label: 'Pname',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'flg_chakbandi',label: 'Flg Chakbandi',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'flg_survey',label: 'Flg Survey',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'pargana_code_new',label: 'Pargana Code New',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'tehsil_code',label: 'Tehsil Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'district_code',label: 'District Code',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const RevenueVillageReportObject = new ReportObject(RevenueVillageColumns,RevenueVillageQuery,{},(value)=>{
    const results = value['all_revenue_village']

    return results.map ((value)=>{ return value})
})
export const RevenueVillageByFilter = (props) => {
const RevenueVillageReportObject = new ReportObject(props.columns??RevenueVillageColumns,RevenueVillageFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['revenue_village_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={RevenueVillageReportObject}/>
    )
}
export const RevenueVillageAll = (props) => {
const RevenueVillageReportObject = new ReportObject(props.columns??RevenueVillageColumns,RevenueVillageQuery,{},(value)=>{
    const results = value['all_revenue_village']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={RevenueVillageReportObject}/>
    )
}
export const RevenueVillageWithEdit = (props) => {
RevenueVillageColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const RevenueVillageReportObject = new ReportObject(props.columns??RevenueVillageColumns,RevenueVillageQuery,{},(value)=>{
    const results = value['all_revenue_village']
     const comp = <RevenueVillageCreateUpdateForm pk="village_code_census" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={RevenueVillageReportObject}/>
    )
}
export const RevenueVillageList = <GenericReportWithStickyHead reportObject={RevenueVillageReportObject}/>
   

import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {KhatauniCreateUpdateForm} from "../forms/khatauni";
export const KhatauniQuery = `query a {all_khatauni { id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng } district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  }`
export const KhatauniFilterQuery = `query a($filter:String!) {khatauni_by_filter(filter: $filter){ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng } district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  }`
const KhatauniColumns = [
{ id: 'fasli_year',label: 'Fasli Year',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'no_of_khatas',label: 'No Of Khatas',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'no_of_gatas',label: 'No Of Gatas',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const KhatauniReportObject = new ReportObject(KhatauniColumns,KhatauniQuery,{},(value)=>{
    const results = value['all_khatauni']

    return results.map ((value)=>{ return value})
})
export const KhatauniByFilter = (props) => {
const KhatauniReportObject = new ReportObject(props.columns??KhatauniColumns,KhatauniFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['khatauni_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhatauniReportObject}/>
    )
}
export const KhatauniAll = (props) => {
const KhatauniReportObject = new ReportObject(props.columns??KhatauniColumns,KhatauniQuery,{},(value)=>{
    const results = value['all_khatauni']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhatauniReportObject}/>
    )
}
export const KhatauniWithEdit = (props) => {
KhatauniColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const KhatauniReportObject = new ReportObject(props.columns??KhatauniColumns,KhatauniQuery,{},(value)=>{
    const results = value['all_khatauni']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <KhatauniCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhatauniReportObject}/>
    )
}
export const KhatauniList = <GenericReportWithStickyHead reportObject={KhatauniReportObject}/>
   
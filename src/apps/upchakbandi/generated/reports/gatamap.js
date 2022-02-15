
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {GataMapCreateUpdateForm} from "../forms/gatamap";
export const GataMapQuery = `query a {all_gata_map { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  new_gata_no  old_gata_no  area  bhaumik_year  status }  }`
export const GataMapFilterQuery = `query a($filter:String!) {gata_map_by_filter(filter: $filter){ id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  new_gata_no  old_gata_no  area  bhaumik_year  status }  }`
const GataMapColumns = [
{ id: 'new_gata_no',label: 'New Gata No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'old_gata_no',label: 'Old Gata No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'bhaumik_year',label: 'Bhaumik Year',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const GataMapReportObject = new ReportObject(GataMapColumns,GataMapQuery,{},(value)=>{
    const results = value['all_gata_map']

    return results.map ((value)=>{ return value})
})
export const GataMapByFilter = (props) => {
const GataMapReportObject = new ReportObject(props.columns??GataMapColumns,GataMapFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['gata_map_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={GataMapReportObject}/>
    )
}
export const GataMapAll = (props) => {
const GataMapReportObject = new ReportObject(props.columns??GataMapColumns,GataMapQuery,{},(value)=>{
    const results = value['all_gata_map']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={GataMapReportObject}/>
    )
}
export const GataMapWithEdit = (props) => {
GataMapColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const GataMapReportObject = new ReportObject(props.columns??GataMapColumns,GataMapQuery,{},(value)=>{
    const results = value['all_gata_map']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <GataMapCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={GataMapReportObject}/>
    )
}
export const GataMapList = <GenericReportWithStickyHead reportObject={GataMapReportObject}/>
   
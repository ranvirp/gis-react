
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {ChakbandiCreateUpdateForm} from "../forms/chakbandi";
export const ChakbandiQuery = `query a {all_chakbandi { id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng } district_code{ dname  district_code_census  dname_eng } }  status }  }`
export const ChakbandiFilterQuery = `query a($filter:String!) {chakbandi_by_filter(filter: $filter){ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng } district_code{ dname  district_code_census  dname_eng } }  status }  }`
const ChakbandiColumns = [
{ id: 'date_of_4notification',label: 'Date Of 4notification',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const ChakbandiReportObject = new ReportObject(ChakbandiColumns,ChakbandiQuery,{},(value)=>{
    const results = value['all_chakbandi']

    return results.map ((value)=>{ return value})
})
export const ChakbandiByFilter = (props) => {
const ChakbandiReportObject = new ReportObject(props.columns??ChakbandiColumns,ChakbandiFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['chakbandi_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiReportObject}/>
    )
}
export const ChakbandiAll = (props) => {
const ChakbandiReportObject = new ReportObject(props.columns??ChakbandiColumns,ChakbandiQuery,{},(value)=>{
    const results = value['all_chakbandi']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiReportObject}/>
    )
}
export const ChakbandiWithEdit = (props) => {
ChakbandiColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const ChakbandiReportObject = new ReportObject(props.columns??ChakbandiColumns,ChakbandiQuery,{},(value)=>{
    const results = value['all_chakbandi']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <ChakbandiCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiReportObject}/>
    )
}
export const ChakbandiList = <GenericReportWithStickyHead reportObject={ChakbandiReportObject}/>
   
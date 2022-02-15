
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {KhatauniBlobCreateUpdateForm} from "../forms/khatauniblob";
export const KhatauniBlobQuery = `query a {all_khatauni_blob { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  date_of_lock  data  hash }  }`
export const KhatauniBlobFilterQuery = `query a($filter:String!) {khatauni_blob_by_filter(filter: $filter){ id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  date_of_lock  data  hash }  }`
const KhatauniBlobColumns = [
{ id: 'date_of_lock',label: 'Date Of Lock',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'data',label: 'Data',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'hash',label: 'Hash',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const KhatauniBlobReportObject = new ReportObject(KhatauniBlobColumns,KhatauniBlobQuery,{},(value)=>{
    const results = value['all_khatauni_blob']

    return results.map ((value)=>{ return value})
})
export const KhatauniBlobByFilter = (props) => {
const KhatauniBlobReportObject = new ReportObject(props.columns??KhatauniBlobColumns,KhatauniBlobFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['khatauni_blob_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhatauniBlobReportObject}/>
    )
}
export const KhatauniBlobAll = (props) => {
const KhatauniBlobReportObject = new ReportObject(props.columns??KhatauniBlobColumns,KhatauniBlobQuery,{},(value)=>{
    const results = value['all_khatauni_blob']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhatauniBlobReportObject}/>
    )
}
export const KhatauniBlobWithEdit = (props) => {
KhatauniBlobColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const KhatauniBlobReportObject = new ReportObject(props.columns??KhatauniBlobColumns,KhatauniBlobQuery,{},(value)=>{
    const results = value['all_khatauni_blob']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <KhatauniBlobCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhatauniBlobReportObject}/>
    )
}
export const KhatauniBlobList = <GenericReportWithStickyHead reportObject={KhatauniBlobReportObject}/>
   
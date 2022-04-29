
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {CourtOrderCreateUpdateForm} from "../forms/courtorder";
export const CourtOrderQuery = `query a {all_court_order { id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part }  }`
export const CourtOrderFilterQuery = `query a($filter:String!) {court_order_by_filter(filter: $filter){ id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part }  }`
const CourtOrderColumns = [
{ id: 'case_no',label: 'Case No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'date_of_order',label: 'Date Of Order',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'operative_part',label: 'Operative Part',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const CourtOrderReportObject = new ReportObject(CourtOrderColumns,CourtOrderQuery,{},(value)=>{
    const results = value['all_court_order']

    return results.map ((value)=>{ return value})
})
export const CourtOrderByFilter = (props) => {
const CourtOrderReportObject = new ReportObject(props.columns??CourtOrderColumns,CourtOrderFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['court_order_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={CourtOrderReportObject}/>
    )
}
export const CourtOrderAll = (props) => {
const CourtOrderReportObject = new ReportObject(props.columns??CourtOrderColumns,CourtOrderQuery,{},(value)=>{
    const results = value['all_court_order']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={CourtOrderReportObject}/>
    )
}
export const CourtOrderWithEdit = (props) => {
CourtOrderColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const CourtOrderReportObject = new ReportObject(props.columns??CourtOrderColumns,CourtOrderQuery,{},(value)=>{
    const results = value['all_court_order']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <CourtOrderCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={CourtOrderReportObject}/>
    )
}
export const CourtOrderList = <GenericReportWithStickyHead reportObject={CourtOrderReportObject}/>
   
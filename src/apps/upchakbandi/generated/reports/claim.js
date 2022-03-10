
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {ClaimCreateUpdateForm} from "../forms/claim";
export const ClaimQuery = `query a {all_claim { id court_order{ id  case_no  trial_case_no  date_of_order  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks }  type_of_claim  status }  }`
export const ClaimFilterQuery = `query a($filter:String!) {claim_by_filter(filter: $filter){ id court_order{ id  case_no  trial_case_no  date_of_order  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks }  type_of_claim  status }  }`
const ClaimColumns = [
{ id: 'type_of_claim',label: 'Type Of Claim',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const ClaimReportObject = new ReportObject(ClaimColumns,ClaimQuery,{},(value)=>{
    const results = value['all_claim']

    return results.map ((value)=>{ return value})
})
export const ClaimByFilter = (props) => {
const ClaimReportObject = new ReportObject(props.columns??ClaimColumns,ClaimFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['claim_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ClaimReportObject}/>
    )
}
export const ClaimAll = (props) => {
const ClaimReportObject = new ReportObject(props.columns??ClaimColumns,ClaimQuery,{},(value)=>{
    const results = value['all_claim']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ClaimReportObject}/>
    )
}
export const ClaimWithEdit = (props) => {
ClaimColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const ClaimReportObject = new ReportObject(props.columns??ClaimColumns,ClaimQuery,{},(value)=>{
    const results = value['all_claim']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <ClaimCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ClaimReportObject}/>
    )
}
export const ClaimList = <GenericReportWithStickyHead reportObject={ClaimReportObject}/>
   
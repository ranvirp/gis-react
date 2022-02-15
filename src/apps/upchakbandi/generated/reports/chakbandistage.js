
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {ChakbandiStageCreateUpdateForm} from "../forms/chakbandistage";
export const ChakbandiStageQuery = `query a {all_chakbandi_stage { id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  date_of_stage  stage }  }`
export const ChakbandiStageFilterQuery = `query a($filter:String!) {chakbandi_stage_by_filter(filter: $filter){ id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  date_of_stage  stage }  }`
const ChakbandiStageColumns = [
{ id: 'date_of_stage',label: 'Date Of Stage',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'stage',label: 'Stage',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const ChakbandiStageReportObject = new ReportObject(ChakbandiStageColumns,ChakbandiStageQuery,{},(value)=>{
    const results = value['all_chakbandi_stage']

    return results.map ((value)=>{ return value})
})
export const ChakbandiStageByFilter = (props) => {
const ChakbandiStageReportObject = new ReportObject(props.columns??ChakbandiStageColumns,ChakbandiStageFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['chakbandi_stage_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiStageReportObject}/>
    )
}
export const ChakbandiStageAll = (props) => {
const ChakbandiStageReportObject = new ReportObject(props.columns??ChakbandiStageColumns,ChakbandiStageQuery,{},(value)=>{
    const results = value['all_chakbandi_stage']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiStageReportObject}/>
    )
}
export const ChakbandiStageWithEdit = (props) => {
ChakbandiStageColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const ChakbandiStageReportObject = new ReportObject(props.columns??ChakbandiStageColumns,ChakbandiStageQuery,{},(value)=>{
    const results = value['all_chakbandi_stage']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <ChakbandiStageCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiStageReportObject}/>
    )
}
export const ChakbandiStageList = <GenericReportWithStickyHead reportObject={ChakbandiStageReportObject}/>
   
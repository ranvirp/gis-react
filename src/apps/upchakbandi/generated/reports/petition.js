
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {PetitionCreateUpdateForm} from "../forms/petition";
export const PetitionQuery = `query a {all_petition { id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  date_of_petition  name_of_petitioner  case_no }  }`
export const PetitionFilterQuery = `query a($filter:String!) {petition_by_filter(filter: $filter){ id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  date_of_petition  name_of_petitioner  case_no }  }`
const PetitionColumns = [
{ id: 'date_of_petition',label: 'Date Of Petition',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'name_of_petitioner',label: 'Name Of Petitioner',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'case_no',label: 'Case No',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const PetitionReportObject = new ReportObject(PetitionColumns,PetitionQuery,{},(value)=>{
    const results = value['all_petition']

    return results.map ((value)=>{ return value})
})
export const PetitionByFilter = (props) => {
const PetitionReportObject = new ReportObject(props.columns??PetitionColumns,PetitionFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['petition_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={PetitionReportObject}/>
    )
}
export const PetitionAll = (props) => {
const PetitionReportObject = new ReportObject(props.columns??PetitionColumns,PetitionQuery,{},(value)=>{
    const results = value['all_petition']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={PetitionReportObject}/>
    )
}
export const PetitionWithEdit = (props) => {
PetitionColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const PetitionReportObject = new ReportObject(props.columns??PetitionColumns,PetitionQuery,{},(value)=>{
    const results = value['all_petition']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <PetitionCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={PetitionReportObject}/>
    )
}
export const PetitionList = <GenericReportWithStickyHead reportObject={PetitionReportObject}/>
   
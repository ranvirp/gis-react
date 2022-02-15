
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {ChakbandiVillageCreateUpdateForm} from "../forms/chakbandivillage";
const ChakbandiVillageQuery = `query a {all_chakbandi_village { id chakbandi{ id  date_of_4notification  status } village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng } district_code{ dname  district_code_census  dname_eng } } }  }`
const ChakbandiVillageFilterQuery = `query a($filter:String!) {chakbandi_village_by_filter(filter: $filter){ id chakbandi{ id  date_of_4notification  status } village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng } district_code{ dname  district_code_census  dname_eng } } }  }`
const ChakbandiVillageColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'chakbandi',label: 'Chakbandi',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'village',label: 'Village',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const ChakbandiVillageReportObject = new ReportObject(ChakbandiVillageColumns,ChakbandiVillageQuery,{},(value)=>{
    const results = value['all_chakbandi_village']

    return results.map ((value)=>{ return value})
})
export const ChakbandiVillageByFilter = (props) => {
const ChakbandiVillageReportObject = new ReportObject(props.columns??ChakbandiVillageColumns,ChakbandiVillageFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['chakbandi_village_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiVillageReportObject}/>
    )
}
export const ChakbandiVillageAll = (props) => {
const ChakbandiVillageReportObject = new ReportObject(props.columns??ChakbandiVillageColumns,ChakbandiVillageQuery,{},(value)=>{
    const results = value['all_chakbandi_village']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiVillageReportObject}/>
    )
}
export const ChakbandiVillageWithEdit = (props) => {
ChakbandiVillageColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const ChakbandiVillageReportObject = new ReportObject(props.columns??ChakbandiVillageColumns,ChakbandiVillageQuery,{},(value)=>{
    const results = value['all_chakbandi_village']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <ChakbandiVillageCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiVillageReportObject}/>
    )
}
export const ChakbandiVillageList = <GenericReportWithStickyHead reportObject={ChakbandiVillageReportObject}/>
   
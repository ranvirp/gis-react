
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {ChakbandiDocumentsCreateUpdateForm} from "../forms/chakbandidocuments";
export const ChakbandiDocumentsQuery = `query a {all_chakbandi_documents { id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status } }  }`
export const ChakbandiDocumentsFilterQuery = `query a($filter:String!) {chakbandi_documents_by_filter(filter: $filter){ id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status } }  }`
const ChakbandiDocumentsColumns = [

];

export const ChakbandiDocumentsReportObject = new ReportObject(ChakbandiDocumentsColumns,ChakbandiDocumentsQuery,{},(value)=>{
    const results = value['all_chakbandi_documents']

    return results.map ((value)=>{ return value})
})
export const ChakbandiDocumentsByFilter = (props) => {
const ChakbandiDocumentsReportObject = new ReportObject(props.columns??ChakbandiDocumentsColumns,ChakbandiDocumentsFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['chakbandi_documents_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiDocumentsReportObject}/>
    )
}
export const ChakbandiDocumentsAll = (props) => {
const ChakbandiDocumentsReportObject = new ReportObject(props.columns??ChakbandiDocumentsColumns,ChakbandiDocumentsQuery,{},(value)=>{
    const results = value['all_chakbandi_documents']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiDocumentsReportObject}/>
    )
}
export const ChakbandiDocumentsWithEdit = (props) => {
ChakbandiDocumentsColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const ChakbandiDocumentsReportObject = new ReportObject(props.columns??ChakbandiDocumentsColumns,ChakbandiDocumentsQuery,{},(value)=>{
    const results = value['all_chakbandi_documents']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <ChakbandiDocumentsCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChakbandiDocumentsReportObject}/>
    )
}
export const ChakbandiDocumentsList = <GenericReportWithStickyHead reportObject={ChakbandiDocumentsReportObject}/>
   
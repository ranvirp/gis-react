
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {KhataCreateUpdateForm} from "../forms/khata";
const KhataQuery = `query a {all_khata { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  khata_no category{ code  category  category_eng  name  name_eng }  area  status }  }`
const KhataFilterQuery = `query a($filter:String!) {khata_by_filter(filter: $filter){ id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  khata_no category{ code  category  category_eng  name  name_eng }  area  status }  }`
const KhataColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khata_no',label: 'Khata No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'category',label: 'Category',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const KhataReportObject = new ReportObject(KhataColumns,KhataQuery,{},(value)=>{
    const results = value['all_khata']

    return results.map ((value)=>{ return value})
})
export const KhataByFilter = (props) => {
const KhataReportObject = new ReportObject(props.columns??KhataColumns,KhataFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['khata_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhataReportObject}/>
    )
}
export const KhataAll = (props) => {
const KhataReportObject = new ReportObject(props.columns??KhataColumns,KhataQuery,{},(value)=>{
    const results = value['all_khata']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhataReportObject}/>
    )
}
export const KhataWithEdit = (props) => {
KhataColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const KhataReportObject = new ReportObject(props.columns??KhataColumns,KhataQuery,{},(value)=>{
    const results = value['all_khata']
     const comp = <KhataCreateUpdateForm pk="id" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhataReportObject}/>
    )
}
export const KhataList = <GenericReportWithStickyHead reportObject={KhataReportObject}/>
   
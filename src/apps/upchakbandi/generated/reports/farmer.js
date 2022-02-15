
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {FarmerCreateUpdateForm} from "../forms/farmer";
export const FarmerQuery = `query a {all_farmer { id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  address  status }  }`
export const FarmerFilterQuery = `query a($filter:String!) {farmer_by_filter(filter: $filter){ id chakbandi{ id  date_of_4notification village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  address  status }  }`
const FarmerColumns = [
{ id: 'unique_id',label: 'Unique Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khatedar_code',label: 'Khatedar Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'mobile_no',label: 'Mobile No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'name',label: 'Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'relationship',label: 'Relationship',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'relative_name',label: 'Relative Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'year_of_birth',label: 'Year Of Birth',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'gender',label: 'Gender',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'address',label: 'Address',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const FarmerReportObject = new ReportObject(FarmerColumns,FarmerQuery,{},(value)=>{
    const results = value['all_farmer']

    return results.map ((value)=>{ return value})
})
export const FarmerByFilter = (props) => {
const FarmerReportObject = new ReportObject(props.columns??FarmerColumns,FarmerFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['farmer_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={FarmerReportObject}/>
    )
}
export const FarmerAll = (props) => {
const FarmerReportObject = new ReportObject(props.columns??FarmerColumns,FarmerQuery,{},(value)=>{
    const results = value['all_farmer']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={FarmerReportObject}/>
    )
}
export const FarmerWithEdit = (props) => {
FarmerColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const FarmerReportObject = new ReportObject(props.columns??FarmerColumns,FarmerQuery,{},(value)=>{
    const results = value['all_farmer']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <FarmerCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={FarmerReportObject}/>
    )
}
export const FarmerList = <GenericReportWithStickyHead reportObject={FarmerReportObject}/>
   

import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {GataOwnerCreateUpdateForm} from "../forms/gataowner";
const GataOwnerQuery = `query a {all_gata_owner { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  gata owner{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  owned_share  owned_area  amaldaramad }  }`
const GataOwnerFilterQuery = `query a($filter:String!) {gata_owner_by_filter(filter: $filter){ id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  gata owner{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  owned_share  owned_area  amaldaramad }  }`
const GataOwnerColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'gata',label: 'Gata',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'owner',label: 'Owner',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'owned_share',label: 'Owned Share',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'owned_area',label: 'Owned Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'amaldaramad',label: 'Amaldaramad',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const GataOwnerReportObject = new ReportObject(GataOwnerColumns,GataOwnerQuery,{},(value)=>{
    const results = value['all_gata_owner']

    return results.map ((value)=>{ return value})
})
export const GataOwnerByFilter = (props) => {
const GataOwnerReportObject = new ReportObject(props.columns??GataOwnerColumns,GataOwnerFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['gata_owner_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={GataOwnerReportObject}/>
    )
}
export const GataOwnerAll = (props) => {
const GataOwnerReportObject = new ReportObject(props.columns??GataOwnerColumns,GataOwnerQuery,{},(value)=>{
    const results = value['all_gata_owner']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={GataOwnerReportObject}/>
    )
}
export const GataOwnerWithEdit = (props) => {
GataOwnerColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const GataOwnerReportObject = new ReportObject(props.columns??GataOwnerColumns,GataOwnerQuery,{},(value)=>{
    const results = value['all_gata_owner']
     const comp = <GataOwnerCreateUpdateForm pk="id" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={GataOwnerReportObject}/>
    )
}
export const GataOwnerList = <GenericReportWithStickyHead reportObject={GataOwnerReportObject}/>
   
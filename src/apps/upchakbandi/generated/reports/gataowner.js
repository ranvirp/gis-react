
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {GataOwnerCreateUpdateForm} from "../forms/gataowner";
export const GataOwnerQuery = `query a {all_gata_owner { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  date_of_ownership  gata owner{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  address  status }  owner_details  owned_share  owned_area }  }`
export const GataOwnerFilterQuery = `query a($filter:String!) {gata_owner_by_filter(filter: $filter){ id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  date_of_ownership  gata owner{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  address  status }  owner_details  owned_share  owned_area }  }`
const GataOwnerColumns = [
{ id: 'date_of_ownership',label: 'Date Of Ownership',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'gata',label: 'Gata',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'owner_details',label: 'Owner Details',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'owned_share',label: 'Owned Share',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'owned_area',label: 'Owned Area',minWidth: 10, align: 'center', format: (value) => value.toString(),}
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
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <GataOwnerCreateUpdateForm pk="id" defaultValues={myValue} />

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
   
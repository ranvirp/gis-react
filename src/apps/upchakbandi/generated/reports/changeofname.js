
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {ChangeOfNameCreateUpdateForm} from "../forms/changeofname";
export const ChangeOfNameQuery = `query a {all_change_of_name { id claim{ id court_order{ id  case_no  trial_case_no  date_of_order  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks }  type_of_claim  status } khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no farmer{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  khatedar_code  slno_in_khata  share  status }  new_name  effective_date }  }`
export const ChangeOfNameFilterQuery = `query a($filter:String!) {change_of_name_by_filter(filter: $filter){ id claim{ id court_order{ id  case_no  trial_case_no  date_of_order  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks }  type_of_claim  status } khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no farmer{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  khatedar_code  slno_in_khata  share  status }  new_name  effective_date }  }`
const ChangeOfNameColumns = [
{ id: 'new_name',label: 'New Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'effective_date',label: 'Effective Date',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const ChangeOfNameReportObject = new ReportObject(ChangeOfNameColumns,ChangeOfNameQuery,{},(value)=>{
    const results = value['all_change_of_name']

    return results.map ((value)=>{ return value})
})
export const ChangeOfNameByFilter = (props) => {
const ChangeOfNameReportObject = new ReportObject(props.columns??ChangeOfNameColumns,ChangeOfNameFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['change_of_name_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChangeOfNameReportObject}/>
    )
}
export const ChangeOfNameAll = (props) => {
const ChangeOfNameReportObject = new ReportObject(props.columns??ChangeOfNameColumns,ChangeOfNameQuery,{},(value)=>{
    const results = value['all_change_of_name']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChangeOfNameReportObject}/>
    )
}
export const ChangeOfNameWithEdit = (props) => {
ChangeOfNameColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const ChangeOfNameReportObject = new ReportObject(props.columns??ChangeOfNameColumns,ChangeOfNameQuery,{},(value)=>{
    const results = value['all_change_of_name']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <ChangeOfNameCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ChangeOfNameReportObject}/>
    )
}
export const ChangeOfNameList = <GenericReportWithStickyHead reportObject={ChangeOfNameReportObject}/>
   
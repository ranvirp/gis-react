
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {InheritanceCreateUpdateForm} from "../forms/inheritance";
const InheritanceQuery = `query a {all_inheritance { id claim{ id petition{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no } claimant{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_claim  type_of_claim  status latest_order{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  petition{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no }  date_of_order  ordering_court{ id  officer{ id  name  name_eng  mobile_no  unique_id }  designation  location_type  location_code  charge_from  charge_to }  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks } } dead_khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  date_of_death legal_heir{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  share }  }`
const InheritanceFilterQuery = `query a($filter:String!) {inheritance_by_filter(filter: $filter){ id claim{ id petition{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no } claimant{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_claim  type_of_claim  status latest_order{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  petition{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no }  date_of_order  ordering_court{ id  officer{ id  name  name_eng  mobile_no  unique_id }  designation  location_type  location_code  charge_from  charge_to }  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks } } dead_khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  date_of_death legal_heir{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  share }  }`
const InheritanceColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'claim',label: 'Claim',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'dead_khatedar',label: 'Dead Khatedar',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'date_of_death',label: 'Date Of Death',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'legal_heir',label: 'Legal Heir',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'share',label: 'Share',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const InheritanceReportObject = new ReportObject(InheritanceColumns,InheritanceQuery,{},(value)=>{
    const results = value['all_inheritance']

    return results.map ((value)=>{ return value})
})
export const InheritanceByFilter = (props) => {
const InheritanceReportObject = new ReportObject(props.columns??InheritanceColumns,InheritanceFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['inheritance_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={InheritanceReportObject}/>
    )
}
export const InheritanceAll = (props) => {
const InheritanceReportObject = new ReportObject(props.columns??InheritanceColumns,InheritanceQuery,{},(value)=>{
    const results = value['all_inheritance']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={InheritanceReportObject}/>
    )
}
export const InheritanceWithEdit = (props) => {
InheritanceColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const InheritanceReportObject = new ReportObject(props.columns??InheritanceColumns,InheritanceQuery,{},(value)=>{
    const results = value['all_inheritance']
     const comp = <InheritanceCreateUpdateForm pk="id" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={InheritanceReportObject}/>
    )
}
export const InheritanceList = <GenericReportWithStickyHead reportObject={InheritanceReportObject}/>
   
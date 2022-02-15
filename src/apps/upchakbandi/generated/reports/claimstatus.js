
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {ClaimStatusCreateUpdateForm} from "../forms/claimstatus";
export const ClaimStatusQuery = `query a {all_claim_status { id claim{ id petition{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  date_of_petition  name_of_petitioner  case_no }  date_of_claim  type_of_claim  status }  status  effective_date latest_order{ id petition{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  date_of_petition  name_of_petitioner  case_no }  date_of_order ordering_court{ id  officer{ id  name  name_eng  mobile_no  unique_id }  designation  location_type  location_code  charge_from  charge_to }  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks } }  }`
export const ClaimStatusFilterQuery = `query a($filter:String!) {claim_status_by_filter(filter: $filter){ id claim{ id petition{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  date_of_petition  name_of_petitioner  case_no }  date_of_claim  type_of_claim  status }  status  effective_date latest_order{ id petition{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  date_of_petition  name_of_petitioner  case_no }  date_of_order ordering_court{ id  officer{ id  name  name_eng  mobile_no  unique_id }  designation  location_type  location_code  charge_from  charge_to }  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks } }  }`
const ClaimStatusColumns = [
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'effective_date',label: 'Effective Date',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const ClaimStatusReportObject = new ReportObject(ClaimStatusColumns,ClaimStatusQuery,{},(value)=>{
    const results = value['all_claim_status']

    return results.map ((value)=>{ return value})
})
export const ClaimStatusByFilter = (props) => {
const ClaimStatusReportObject = new ReportObject(props.columns??ClaimStatusColumns,ClaimStatusFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['claim_status_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ClaimStatusReportObject}/>
    )
}
export const ClaimStatusAll = (props) => {
const ClaimStatusReportObject = new ReportObject(props.columns??ClaimStatusColumns,ClaimStatusQuery,{},(value)=>{
    const results = value['all_claim_status']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ClaimStatusReportObject}/>
    )
}
export const ClaimStatusWithEdit = (props) => {
ClaimStatusColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const ClaimStatusReportObject = new ReportObject(props.columns??ClaimStatusColumns,ClaimStatusQuery,{},(value)=>{
    const results = value['all_claim_status']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <ClaimStatusCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ClaimStatusReportObject}/>
    )
}
export const ClaimStatusList = <GenericReportWithStickyHead reportObject={ClaimStatusReportObject}/>
   
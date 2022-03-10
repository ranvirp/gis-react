
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {ExchangeCreateUpdateForm} from "../forms/exchange";
export const ExchangeQuery = `query a {all_exchange { id claim{ id court_order{ id  case_no  trial_case_no  date_of_order  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks }  type_of_claim  status } partyA{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } partyB{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_exchange  date_of_order  gataA  gataB  areaA  areaB }  }`
export const ExchangeFilterQuery = `query a($filter:String!) {exchange_by_filter(filter: $filter){ id claim{ id court_order{ id  case_no  trial_case_no  date_of_order  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks }  type_of_claim  status } partyA{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } partyB{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_exchange  date_of_order  gataA  gataB  areaA  areaB }  }`
const ExchangeColumns = [
{ id: 'date_of_exchange',label: 'Date Of Exchange',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'date_of_order',label: 'Date Of Order',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'gataA',label: 'Gataa',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'gataB',label: 'Gatab',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'areaA',label: 'Areaa',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'areaB',label: 'Areab',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const ExchangeReportObject = new ReportObject(ExchangeColumns,ExchangeQuery,{},(value)=>{
    const results = value['all_exchange']

    return results.map ((value)=>{ return value})
})
export const ExchangeByFilter = (props) => {
const ExchangeReportObject = new ReportObject(props.columns??ExchangeColumns,ExchangeFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['exchange_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ExchangeReportObject}/>
    )
}
export const ExchangeAll = (props) => {
const ExchangeReportObject = new ReportObject(props.columns??ExchangeColumns,ExchangeQuery,{},(value)=>{
    const results = value['all_exchange']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ExchangeReportObject}/>
    )
}
export const ExchangeWithEdit = (props) => {
ExchangeColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const ExchangeReportObject = new ReportObject(props.columns??ExchangeColumns,ExchangeQuery,{},(value)=>{
    const results = value['all_exchange']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <ExchangeCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={ExchangeReportObject}/>
    )
}
export const ExchangeList = <GenericReportWithStickyHead reportObject={ExchangeReportObject}/>
   
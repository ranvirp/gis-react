
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {TransferCreateUpdateForm} from "../forms/transfer";
export const TransferQuery = `query a {all_transfer { id claim{ id court_order{ id  case_no  trial_case_no  date_of_order  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks }  type_of_claim  status } transferor{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } transferee{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_deed  type_of_deed  gata  total_title_area  sold_area  sold_share }  }`
export const TransferFilterQuery = `query a($filter:String!) {transfer_by_filter(filter: $filter){ id claim{ id court_order{ id  case_no  trial_case_no  date_of_order  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks }  type_of_claim  status } transferor{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } transferee{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_deed  type_of_deed  gata  total_title_area  sold_area  sold_share }  }`
const TransferColumns = [
{ id: 'date_of_deed',label: 'Date Of Deed',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'type_of_deed',label: 'Type Of Deed',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'gata',label: 'Gata',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'total_title_area',label: 'Total Title Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'sold_area',label: 'Sold Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'sold_share',label: 'Sold Share',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const TransferReportObject = new ReportObject(TransferColumns,TransferQuery,{},(value)=>{
    const results = value['all_transfer']

    return results.map ((value)=>{ return value})
})
export const TransferByFilter = (props) => {
const TransferReportObject = new ReportObject(props.columns??TransferColumns,TransferFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['transfer_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TransferReportObject}/>
    )
}
export const TransferAll = (props) => {
const TransferReportObject = new ReportObject(props.columns??TransferColumns,TransferQuery,{},(value)=>{
    const results = value['all_transfer']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TransferReportObject}/>
    )
}
export const TransferWithEdit = (props) => {
TransferColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const TransferReportObject = new ReportObject(props.columns??TransferColumns,TransferQuery,{},(value)=>{
    const results = value['all_transfer']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <TransferCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TransferReportObject}/>
    )
}
export const TransferList = <GenericReportWithStickyHead reportObject={TransferReportObject}/>
   
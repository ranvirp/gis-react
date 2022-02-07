
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {TransferCreateUpdateForm} from "../forms/transfer";
const TransferQuery = `query a {all_transfer { id claim{ id petition{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no } claimant{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_claim  type_of_claim  status latest_order{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  petition{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no }  date_of_order  ordering_court{ id  officer{ id  name  name_eng  mobile_no  unique_id }  designation  location_type  location_code  charge_from  charge_to }  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks } } transferor{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status } transferee{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  date_of_deed  type_of_deed  gata  total_title_area  sold_area  sold_share }  }`
const TransferFilterQuery = `query a($filter:String!) {transfer_by_filter(filter: $filter){ id claim{ id petition{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no } claimant{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_claim  type_of_claim  status latest_order{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  petition{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no }  date_of_order  ordering_court{ id  officer{ id  name  name_eng  mobile_no  unique_id }  designation  location_type  location_code  charge_from  charge_to }  order_txt  operative_part  copy_of_order  section_of_order  appeal_or_revision  remarks } } transferor{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status } transferee{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  date_of_deed  type_of_deed  gata  total_title_area  sold_area  sold_share }  }`
const TransferColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'claim',label: 'Claim',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'transferor',label: 'Transferor',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'transferee',label: 'Transferee',minWidth: 10, align: 'center', format: (value) => value.toString(),},
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
     const comp = <TransferCreateUpdateForm pk="id" defaultValues={results} />
    
    const fn =  (value)=>{ 
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
   
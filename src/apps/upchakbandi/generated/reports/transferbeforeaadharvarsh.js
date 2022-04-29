
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {TransferBeforeAadharvarshCreateUpdateForm} from "../forms/transferbeforeaadharvarsh";
export const TransferBeforeAadharvarshQuery = `query a {all_transfer_before_aadharvarsh { id court_order{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } transferor{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } transferee{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_transfer  gata  sold_area  sold_share }  }`
export const TransferBeforeAadharvarshFilterQuery = `query a($filter:String!) {transfer_before_aadharvarsh_by_filter(filter: $filter){ id court_order{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } transferor{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status } transferee{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status } khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  date_of_transfer  gata  sold_area  sold_share }  }`
const TransferBeforeAadharvarshColumns = [
{ id: 'date_of_transfer',label: 'Date Of Transfer',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'gata',label: 'Gata',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'sold_area',label: 'Sold Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'sold_share',label: 'Sold Share',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const TransferBeforeAadharvarshReportObject = new ReportObject(TransferBeforeAadharvarshColumns,TransferBeforeAadharvarshQuery,{},(value)=>{
    const results = value['all_transfer_before_aadharvarsh']

    return results.map ((value)=>{ return value})
})
export const TransferBeforeAadharvarshByFilter = (props) => {
const TransferBeforeAadharvarshReportObject = new ReportObject(props.columns??TransferBeforeAadharvarshColumns,TransferBeforeAadharvarshFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['transfer_before_aadharvarsh_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TransferBeforeAadharvarshReportObject}/>
    )
}
export const TransferBeforeAadharvarshAll = (props) => {
const TransferBeforeAadharvarshReportObject = new ReportObject(props.columns??TransferBeforeAadharvarshColumns,TransferBeforeAadharvarshQuery,{},(value)=>{
    const results = value['all_transfer_before_aadharvarsh']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TransferBeforeAadharvarshReportObject}/>
    )
}
export const TransferBeforeAadharvarshWithEdit = (props) => {
TransferBeforeAadharvarshColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const TransferBeforeAadharvarshReportObject = new ReportObject(props.columns??TransferBeforeAadharvarshColumns,TransferBeforeAadharvarshQuery,{},(value)=>{
    const results = value['all_transfer_before_aadharvarsh']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <TransferBeforeAadharvarshCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={TransferBeforeAadharvarshReportObject}/>
    )
}
export const TransferBeforeAadharvarshList = <GenericReportWithStickyHead reportObject={TransferBeforeAadharvarshReportObject}/>
   
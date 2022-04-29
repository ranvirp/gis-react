
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {CourtOrderOperativePartCreateUpdateForm} from "../forms/courtorderoperativepart";
export const CourtOrderOperativePartQuery = `query a {all_court_order_operative_part { id court_order{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } before_khata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no category{ code  category  name }  area  status } before_category{ code  category  name } before_gata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  gata_no  area  khata_no  bhaumik_year  status }  before_gata_area  before_khatedar_code before_khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no farmer{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  khatedar_code  slno_in_khata  share  status }  before_khatedar_name  before_relative_name  before_relation_name  before_share  before_exchange_ratio after_khata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no category{ code  category  name }  area  status } after_category{ code  category  name } after_gata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  gata_no  area  khata_no  bhaumik_year  status }  after_gata_area  after_khatedar_code after_khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no farmer{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  khatedar_code  slno_in_khata  share  status }  after_khatedar_name  after_relative_name  after_relation_name  after_share  after_exchange_ratio  date_of_effect }  }`
export const CourtOrderOperativePartFilterQuery = `query a($filter:String!) {court_order_operative_part_by_filter(filter: $filter){ id court_order{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } before_khata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no category{ code  category  name }  area  status } before_category{ code  category  name } before_gata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  gata_no  area  khata_no  bhaumik_year  status }  before_gata_area  before_khatedar_code before_khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no farmer{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  khatedar_code  slno_in_khata  share  status }  before_khatedar_name  before_relative_name  before_relation_name  before_share  before_exchange_ratio after_khata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no category{ code  category  name }  area  status } after_category{ code  category  name } after_gata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  gata_no  area  khata_no  bhaumik_year  status }  after_gata_area  after_khatedar_code after_khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no farmer{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  khatedar_code  slno_in_khata  share  status }  after_khatedar_name  after_relative_name  after_relation_name  after_share  after_exchange_ratio  date_of_effect }  }`
const CourtOrderOperativePartColumns = [
{ id: 'before_gata_area',label: 'Before Gata Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'before_khatedar_code',label: 'Before Khatedar Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'before_khatedar_name',label: 'Before Khatedar Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'before_relative_name',label: 'Before Relative Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'before_relation_name',label: 'Before Relation Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'before_share',label: 'Before Share',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'before_exchange_ratio',label: 'Before Exchange Ratio',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'after_gata_area',label: 'After Gata Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'after_khatedar_code',label: 'After Khatedar Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'after_khatedar_name',label: 'After Khatedar Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'after_relative_name',label: 'After Relative Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'after_relation_name',label: 'After Relation Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'after_share',label: 'After Share',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'after_exchange_ratio',label: 'After Exchange Ratio',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'date_of_effect',label: 'Date Of Effect',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const CourtOrderOperativePartReportObject = new ReportObject(CourtOrderOperativePartColumns,CourtOrderOperativePartQuery,{},(value)=>{
    const results = value['all_court_order_operative_part']

    return results.map ((value)=>{ return value})
})
export const CourtOrderOperativePartByFilter = (props) => {
const CourtOrderOperativePartReportObject = new ReportObject(props.columns??CourtOrderOperativePartColumns,CourtOrderOperativePartFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['court_order_operative_part_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={CourtOrderOperativePartReportObject}/>
    )
}
export const CourtOrderOperativePartAll = (props) => {
const CourtOrderOperativePartReportObject = new ReportObject(props.columns??CourtOrderOperativePartColumns,CourtOrderOperativePartQuery,{},(value)=>{
    const results = value['all_court_order_operative_part']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={CourtOrderOperativePartReportObject}/>
    )
}
export const CourtOrderOperativePartWithEdit = (props) => {
CourtOrderOperativePartColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const CourtOrderOperativePartReportObject = new ReportObject(props.columns??CourtOrderOperativePartColumns,CourtOrderOperativePartQuery,{},(value)=>{
    const results = value['all_court_order_operative_part']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <CourtOrderOperativePartCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={CourtOrderOperativePartReportObject}/>
    )
}
export const CourtOrderOperativePartList = <GenericReportWithStickyHead reportObject={CourtOrderOperativePartReportObject}/>
   

import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {OrdermodificationCreateUpdateForm} from "../forms/ordermodification";
export const OrdermodificationQuery = `query a {all_ordermodification { id court_order{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } order{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part }  status }  }`
export const OrdermodificationFilterQuery = `query a($filter:String!) {ordermodification_by_filter(filter: $filter){ id court_order{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } order{ id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part }  status }  }`
const OrdermodificationColumns = [
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const OrdermodificationReportObject = new ReportObject(OrdermodificationColumns,OrdermodificationQuery,{},(value)=>{
    const results = value['all_ordermodification']

    return results.map ((value)=>{ return value})
})
export const OrdermodificationByFilter = (props) => {
const OrdermodificationReportObject = new ReportObject(props.columns??OrdermodificationColumns,OrdermodificationFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['ordermodification_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={OrdermodificationReportObject}/>
    )
}
export const OrdermodificationAll = (props) => {
const OrdermodificationReportObject = new ReportObject(props.columns??OrdermodificationColumns,OrdermodificationQuery,{},(value)=>{
    const results = value['all_ordermodification']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={OrdermodificationReportObject}/>
    )
}
export const OrdermodificationWithEdit = (props) => {
OrdermodificationColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const OrdermodificationReportObject = new ReportObject(props.columns??OrdermodificationColumns,OrdermodificationQuery,{},(value)=>{
    const results = value['all_ordermodification']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <OrdermodificationCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={OrdermodificationReportObject}/>
    )
}
export const OrdermodificationList = <GenericReportWithStickyHead reportObject={OrdermodificationReportObject}/>
   

import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {PostingsCreateUpdateForm} from "../forms/postings";
export const PostingsQuery = `query a {all_postings { id officer{ id  name  name_eng  mobile_no  unique_id }  designation  location_type  location_code  charge_from  charge_to }  }`
export const PostingsFilterQuery = `query a($filter:String!) {postings_by_filter(filter: $filter){ id officer{ id  name  name_eng  mobile_no  unique_id }  designation  location_type  location_code  charge_from  charge_to }  }`
const PostingsColumns = [
{ id: 'designation',label: 'Designation',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'location_type',label: 'Location Type',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'location_code',label: 'Location Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'charge_from',label: 'Charge From',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'charge_to',label: 'Charge To',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const PostingsReportObject = new ReportObject(PostingsColumns,PostingsQuery,{},(value)=>{
    const results = value['all_postings']

    return results.map ((value)=>{ return value})
})
export const PostingsByFilter = (props) => {
const PostingsReportObject = new ReportObject(props.columns??PostingsColumns,PostingsFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['postings_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={PostingsReportObject}/>
    )
}
export const PostingsAll = (props) => {
const PostingsReportObject = new ReportObject(props.columns??PostingsColumns,PostingsQuery,{},(value)=>{
    const results = value['all_postings']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={PostingsReportObject}/>
    )
}
export const PostingsWithEdit = (props) => {
PostingsColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const PostingsReportObject = new ReportObject(props.columns??PostingsColumns,PostingsQuery,{},(value)=>{
    const results = value['all_postings']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <PostingsCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={PostingsReportObject}/>
    )
}
export const PostingsList = <GenericReportWithStickyHead reportObject={PostingsReportObject}/>
   
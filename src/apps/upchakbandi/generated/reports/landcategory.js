
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {LandCategoryCreateUpdateForm} from "../forms/landcategory";
const LandCategoryQuery = `query a {all_land_category { code  category  category_eng  name  name_eng }  }`
const LandCategoryFilterQuery = `query a($filter:String!) {land_category_by_filter(filter: $filter){ code  category  category_eng  name  name_eng }  }`
const LandCategoryColumns = [
{ id: 'code',label: 'Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'category',label: 'Category',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'category_eng',label: 'Category Eng',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'name',label: 'Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'name_eng',label: 'Name Eng',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const LandCategoryReportObject = new ReportObject(LandCategoryColumns,LandCategoryQuery,{},(value)=>{
    const results = value['all_land_category']

    return results.map ((value)=>{ return value})
})
export const LandCategoryByFilter = (props) => {
const LandCategoryReportObject = new ReportObject(props.columns??LandCategoryColumns,LandCategoryFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['land_category_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={LandCategoryReportObject}/>
    )
}
export const LandCategoryAll = (props) => {
const LandCategoryReportObject = new ReportObject(props.columns??LandCategoryColumns,LandCategoryQuery,{},(value)=>{
    const results = value['all_land_category']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={LandCategoryReportObject}/>
    )
}
export const LandCategoryWithEdit = (props) => {
LandCategoryColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const LandCategoryReportObject = new ReportObject(props.columns??LandCategoryColumns,LandCategoryQuery,{},(value)=>{
    const results = value['all_land_category']
     const comp = <LandCategoryCreateUpdateForm pk="code" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={LandCategoryReportObject}/>
    )
}
export const LandCategoryList = <GenericReportWithStickyHead reportObject={LandCategoryReportObject}/>
   
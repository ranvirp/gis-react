
import React from 'react';
import {Button, Stack, TextField} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {GenericReport, ReportObject} from "../../../../components/reports/GenericReport";
import BasicTable from "../../../../components/tables/tables";
import {PetitionCreateUpdateForm} from "../../generated/forms/petition";
export const PetitionQuery = `query a {all_petition { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  date_of_petition  name_of_petitioner  case_no }  }`
export const PetitionFilterQuery = `query a($filter:String!) {petition_by_filter(filter: $filter){ id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  no_of_gatas  area  status }  date_of_petition  name_of_petitioner  case_no }  }`
const PetitionColumns = [
//{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
//{ id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'date_of_petition',label: 'Date Of Petition',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'name_of_petitioner',label: 'Name Of Petitioner',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'case_no',label: 'Case No',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const PetitionReportObject = new ReportObject(PetitionColumns,PetitionQuery,{},(value)=>{
    const results = value['all_petition']

    return results.map ((value)=>{ return value})
})
export const PetitionByFilter = (props) => {
const PetitionReportObject = new ReportObject(props.columns??PetitionColumns,PetitionFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['petition_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={PetitionReportObject}/>
    )
}
export const PetitionwithFilter = (props) => {
    const [state, setState] = React.useState({filter: '',key:''})
    function myChange(e) {
        const value = e.target.value
        setState({
            ...state,
            filter:JSON.stringify({case_no:value}),
            key:value
        })
    }
    const reportObject = new ReportObject(props.columns ?? PetitionColumns, PetitionFilterQuery, {"filter": state.filter}, (value) => {
        const results = value['petition_by_filter']
        const fn = (value) => {
            const date = new Date(value.date_of_petition)

            value.date_of_petition = date.toLocaleDateString()
            return value
        }

        return results.map(fn)
    })
    return (
        <Stack>
        <TextField label={'Case No'} id={'case_no'} onChange={myChange}/>
     <GenericReport key={state.key} tableComponent={<BasicTable/>} reportObject={reportObject}/>
        </Stack>
    )
}
export const PetitionAll = (props) => {
const PetitionReportObject = new ReportObject(props.columns??PetitionColumns,PetitionQuery,{},(value)=>{
    const results = value['all_petition']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={PetitionReportObject}/>
    )
}
export const PetitionWithEdit = (props) => {
PetitionColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const PetitionReportObject = new ReportObject(props.columns??PetitionColumns,PetitionQuery,{},(value)=>{
    const results = value['all_petition']
    
    const fn =  (value)=>{ 
         const myValue = JSON.parse(JSON.stringify(value))
         if (props.formFn) props.formFn(myValue)
         const comp = <PetitionCreateUpdateForm pk="id" defaultValues={myValue} />

    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={PetitionReportObject}/>
    )
}
export const PetitionList = <GenericReportWithStickyHead reportObject={PetitionReportObject}/>
   
import {Button} from "@mui/material";
import React from "react";
import * as yup from "yup";
import GenericReportWithStickyHead, {ReportObject} from "../../../components/reports/GenericReport";

export const defaultUpdateProcessing = (val) => {
    val.khatauni_id = val.khatauni.id
}

export const KhatauniFn = (value)=>{const val1 = value;val1.village = val1.village.vname; val1.btn = <Button>value</Button>;return val1}
export const KhatauniQuery = `query a {all_khatauni{village{vname} fasli_year no_of_khatas area status} }`
export const KhatauniYupSchema =
    yup.object({
         village:yup.string().required(),
        fasli_year: yup.number().integer().required(),
        no_of_khatas:yup.number().required(),
        area:yup.number().required()
    }).required();
export const KhataYupSchema = yup.object({})
export const KhataQuery = `query a {all_khata{village{vname} fasli_year no_of_khatas area status} }`

export const KhataFn = (value)=>{const val1 = value;val1.village = val1.village.vname; val1.btn = <Button>value</Button>;return val1}
export const KhataAfterSubmitFn = (data, result) => {console.log(data, result)}
export const KhatauniAfterSubmitFn = (data, result) => {console.log(data, result)}
export const GataAfterSubmitFn = (data, result) => {console.log(data, result)}
export const GataFn = (value)=>{const val1 = value;val1.khatauni = val1.khatauni.village.vname; val1.btn = <Button>value</Button>;return val1}
export const FarmerAfterSubmitFn = (data, result) => {console.log(data, result)}
export const FarmerFn = (value)=>{const val1 = value;val1.khatauni = val1.khatauni.village.vname; val1.btn = <Button>value</Button>;return val1}
export const OfficerAfterSubmitFn = (data, result) => {console.log(data, result)}
export const OfficerFn = (value)=>{const val1 = value;val1.khatauni = val1.khatauni.village.vname; val1.btn = <Button>value</Button>;return val1}

export const ClaimAfterSubmitFn = (data, result) => {console.log(data, result)}
export const ClaimFn = (value)=>{ return value}
export const PetitionAfterSubmitFn = (data, result) => {console.log(data, result)}
export const PetitionFn = (value)=>{ return value}
const PetitionQuery = `query a {all_petition { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no }  }`
const PetitionColumns = [
    { id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'date_of_petition',label: 'Date Of Petition',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'name_of_petitioner',label: 'Name Of Petitioner',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'case_no',label: 'Case No',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];
export const PetitionReportObject = new ReportObject(PetitionColumns,PetitionQuery,{},(value)=>{
    const results = value['all_petition']

    return results.map ((value)=>{ value.khatauni = value.khatauni.village.vname + '-' + value.khatauni.fasli_year; return value})
})
export const PetitionReport = <GenericReportWithStickyHead reportObject={PetitionReportObject}/>


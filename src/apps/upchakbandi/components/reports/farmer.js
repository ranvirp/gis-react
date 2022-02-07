
import React from 'react';
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
const FarmerQuery = `query a {all_farmer { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  }`
const FarmerColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'unique_id',label: 'Unique Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khatedar_code',label: 'Khatedar Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'mobile_no',label: 'Mobile No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'name',label: 'Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'relationship',label: 'Relationship',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'relative_name',label: 'Relative Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'year_of_birth',label: 'Year Of Birth',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'gender',label: 'Gender',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'majra',label: 'Majra',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const FarmerReportObject = new ReportObject(FarmerColumns,FarmerQuery,{},(value)=>{
    const results = value['all_farmer']

    return results.map ((value)=>{value.khatauni = value.khatauni.village.vname; return value})
})
export const FarmerList = <GenericReportWithStickyHead reportObject={FarmerReportObject}/>
   
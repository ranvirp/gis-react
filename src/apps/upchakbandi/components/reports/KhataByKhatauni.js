import React, {useState} from "react";
import {GenericReport, ReportObject} from "../../../../components/reports/GenericReport";
import BasicTable from "../../../../components/tables/tables";
import {useForm} from "react-hook-form";
import {Stack, TextField} from "@mui/material";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import Button from "@mui/material/Button";
const khataQuery = `query a($filter:String!) {khata_by_filter(filter:$filter) { id khatauni{ id village{ vname  village_code_census   district_code{ dname  district_code_census  dname_eng } }  fasli_year  }  khata_no category{ code  category    name  }  area  status }  }`
const columns = [
  //  { id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'khata_no',label: 'Khata No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'category',label: 'Category',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
];
function fn(data){
    const results = data['khata_by_filter']
   return  results.map (value=>{
    value.category = value.category.category
       return value
   })
}
export function KhataByKhatauni({khatauni_id})
{
    const [khataNo, setKhataNo] = useState(null)
    const form = useForm()
    function handleSubmit(data)
    {
        if (data.khata_no) setKhataNo(data.khata_no)
    }
    let variables = {khata_no:khataNo,khatauni_id:khatauni_id}
    if (khataNo === '0')
        variables = {khatauni_id:khatauni_id}
    const reportObject = new ReportObject(columns, khataQuery, {filter:JSON.stringify(variables)},fn )
    return (
        <Stack>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <ReactHookFormInput comp={<TextField/>} name={"khata_no"} form={form}/>
                <Button type={"submit"}>Search</Button>
            </form>
      <GenericReport  reportObject={reportObject}/>
        </Stack>
    )
}
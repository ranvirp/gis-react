import React from 'react'
import {Villagedropdown} from "../../../../components/forms/villagedropdown";
import {Button, TextField, Typography} from "@mui/material";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {FarmerFilterQuery} from "../../generated/reports/farmer";
export const ChooseKhatedar = (props) => {

    const [state, setState] = React.useState({khatedar_id:null, name:'hi', initial:true, variables:{}})
    const FarmerColumns = [
        { id: 'action',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),},

        { id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
       // { id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
       // { id: 'unique_id',label: 'Unique Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'khatedar_code',label: 'Khatedar Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'mobile_no',label: 'Mobile No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'name',label: 'Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        //{ id: 'relationship',label: 'Relationship',minWidth: 10, align: 'center', format: (value) => value.toString(),},
       // { id: 'relative_name',label: 'Relative Name',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'year_of_birth',label: 'Year Of Birth',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'gender',label: 'Gender',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'majra',label: 'Majra',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    ];

    const query = `query a($filter:String!){farmer_by_filter (filter:$filter){id khatauni{ id village{ vname  
    village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  
    tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  
    district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  
    unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  address  status }  }`
    var khatauni = null
    const chooseKhatedar = (e) => {

        setState({...state, id:e.target.value, selected:true, initial:true})

    }
    const fn = (d) => {
        console.log(d)
        const results = d['farmer_by_filter']
        return results.map((d)=> {

            d.khatauni = d.khatauni.village.vname
            d.name = d.name + '-' + d.relationship
            d.action = <Button value={d.id} onClick={chooseKhatedar}>CHOOSE</Button>
            return d
        })
    }
    const myChange =  (e) => {
        const name = e.target.value
        const q = {khatauni_id:localStorage.khatauni_id,name__startswith:name}
        //console.log(villcode)
        setState({name:name, initial:false, variables:{"filter":  JSON.stringify(q)}})

    }
    const reportObject = new ReportObject(FarmerColumns, FarmerFilterQuery ,state.variables, fn)
    return (
        <>
        <TextField disabled={true} value={state.id} {...props}/>
            {state.selected?<Typography>Selected {state.name}</Typography>:
        <div>
            <TextField onChange={myChange}/>
            { !state.initial && <GenericReportWithStickyHead key={state.name}  reportObject={reportObject}/>}

        </div>}
        </>
    )
}
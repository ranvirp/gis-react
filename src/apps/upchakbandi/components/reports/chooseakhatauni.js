import React from 'react'
import {Villagedropdown} from "../../../../components/forms/villagedropdown";
import {Button, Typography} from "@mui/material";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
export const ChooseDefaultKhatauni = (props) => {

    const [state, setState] = React.useState({name:'hi', initial:true, variables:{}})
    const mycolumns = [
        { id: 'village',label: 'Village',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'fasli_year',label: 'Fasli Year',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'type_of_khatauni',label: 'Type Of Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'action',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString(),},

    ];
    const query = `query a($filter:String!){khatauni_by_filter (filter:$filter){id village{village_code_census vname} fasli_year type_of_khatauni status}}`
    var khatauni = null
    const chooseKhatauni = (e) => {
        khatauni = JSON.parse(khatauni)
        localStorage.khatauni_id = khatauni.id
        localStorage.khatauni_village_code = khatauni.village.village_code_census
        localStorage.khatauni_village_name = khatauni.village.vname
        setState({selected:true})

    }
    const fn = (d) => {
        const results = d['khatauni_by_filter']
        return results.map((d)=> {
            khatauni = JSON.stringify(d)
            var a = d
            a.village = d.village.vname
            a.status = d.status === 1 ? 'Finalised' : 'Under Process'

            a.action = <Button onClick={chooseKhatauni}>CHOOSE</Button>
            return a
        })
    }
    const myChange =  (e) => {
        const villcode = e.target.value
        var q = {}
        q['village_id'] = villcode
        //console.log(villcode)
        setState({name:villcode, initial:false, variables:{"filter":  JSON.stringify({village_id:villcode})}})

    }
    const reportObject = new ReportObject(mycolumns, query,state.variables, fn)
    return (
        state.selected?<Typography>Selected {localStorage.khatauni_village_name}</Typography>:
        <div>
            <Villagedropdown onChange={myChange}/>
            { !state.initial && <GenericReportWithStickyHead key={state.name}  reportObject={reportObject}/>}

        </div>
    )
}
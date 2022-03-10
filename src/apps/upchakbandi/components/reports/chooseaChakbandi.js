import React from 'react'
import {Villagedropdown} from "../../../../components/forms/villagedropdown";
import {Button, Typography} from "@mui/material";
import GenericReportWithStickyHead, {GenericReport, ReportObject} from "../../../../components/reports/GenericReport";
import BasicTable from "../../../../components/tables/tables";
export const ChooseDefaultChakbandi = (props) => {

    const [state, setState] = React.useState({name:'hi', initial:true, variables:{}})
    const mycolumns = [
        { id: 'village',label: 'Village',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'date_of_4notification',label: 'Date Of 4notification',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'action',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString(),},

    ];
    const query = `query a($filter:String!){chakbandi_by_filter (filter:$filter){id village{village_code_census vname} date_of_4notification status chakbandi_documents_set{type_of_khatauni khatauni{id }}}}`
    var chakbandi = null
    const chooseKChakbandi = (e) => {
        let chakbandi = e.target.getAttribute('chakbandi')
        chakbandi = JSON.parse(chakbandi)
        console.log("chakbandi",chakbandi)
        localStorage.chakbandi_id = chakbandi.id
        localStorage.chakbandi_village_code = chakbandi.village.village_code_census
        localStorage.chakbandi_village_name = chakbandi.village.vname
        localStorage.chakbandi_date_of_4notification = chakbandi.date_of_4notification.toString()
        chakbandi.chakbandi_documents_set.map(value =>
        {
            console.log(value)
            if (value.type_of_khatauni ==='b') localStorage.bid = value.khatauni.id
            else if (value.type_of_khatauni ==='a') localStorage.aid = value.khatauni.id

        })
        console.log(localStorage)

        setState({selected:true})

    }
    const fn = (d) => {
        const results = d['chakbandi_by_filter']
        return results.map((d)=> {
            chakbandi = JSON.stringify(d)
            var a = d
            a.village = d.village.vname
            a.status = d.status === 1 ? 'Finalised' : 'Under Process'

            a.action = <Button chakbandi={chakbandi} onClick={chooseKChakbandi}>CHOOSE</Button>
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

        state.selected?<Typography component={"span"}>Selected {localStorage.chakbandi_village_name}</Typography>:
        <div>
            <Villagedropdown onChange={myChange} label={"चकबंदी ग्राम चुनें"}/>
            { !state.initial && <GenericReport tableComponent={<BasicTable/>} key={state.name}  reportObject={reportObject}/>}

        </div>
    )
}
import {GenericReport, ReportObject} from "../../../../components/reports/GenericReport";
import React from "react";
import BasicTable from "../../../../components/tables/tables";
import Typography from "@mui/material/Typography";
import {Button, Stack} from "@mui/material";
const query = `query {all_chakbandi {id village{village_code_census vname} date_of_4notification status chakbandi_documents_set{type_of_khatauni khatauni{id }}}}`
const mycolumns = [
    { id: 'village',label: 'Village',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'date_of_4notification',label: 'Date Of 4notification',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'action',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString(),},

];

export function AllChakbandi(props)
{
    const [state,setState] = React.useState({variables:{filter:''}})
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
        const results = d['all_chakbandi']
        return results.map((d)=> {

            var a = d
            a.village = d.village.vname
            a.status = d.status === 1 ? 'Finalised' : 'Under Process'
            a.action = <Button chakbandi={chakbandi} onClick={chooseKChakbandi}>CHOOSE</Button>

            return a
        })
    }
    const reportObject = new ReportObject(mycolumns, query, {}, fn)
    return(
        <Stack>
        <Typography variant={"h3"}>सभी चकबंदी ग्राम</Typography>
        <GenericReport tableComponent={<BasicTable/>}   reportObject={reportObject}/>
        </Stack>
    )
}
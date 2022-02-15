import React from "react";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {Dropdown} from "../../../../components/forms/Dropdown";
import {TransferCreateForm, TransferCreateUpdateForm} from "../../generated/forms/transfer";
import {ExchangeCreateForm, ExchangeCreateUpdateForm} from "../../generated/forms/exchange";
import {InheritanceCreateForm, InheritanceCreateUpdateForm} from "../../generated/forms/inheritance";
import {ChooseKhatedar} from "../reports/ChoseKhatedar";
import {PetitionCreateUpdateForm} from "../../generated/forms/petition";
import {PetitionByFilter, PetitionFilterQuery} from "../../generated/reports/petition";
import {ClaimCreateUpdateForm} from "../../generated/forms/claim";
import {GenericReport, GenericReportWithFilter, ReportObject} from "../../../../components/reports/GenericReport";
import BasicTable from "../../../../components/tables/tables";
const dropdwownvalue = ( value) =>{return {key:value,value:value,label:value}}
const claimTypes = [
    dropdwownvalue('excahnge'),dropdwownvalue('transfer'), dropdwownvalue('inheritance')
]
const claimForms = {transfer:<TransferCreateUpdateForm horizontal={false}/>, exchange:<ExchangeCreateUpdateForm/>, inheritance:<InheritanceCreateUpdateForm/>}
 function PetitonWithClaims(props)  {
    const id = props.id
    return (<PetitionByFilter fn={(value)=>{value.khatauni = value.khatauni.id}} filter={JSON.stringify({id:id})}/>)
}
const PetitionColumns = [
//{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
//{ id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'date_of_petition',label: 'Date Of Petition',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'name_of_petitioner',label: 'Name Of Petitioner',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'case_no',label: 'Case No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'btn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString(),},


];
 const PetitionwithFilter = (props) => {
    const [state, setState] = React.useState({filter: '',key:''})
    function myChange(e) {
        const value = e.target.value
        setState({
            ...state,
            filter:JSON.stringify({case_no:value}),
            key:value
        })
    }
    const fn2 = (e) => {
        props.setState(e.target.value)
    }
    const reportObject = new ReportObject(props.columns ?? PetitionColumns, PetitionFilterQuery, {"filter": state.filter}, (value) => {
        const results = value['petition_by_filter']
        const fn = (value) => {
            const date = new Date(value.date_of_petition)

            value.date_of_petition = date.toLocaleDateString()
            value.btn = <Button value={value.id} onClick={fn2}>Add Claim</Button>
            return value
        }

        return results.map(fn)
    })
    return (
        <Stack>
            <PetitionCreateUpdateForm horizontal={true}/>
            <TextField label={'Case No'} id={'case_no'} onChange={myChange}/>
            <GenericReport key={state.key} tableComponent={<BasicTable/>} reportObject={reportObject}/>
        </Stack>
    )
}
export function Claims(props)

{
    const [state, setState] = React.useState({id:'',claimType:null, petitionId:null})
    const fn = (e) =>
    {
        setState({...state, claimType: e.target.value})
    }
    const fn1 = (data,result) => {
        console.log(result)
        setState({...state, petitionCreated: true,id:result.data.create_petition.petition.id})
    }
    function setPetitionId(value) {
        setState({...state, petitionId: value})
}
    const petitionQuery = 'query a($case_no:String!) {petition_by_filter{name, date_of_petition, case_no}}'
    const varsFn = (data) =>
    {
        return {filter:JSON.stringify(data)}
    }
    // <PetitionCreateUpdateForm title="Create Claims" debug={false} horizontal={true} afterSubmitFn={fn1}/>
    return (
        <Stack>
            <PetitionwithFilter setState={setPetitionId}/>


            {
                state.petitionId?<>



            <Dropdown values={claimTypes} id={"ClaimType"} name={"ClaimType"}  label="Claim Type" onChange={fn}/>
            {state.claimType && claimForms[state.claimType]}
                </>:<></> }
        </Stack>
    )
}
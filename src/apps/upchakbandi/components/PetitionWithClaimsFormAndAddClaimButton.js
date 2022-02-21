import React from "react";
import {PetitionByFilter} from "../generated/reports/petition";
import {ClaimCreateForm} from "../generated/forms/claim";
import {Button} from "@mui/material";

export function PetitionWithClaimsFormAndAddClaimButton(props)
{
    const [state,setState] = React.useState({form:false})
    const fn = (value) => {
        value.khatauni = value.khatauni.id;
        value.btn = <Button onClick={(e)=> {setState({...state, form:true})}}>Add Claim</Button>
        return value}
    const PetitionColumns = [
        { id: 'btn',label: '',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'date_of_petition',label: 'Date Of Petition',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'name_of_petitioner',label: 'Name Of Petitioner',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'case_no',label: 'Case No',minWidth: 10, align: 'center', format: (value) => value.toString(),}
    ];
    return (
        //Petition object with petitionId
        <>
            <PetitionByFilter columns={PetitionColumns} fn={fn} filter={JSON.stringify({id:props.id})}/>
            {state.form && ClaimCreateForm}
        </>
    )
}
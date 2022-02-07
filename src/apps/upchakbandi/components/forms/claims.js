import React from "react";
import {PetitionCreateForm} from "./petition";
import {Button,Stack} from "@mui/material";
import {Dropdown} from "../../../../components/forms/dropdown";
import {TransferCreateForm} from "../../generated/forms/transfer";
import {ExchangeCreateForm} from "../../generated/forms/exchange";
import {InheritanceCreateForm} from "../../generated/forms/inheritance";
import {ChooseKhatedar} from "../reports/ChoseKhatedar";
const dropdwownvalue = ( value) =>{return {key:value,value:value,label:value}}
const claimTypes = [
    dropdwownvalue('excahnge'),dropdwownvalue('transfer'), dropdwownvalue('inheritance')
]
const claimForms = {transfer:TransferCreateForm, exchange:ExchangeCreateForm, inheritance:InheritanceCreateForm}
export function Claims(props)

{
    const [state, setState] = React.useState({claimType:null})
    const fn = (e) =>
    {
        setState({...state, claimType: e.target.value})
    }
    return (
        <Stack>
            <ChooseKhatedar id={"name"}/>
            <Dropdown values={claimTypes} id={"ClaimType"} name={"ClaimType"}  label="Claim Type" onChange={fn}/>
            {state.claimType && claimForms[state.claimType]}
           <Button>Hello</Button>
        </Stack>
    )
}
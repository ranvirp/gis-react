import React, {useEffect} from 'react';
import {Dropdown} from "./Dropdown";
import {postGraphSqlQuery} from "../fetcher/graphsqlfetcher";
import Stack from "@mui/material/Stack";
import {graphqlurl} from "../../apps/upchakbandi/settings";

const  queryvillage = ` query something($teh:String!){
villages(vill: { tehsil_code:$teh}) {
        key
        value
        label
    }
}
`

const  querytehsil = `
query something($dist:String!){
    tehsils(tehsil: {district_code:$dist}) {

        key
        value
        label
    }
}
`

const querydistrict = `
query something{
    districts {

        key
        value
        label
    }
}
`

export function Tehsildropdown(props) {
    // console.log(props)

    var selectedValues = {fieldA: null, fieldB: null, fieldC: null}

    const [state, setState] = React.useState({fieldA: [{label:'Loading..', value:'Loading', key:'..'}], fieldB: [], fieldC: [], selectedValues:selectedValues})
    const  getDists = async (e) => {
        var dists = await postGraphSqlQuery(graphqlurl, querydistrict,{})
        dists = dists.errors? {districts:{value:'error'}}:dists.data
        setState({...state,fieldA: dists['districts'], fieldB:[], fieldC:[]})
    }
    const getTehsils = async (e)=> {
        const dist = e.target.value
        setState({...state,fieldB: [{label:'Loading..', value:'Loading', key:'..'}], fieldC:[]})
        var tehsils = await postGraphSqlQuery(graphqlurl, querytehsil,{'dist':dist})
        tehsils = tehsils.errors? {tehsils:{value:'error'}}:tehsils.data
        setState({...state,fieldB: tehsils['tehsils'], fieldC:[]})

    }
    const getVillages = async (e)=> {
        var district_code = state.selectedValues.fieldA
        var tehsil_code = state.selectedValues.fieldB
        setState({...state,fieldC:[{label:'Loading..', value:'Loading', key:'..'}] })
        var villages = await postGraphSqlQuery(graphqlurl, queryvillage,{ 'teh':tehsil_code})
        villages = villages.errors? {villages:{value:'error'}}:villages.data
        setState({...state,fieldC: villages['villages']})
    }
    useEffect(()=>{
        getDists()},[])

    const changeFunctionA = (e) => {
        state.selectedValues.fieldA = e.target.value
        console.log('tehsil',e.target.value)
        getTehsils(e)
    }
    const changeFunctionB = (e) => {
        state.selectedValues.fieldB = e.target.value
        getVillages(e)
    }


    return (
        <Stack direction="rows">
            <Dropdown values={state.fieldA} onChange={changeFunctionA} id={props.fieldAId} onBlur={getDists}
                      name={props.fieldAName} label={props.fieldALabel??'District'} onBlur={getDists}/>
            <Dropdown values={state.fieldB}  id={props.id}
                      name={props.name} label={props.label??'Tehsil'} {...props}/>



        </Stack>
    );
}





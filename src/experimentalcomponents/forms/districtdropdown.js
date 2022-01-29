import React, {useEffect} from 'react';
import {Dropdown} from "./dropdown";
import {postGraphSqlQuery} from "../../components/fetcher/graphsqlfetcher";
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

export function Villagedropdown(props) {
    // console.log(props)
    const graphqlurl = props.graphqlurl
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
        getTehsils(e)
    }
    const changeFunctionB = (e) => {
        state.selectedValues.fieldB = e.target.value
        getVillages(e)
    }
    const changeFunctionC = (e) => {
        state.selectedValues.fieldC = e.target.value
        console.log("villages selected " + e.target.value)
    }

    return (
        <div>
            <Dropdown fieldValue={state.fieldA} changeFunction={changeFunctionA} fieldId={props.fieldAId}
                      fieldName={props.fieldAName} fieldLabel={props.fieldALabel}/>
            <Dropdown fieldValue={state.fieldB} changeFunction={changeFunctionB} fieldId={props.fieldBId}
                      fieldName={props.fieldBName} fieldLabel={props.fieldBLabel}/>
            <Dropdown fieldValue={state.fieldC} changeFunction={changeFunctionC} fieldId={props.fieldCId}
                      fieldName={props.fieldCName} fieldLabel={props.fieldCLabel}/>


        </div>
    );
}





import React, {useEffect} from 'react';
import {Dropdown} from "../../components/forms/Dropdown";
import {postGraphSqlQuery} from "../../components/fetcher/graphsqlfetcher";
import {graphqlurl} from "../upchakbandi/settings";

export function Dependentdropdownthree(props) {
    // console.log(props)
    var selectedValues = {fieldA: null, fieldB: null, fieldC: null}

    const [state, setState] = React.useState({fieldA: [{label:'Loading..', value:'Loading', key:'..'}], fieldB: [], fieldC: [], selectedValues:selectedValues})
    const  getA = async (e) => {
        const aValues = await postGraphSqlQuery(props.graphqlurl, props.queryA,{})
                setState({...state,fieldA: aValues[props.fieldAName], fieldB:[], fieldC:[]})
    }
    const getB = async (e)=> {
        const aValue = e.target.value
        setState({...state,fieldB: [{label:'Loading..', value:'Loading', key:'..'}], fieldC:[]})
        const x = {}
        x[props[fieldAName]] = aValue
        const bValues = await postGraphSqlQuery(graphqlurl, queryB,x)
        setState({...state,fieldB: bValues[props.bName], fieldC:[]})

    }
    const getC = async (e)=> {
        var aValue = state.selectedValues.fieldA
        var bValue = state.selectedValues.fieldB
        setState({...state,fieldC:[{label:'Loading..', value:'Loading', key:'..'}] })
        var x = { }
        x[props[fieldBName]] = bValue
        const cValues = await postGraphSqlQuery(graphqlurl, queryC, x)
         setState({...state,fieldC: cValues[props.fieldCName]})
    }
    useEffect(()=>{
        getA()},[])

    const changeFunctionA = (e) => {
        state.selectedValues.fieldA = e.target.value
        getB(e)
    }
    const changeFunctionB = (e) => {
        state.selectedValues.fieldB = e.target.value
        getC(e)
    }
    const changeFunctionC = (e) => {
        state.selectedValues.fieldC = e.target.value
        props.changeC(e.target.value)
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





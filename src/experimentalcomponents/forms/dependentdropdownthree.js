import React, {useEffect} from 'react';
import {useFormik} from "formik";
import {Select, InputLabel, MenuItem, Box} from "@material-ui/core";
import {FormControl} from "@material-ui/core";
import {Dropdown} from "./dropdown";
import SchemaForm from "./schemabasedform";
const graphqlurl  = (query) => {
    var url = new URL("http://localhost:3000/graphql")
     var   params = {query: query}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    //console.log(url)
    return url
}
const  queryvillage = ` query something($dist:String!,$teh:String!){
villages(vill: {district_code:$dist, tehsil_code:$teh}) {
        key
        value
        label
    }
}
`

function  querytehsil(district_code) {
    return `
query something{
    tehsils(tehsil: {district_code:${district_code}}) {

        key
        value
        label
    }
}
`
}
const querydistrict = `
query something{
    districts {

        key
        value
        label
    }
}
`
export function Dependentdropdownthree(props) {
   // console.log(props)
    var selectedValues = {fieldA: null, fieldB: null, fieldC: null}

    const [state, setState] = React.useState({fieldA: [], fieldB: [], fieldC: [], selectedValues:selectedValues})

    const getDists = ()=> {
        fetch(graphqlurl(querydistrict))
            .then(res => res.json())
            .then(
                (result) => {
                     //debugger;
                   // console.log(result)
                    setState({...state,'fieldA': result['districts'], fieldB:[],fieldC:[]})
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setState({...state, 'fieldA':[{'key':'','value':'','label':'error'}] })
                }
            )
    }
    useEffect(()=>{getDists()},[])






const getTehsils = (e)=> {
    var dist = e.target.value

    console.log( dist)
   // fetch(graphqlurl(querytehsil("'" + district_code + "'")))
    fetch('http://127.0.0.1:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
        query something($dist:String!) {
    tehsils(tehsil: {district_code:$dist}) {

        key
        value
        label
    }
}
      `,
            variables:{'dist':dist}

        }),
    })
        .then(res => res.json())
        .then(
            (result) => {
                // debugger;
                setState({...state,'fieldA':state.fieldA, 'fieldC':[],'fieldB': result['tehsils']})
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
               setState({...state, 'fieldB':[{'key':'','value':'','label':'error'}] })
            }
        )
}
const getVillages = (e)=> {
    var district_code = state.selectedValues.fieldA
    var tehsil_code = state.selectedValues.fieldB
    fetch('http://127.0.0.1:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: queryvillage,
            variables:{'dist':district_code, 'teh':tehsil_code}

        }),
    })
        .then(res => res.json())
        .then(
            (result) => {
                // debugger;
                setState({...state, 'fieldC': result['villages']})
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
               setState(...state,{'fieldB':[{'key':null,'value':null,'label':'error'}] })
            }
        )
}

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
    




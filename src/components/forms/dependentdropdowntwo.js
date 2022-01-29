import React, {useEffect} from 'react';
import {Dropdown} from "./dropdown";
import Stack from "@mui/material/Stack";

export function Dependentdropdowntwo(props) {
    // console.log(props)
    var selectedValues = {fieldA: null, fieldB: null}

    const [state, setState] = React.useState({fieldA: [], fieldB: [], selectedValues:selectedValues})
    const getA = () => {
        props.loadAfn().then(
            (result) => {
                //debugger;
                // console.log(result)
                setState({...state, 'fieldA': result, fieldB: [], fieldC: []})
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setState({...state, 'fieldA': [{'key': '', 'value': '', 'label': 'error'}]})
            }
        )
    }

    useEffect(()=>{getA()},[])
    const getB = (e)=> {
            props.getBfn(e.target.value)
            .then(
                (result) => {
                    // debugger;
                    setState({...state,'fieldA':state.fieldA, 'fieldB': result})
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setState({...state, 'fieldB':[{'key':'','value':'','label':'error'}] })
                }
            )
    }

    const onChangeA = (e) => {
        state.selectedValues.fieldA = e.target.value
        getB(e)
    }
    const onChangeB = (e) => {
        state.selectedValues.fieldB = e.target.value

    }


    return (
        <Stack direction="rows">
            
            <Dropdown values={state.fieldA} onChange={onChangeA} id={props.fieldAId}
                      name={props.fieldAName} label={props.fieldALabel}/>
            <Dropdown values={state.fieldB} onChange={props.onChange} id={props.id}
                      name={props.name} label={props.label}/>


        </Stack>
    );
}





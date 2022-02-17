import React, {useEffect, useRef} from "react";
import {Stack, TextField} from "@mui/material";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {graphqlurl} from "../../settings";
export function KhatedarCodeForm (props)
{
    const [state,setState] = React.useState({val:'',id:'',name:''})
    useEffect(
        ()=>{
            const  value =  fetchData(props.defaultValue ?? '')

            setState({...state, name:value.name, id:value.id})
            },[]
    )
     async function fetchData(value) {
        const query = 'query a($filter:String){farmer_by_filter(filter:$filter){khatedar_code name relationship relative_name address}}'
        const q = {}
        q['khatedar_code'] = value
        q['chakbandi'] = localStorage.chakbandi_id

        const results = await postGraphSqlQuery(graphqlurl, query, {"filter":JSON.stringify(q)})
        if (!results.errors) {
            const farmers = results.data.farmer_by_filter
            if (farmers.length == 0) {
                setState( {name:'<None>',id:''})
            } else {
                const farmer = farmers[0]
                console.log(farmer)
                setState({name: farmer.name + '-' + farmer.relationship + '/o' + farmer.relative_name, id: farmer.id})
            }
        }
        else {setState( {name:'<None>',id:''})}
    }
    function fn(e) {
       const  value =  fetchData(e.target.value)

        setState({name:value.name, id:value.id, val:e.target.value})
        props.onChange(e)

    }
    return (
        <Stack direction={"row"}>
        <TextField  {...props}  onChange={fn}  />
            <TextField  key={state.name} value={state.name} size={100}/>
        </Stack>
    )
}
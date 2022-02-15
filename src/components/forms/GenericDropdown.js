import React from "react"
import {postGraphSqlQuery} from "../fetcher/graphsqlfetcher";
import {graphqlurl} from "../../apps/upchakbandi/settings";

export function GenericDropdown(props)
{
    const [state, setState] = React.useState({values:[]})
    async function fetchData() {
        const results = await postGraphSqlQuery(graphqlurl, props.query,{})
        if (!results.errors) {
            const newValues = props.fn(results.data)
            setState({values:newValues})
        }
    }
    return (
        <Dropdown values={state.values} {...props}/>
    )
}
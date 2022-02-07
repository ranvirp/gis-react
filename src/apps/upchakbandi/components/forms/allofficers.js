
import React, {useEffect, useState} from 'react';
import {graphqlurl} from "../../../upchakbandi/settings";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {Dropdown} from "../../../../components/forms/dropdown";
const OfficerQuery = `query a {all_officer { id    name   }  }`

export const  OfficerDropdown =  (props) => {
    const [items, setItems] = useState([])
    const query = props.query ?? OfficerQuery
    const queryname = props.queryname ?? 'all_officer'
    async function fetchData() {
        const result = await postGraphSqlQuery(graphqlurl, query, props.variables??{})
        //console.log(result)
        if (!result.errors) {
            var myres = result.data[queryname]


            myres = myres.map((value) => {
                var val1 = {}
                val1.label =  value.name
                val1.value = value.id
                val1.key = 'officer#' + value.id
                //value = val1
                return val1
            })

            setItems(myres)
        }}
    useEffect( ()=> {
        fetchData()
    },[])
    return (
        <Dropdown values={items} {...props}/>
    );
}




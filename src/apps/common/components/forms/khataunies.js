
import React, {useEffect, useState} from 'react';
import {graphqlurl} from "../../../upchakbandi/settings";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {Dropdown} from "../../../../components/forms/Dropdown";
const KhatauniQuery = `query a {all_khatauni { id village{vname} fasli_year type_of_khatauni  }  }`

const  KhatauniDropdown =  (props) => {
    const [items, setItems] = useState([])
    const query = props.query ?? KhatauniQuery
    const queryname = props.queryname ?? 'all_khatauni'
    async function fetchData() {
        const result = await postGraphSqlQuery(graphqlurl, query, props.variables??{})
        //console.log(result)
        if (!result.errors) {
            var myres = result.data[queryname]


            myres = myres.map((value) => {
                var val1 = {}
                val1.label = value.village.vname + '-' + value.fasli_year + '-' + value.type_of_khatauni
                val1.value = value.id
                val1.key = 'category#' + value.id
                //value = val1
                return val1
            })

            setItems(myres)
        }}
    useEffect( ()=> {
       // console.log('items being loaded')
        fetchData()
    },[JSON.stringify(query), JSON.stringify(props.variables)])
    return (
        <Dropdown {...props} values={items} onChange={props.onChange} id={props.id} onBlur={fetchData}
                  name={props.name} label={props.label} required={props.required}/>
    );
}
export default KhatauniDropdown;



     
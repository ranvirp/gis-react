import React, {useEffect, useState} from 'react';
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {graphqlurl} from "../../settings";
import {Dropdown} from "../../../../components/forms/Dropdown";


const ChakbandiQuery = `query a($id:String) {chakbandi_by_id(id:$id) { id village{vname} date_of_4notification }  }`

export const  ChakbandiDefaultField =  (props) => {
    const [state, setState] = useState([])

    const queryname =  'chakbandi_by_id'
    const id = localStorage.chakbandi_id
    const date_of_4notification = localStorage.chakbandi_date_of_4notification
    const villname = localStorage.chakbandi_village_name
    const values = [{key:'chakbandi1', value:id, label:villname + '-' + date_of_4notification}]

    return (
       <Dropdown values={values} {...props} />
    );
}



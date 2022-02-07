import React, {useEffect, useState} from 'react';
import StickyHeadTable from "../../../../components/tables/stickyheadtable";
import {graphqlurl} from "../../settings";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {Button} from "@mui/material";
const columns = [

    {
        id: 'village',
        label: 'Village',
        minWidth: 10,
        align: 'center',
        format: (value) => value.toString(),
    },
    {
        id: 'fasli_year',
        label: 'Fasli Year',
        minWidth: 70,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'no_of_khatas',
        label: 'No of Khatas',
        minWidth: 70,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'area',
        label: 'Area',
        minWidth: 70,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'btn',
        label: 'Action',
        minWidth: 70,
        align: 'center',
        format: (value) => <Button>value</Button>,
    },
];
const query = `query a {all_khatauni{village{vname} fasli_year no_of_khatas area status} }`
   const  KhatauniList =  (props) => {
       const [items, setItems] = useState([])
        useEffect( ()=> {
            async function fetchData() {
            const result = await postGraphSqlQuery(graphqlurl, query, {})

            if (!result.errors) {
                var myres = result.data.all_khatauni
                myres.map((value)=>{const val1 = value;val1.village = val1.village.vname; val1.btn = <Button>value</Button>;return val1})
               setItems(myres)
            }}
            fetchData()
        },[])
        return (
            <StickyHeadTable columns={columns} items={items}></StickyHeadTable>
        );
}
export default KhatauniList;



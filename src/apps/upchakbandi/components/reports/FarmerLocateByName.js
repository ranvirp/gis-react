import React, {useEffect, useState} from "react"
import {Stack, TextField} from "@mui/material";
import BasicTable from "../../../../components/tables/tables";
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import {GenericTabularReport} from "../../../../components/reports/GenericTabularReport";

const q = 'query a($filter:String!){farmer_by_filter(filter:$filter){id name relative_name khatedar_code}}'
const columns = [
    {id: 'name', label: 'Farmer', minWidth: 10, align: 'center', format: (value) => value.toString(),},
    {
        id: 'relative_name',
        label: 'Name of Relative',
        minWidth: 10,
        align: 'center',
        format: (value) => value.toString(),
    },
    {
        id: 'khatedar_code',
        label: 'Khatedar Code',
        minWidth: 10,
        align: 'center',
        format: (value) => value.toString(),
    },

]
export function FarmerLocalteByName({chakbandi_id, ...props}) {
    const [name, setName] = useState(null)
    const [items, setItems] = useState([])





    function fn1(e) {
        setName(e.target.value)

    }
    useEffect(()=> {
    const results = graphqlFetch(q,{filter:JSON.stringify({chakbandi_id:chakbandi_id,name__startswith:name })},
        'farmer_by_filter')
    results.then (({items,success})=>
    {
        setItems(items)
    })}, [name])
    return (
        <Stack>
            <TextField onChange={fn1} label={"Name"} />

            <GenericTabularReport  key={name} columns={columns} items={items} tableComponent={<BasicTable/>}/>


        </Stack>
    )
}

//  <ReactHookFormInput key={id} form={form} comp={<TextField value={id}/>}  label={"Name"} name={"test"}/>
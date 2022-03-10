import React, {useState} from "react"
import {Stack, TextField} from "@mui/material";
import BasicTable from "../../../../components/tables/tables";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {GenericTabularReport} from "../../../../components/reports/GenericTabularReport";
import Button from "@mui/material/Button";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
const q = 'query a($filter:String!){farmer_by_filter(filter:$filter){id name relative_name khatedar_code}}'

export function FarmerSearch({chakbandi_id,form, ...props})
{
    const [name, setName] = useState('D')
    const [id,setId] = useState('')
    function fn1(e)
    {
        setId(e.target.value)
    }
    function reducer(data)
    {
        return  data.map(value=> {
            value.btn = <Button  value={value.id} onClick={fn1}>Select</Button>
            return value
        })
    }
    const {items, status} = useGraphQlQuery(q,{filter:JSON.stringify({chakbandi_id:chakbandi_id,name__startswith:name })},
        'farmer_by_filter',reducer)
    if (status === 'pending') return ''
    console.log(id)
    const columns = [
        { id: 'name',label: 'Farmer',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'relative_name',label: 'Name of Relative',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        { id: 'khatedar_code',label: 'Khatedar Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
        {id:'btn', label:'',format: (value) => value.toString()},

    ]
    function fn(e)
    {
        setName(e.target.value)
        setId('')
    }
    return (
        <Stack>
            <TextField label={"Name"} onChange={fn}/>

            <ReactHookFormInput  form={form} comp={<TextField /> }  label={"Id"} value={id}  name={props.name}/>
            <GenericTabularReport key={name} columns={columns} items={items} tableComponent={<BasicTable/>}/>
        </Stack>
    )
}
//  <ReactHookFormInput key={id} form={form} comp={<TextField value={id}/>}  label={"Name"} name={"test"}/>
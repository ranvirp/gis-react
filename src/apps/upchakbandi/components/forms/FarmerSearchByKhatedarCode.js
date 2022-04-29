import React, {useEffect, useState} from "react"
import {Stack, TextField} from "@mui/material";
import BasicTable from "../../../../components/tables/tables";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {GenericTabularReport} from "../../../../components/reports/GenericTabularReport";
import Button from "@mui/material/Button";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
const q = 'query a($filter:String!){farmer_by_filter(filter:$filter){id name relative_name khatedar_code}}'
export function FarmerSearchByKhatedarCode({chakbandi_id,form, ...props})
{

    console.log(props)
    const [khatedarCode, setKhatedarCode] = useState(null)
    const [id,setId] = useState(null)
    const [selectedValue, setSelectedValue] = useState('Not selected')
    const khatedar_code = form.watch(props.componentRootName + "." + 'khatedar_code')
    useEffect(
        ()=>{
            setKhatedarCode(khatedar_code)

        },[khatedar_code]
    )
    function fn1(e)
    {
        setId(e.target.value)
        let name = props.name

        form.setValue(name, e.target.value)

        setSelectedValue(e.target.getAttribute('details'))
    }
    function reducer(data)
    {
        return  data.map(value=> {

            value.btn = <Button  details={`${value.khatedar_code}-${value.name}-${value.relative_name}`} value={value.id} onClick={fn1}>Select</Button>
            if (value.khatedar_code == khatedarCode) {
                setSelectedValue(`${value.khatedar_code}-${value.name}-${value.relative_name}`)
            }
            return value
        })
    }
    const {items, status} = useGraphQlQuery(q,{filter:JSON.stringify({chakbandi_id:chakbandi_id,khatedar_code:khatedarCode })},
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
        setKhatedarCode(e.target.value)
        setId(null)
        setSelectedValue('Not Selected')
    }

    return (
        <Stack>
            <TextField label={props.label??"Khatedar Code"} name={props.componentRootName + "." + 'khatedar_code'} defaultValue={form.getValues([props.componentRootName + "." + 'khatedar_code'])[0]} onChange={fn}/>
            <span>{selectedValue}</span>

            <TextField key={id}   {...props}  defaultValue={id} type={"hidden"}/>
            {!id?<GenericTabularReport key={khatedarCode} columns={columns} items={items} tableComponent={<BasicTable/>}/>:''}
        </Stack>
    )
}
//  <ReactHookFormInput key={id} form={form} comp={<TextField value={id}/>}  label={"Name"} name={"test"}/>
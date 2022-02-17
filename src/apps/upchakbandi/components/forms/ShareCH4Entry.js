import React, {useEffect, useMemo, useRef, useState} from "react"
import * as yup from 'yup'

import { TextField} from "@mui/material";

import { useForm} from "react-hook-form";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {ReactHookFormControlledInput} from "../../../../components/forms/ReactHookFormInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {DynamicReactHookForm} from "../../../../components/forms/DynamicReactHookForm";
import {KhatedarCodeForm} from "./KhatedarCode";


const yupSchema = yup.object({
    khata_no:yup.number().integer().required(),
    shares:yup.array(
        yup.object({
            khatedar_code:yup.string().required(),
            share:yup.number().required(),
        })
    )
}).required()
const mycolumns = [
    { id: 'form',label: 'Previous Values',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    // { id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    //{ id: 'bhaumik_year',label: 'Fasli Year',minWidth: 10, align: 'center', format: (value) => value.toString(),},

];
const query = 'query a($filter:String!){khatedar_by_filter(filter:$filter){id khatedar_code share_ch4_set{share}}}'
const fieldInfo = {
    id:{ label: 'ID', pk:true,required: false, defaultValue: ''},
    khatedar_code:{ label: 'Khatedar Code', required: true, defaultValue: '', comp:<KhatedarCodeForm/>},
    share:{label: 'Share', required: true, defaultValue: ''},

}
function defaultSubmitFn(data) {console.log(data)}
function reducer(data) {
    return data.map(value=>{
        const x = {}
        x.id = value.id
        x.khatedar_code = value.khatedar_code
        x.share = value.share_ch4_set[0]?.share
        return x
    })
}
export function AddCH4Share (props)
{
    const newForm = useForm({resolver:yupResolver(yupSchema)})
    const [khata_no,setKhataNo] = useState("")
    function fn1(e) {
        console.log("Khata_no", e.target.value)
        setKhataNo(e.target.value)
    }
    return (<><ReactHookFormControlledInput comp={<TextField/>} label="KhataNo" name={"khata_no"} onChange={fn1} control={newForm.control}/>
        <DataEntryForShare khata_no={khata_no} newForm={newForm}/></> )
}
export function DataEntryForShare({khata_no, newForm}) {


    const {items} = useGraphQlQuery(query, {
        filter: JSON.stringify({
            khatauni_id: localStorage.khatauni_id,
            khata_no: khata_no
        })
    },'khatedar_by_filter',reducer)
    // console.log("myitems", items)

    // return (<p>Hi</p>)
    return (<><DynamicReactHookForm debug={true} onSubmit={defaultSubmitFn} initialValues={items} fieldInfo={fieldInfo} componentName={"shares"} newForm={newForm}/></>)

}

import React, { useState} from "react"
import * as yup from 'yup'

import { TextField} from "@mui/material";

import {useForm} from "react-hook-form";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {ReactHookFormControlledInput} from "../../../../components/forms/ReactHookFormInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {DynamicReactHookForm} from "../../../../components/forms/DynamicReactHookForm";



const yupSchema = yup.object({
    new_gata_no:yup.string().required(),
    old_gatas:yup.array(
                yup.object({
                     old_gata_no:yup.string().required(),
                     area:yup.number().required(),
                })
              )
     }).required()

const query = 'query a($filter:String!){gata_map_by_filter(filter:$filter){id old_gata_no new_gata_no area bhaumik_year}}'
const fieldInfo = {
    id:{ label: 'ID', pk:true,required: false, defaultValue: ''},
    old_gata_no:{ label: 'Old Gata No', required: true, defaultValue: ''},
    area:{label: 'Area', required: true, defaultValue: ''},

}
function defaultSubmitFn(data) {console.log(data)}
export function AddGataMapForm (props)
{
    const newForm = useForm({resolver:yupResolver(yupSchema)})
    const [new_gata_no,setNewGataNo] = useState("")
    function fn1(e) {
        console.log("New Gata_no", e.target.value)
        setNewGataNo(e.target.value)
    }
    return (<><ReactHookFormControlledInput comp={<TextField/>} label="New Gata No" name={"new_gata_no"} onChange={fn1} form={newForm}/>
   <DataEntryForGataMap new_gata_no={new_gata_no} newForm={newForm}/></> )
}
export function DataEntryForGataMap({new_gata_no, newForm}) {


    const {items} = useGraphQlQuery(query, {
        filter: JSON.stringify({
            khatauni_id: localStorage.khatauni_id,
            new_gata_no: new_gata_no
        })
    },'gata_map_by_filter')
   // console.log("myitems", items)

   // return (<p>Hi</p>)
    return (<><DynamicReactHookForm debug={true} onSubmit={defaultSubmitFn} initialValues={items} fieldInfo={fieldInfo} componentName={"old_gatas"} newForm={newForm}/></>)

}

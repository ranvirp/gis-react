import React, { useState} from "react"
import * as yup from 'yup'

import { TextField} from "@mui/material";

import {useForm} from "react-hook-form";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {ReactHookFormControlledInput} from "../../../../components/forms/ReactHookFormInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {DynamicReactHookForm} from "../../../../components/forms/DynamicReactHookForm";
import {defaultSubmitFn} from "../../functions/submitFn";



const yupSchema = yup.object({
    new_gata_no:yup.string().required(),
    old_gatas:yup.array(
                yup.object({
                     old_gata_no:yup.string().required(),
                     area:yup.number().required(),
                })
              )
     }).required()

const query = 'query a($filter:String!){gata_map_by_filter(filter:$filter){id old_gata_no new_gata_no area}}'
const fieldInfo = {
    id:{ label: 'ID', pk:true,required: false, defaultValue: ''},
    old_gata_no:{ label: 'Old Gata No', required: true, defaultValue: ''},
    area:{label: 'Area', required: true, defaultValue: ''},

}
export function AddGataMapForm ({chakbandi_id, khatauni_id, ...props})
{
    const newForm = useForm({resolver:yupResolver(yupSchema)})
    const [new_gata_no,setNewGataNo] = useState("")
    function fn1(e) {
        console.log("New Gata_no", e.target.value)
        setNewGataNo(e.target.value)
    }
    return (<><ReactHookFormControlledInput comp={<TextField/>} label="New Gata No" name={"new_gata_no"} onChange={fn1} form={newForm}/>
   <DataEntryForGataMap key={"new-gata#" + new_gata_no} khatauni_id={khatauni_id} new_gata_no={new_gata_no} newForm={newForm}/></> )
}
export  function DataEntryForGataMap({chakbandi_id,khatauni_id, new_gata_no, newForm}) {


    const {items,status} = useGraphQlQuery(query, {
        filter: JSON.stringify({
            khatauni_id: khatauni_id,
            new_gata_no: new_gata_no
        })
    },'gata_map_by_filter')
   // console.log("myitems", items)


    if (status == 'pending') return 'Loading'
    function submitValues(data) {
        data.chakbandi_id = chakbandi_id
        data.khatauni_id = khatauni_id
        data.new_gata_no = new_gata_no
        console.log(khatauni_id)
        defaultSubmitFn(data, 'gatamapentry', newForm)
    }

    return (<><DynamicReactHookForm debug={true} onSubmit={submitValues} initialValues={items} fieldInfo={fieldInfo} componentName={"old_gatas"} newForm={newForm}/></>)

}

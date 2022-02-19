import React, {useEffect, useMemo, useRef, useState} from "react"
import * as yup from 'yup'

import {Stack, TextField} from "@mui/material";

import { useForm} from "react-hook-form";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {ReactHookFormControlledInput} from "../../../../components/forms/ReactHookFormInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {DynamicReactHookForm} from "../../../../components/forms/DynamicReactHookForm";
import {KhatedarCodeForm} from "./KhatedarCode";
import {GenericReactHookForm} from "../../../../components/forms/GenericReactHookForm";
import {GenericReport, ReportObject} from "../../../../components/reports/GenericReport";
import BasicTable from "../../../../components/tables/tables";
import {GenericTabularReport} from "../../../../components/reports/GenericTabularReport";
import Button from "@material-ui/core/Button";


const yupSchema = yup.object({
    khata_no:yup.number().integer().required(),
    shares:yup.array(yup.object(
        {
            khatedar_id:yup.string().required(),
            khatedar_code:yup.string().required(),
            share:yup.number().required()
        }
    ))
}).required()
const mycolumns = [
    { id: 'khatedar_code',label: 'Khatedar Code',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'khatedar_details',label: 'Khatedar Details',minWidth: 10, align: 'center', format: (value) => value.toString(),},

    { id: 'form',label: 'Shares',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    // { id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    //{ id: 'bhaumik_year',label: 'Fasli Year',minWidth: 10, align: 'center', format: (value) => value.toString(),},

];
const query = 'query a($filter:String!){khatedar_by_filter(filter:$filter){id farmer{name relative_name relationship} khatedar_code share_ch4_set{share}}}'
const fieldInfo = {
    id:{ label: 'ID', pk:true,required: false, defaultValue: ''},
    khatedar_code:{ label: 'Khatedar Code', required: true, defaultValue: '', comp:<KhatedarCodeForm/>},
    share:{label: 'Share', required: true, defaultValue: ''},

}
function defaultSubmitFn(data) {console.log(data)}

export function AddCH4Share (props)
{
    const newForm = useForm({resolver:yupResolver(yupSchema)})
    const [khata_no,setKhataNo] = useState("")
    function fn1(e) {
        console.log("Khata_no", e.target.value)
        setKhataNo(e.target.value)
    }
    return (<><ReactHookFormControlledInput comp={<TextField/>} label="KhataNo" name={"khata_no"} onChange={fn1} form={newForm}/>
        <DataEntryForShare khata_no={khata_no} newForm={newForm}/></> )
}
export function DataEntryForShare({khata_no, newForm}) {

    function reducer(data) {
        return data.map((value,index)=>{
            const x = {}
            x.id = value.id
            x.khatedar_code = value.khatedar_code
            x.khatedar_details = value.farmer.name
            x.share = value.share_ch4_set[0]?.share

            x.form = <Stack>
                <ReactHookFormControlledInput defaultValue={value.khatedar_code} name={`shares[${index}].khatedar_code`}  comp={<TextField  disabled />} label="Share" form={newForm}/>
                <ReactHookFormControlledInput defaultValue={value.id} name={`shares[${index}].khatedar_id`} comp={<TextField  disabled />}  label="Share" form={newForm}/>
                <ReactHookFormControlledInput comp={<TextField/>} name={`shares[${index}].share`} label="Share" form={newForm}/>
                </Stack>
            return x
        })
    }
    const {items} = useGraphQlQuery(query, {
        filter: JSON.stringify({
            khatauni_id: localStorage.khatauni_id,
            khata_no: khata_no
        })
    },'khatedar_by_filter',reducer)
    // console.log("myitems", items)



    return (
<form onSubmit={newForm.handleSubmit(defaultSubmitFn)}>
    <Stack>
        <GenericTabularReport tableComponent={<BasicTable/>} columns={mycolumns} items={items} />
        <Button type={"submit"}>Submit</Button>
    </Stack>
</form>

    )

}

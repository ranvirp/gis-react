import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ReactHookFormControlledInput} from "../../../../components/forms/ReactHookFormInput";
import {TextField} from "@mui/material";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {DynamicReactHookForm} from "../../../../components/forms/DynamicReactHookForm";

import {KhatedarCodeWithDialogForm} from "./KhatedarCodeWithDialog";
import {defaultSubmitFn} from "../../functions/submitFn";
import {FarmerSearchByKhatedarCode} from "./FarmerSearchByKhatedarCode";
const yupSchema = yup.object({
    khata_no:yup.number().integer().required(),
    khatedars:yup.array(
        yup.object({
            khatedar_code:yup.string().required(),
            slno:yup.number().integer().required(),
        })
    )
}).required()
const mycolumns = [
    { id: 'form',label: 'Previous Values',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    // { id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    //{ id: 'bhaumik_year',label: 'Fasli Year',minWidth: 10, align: 'center', format: (value) => value.toString(),},

];
const query = 'query a($filter:String!){khatedar_by_filter(filter:$filter){id khatedar_code slno_in_khata farmer{id } share_ch4_set{share}}}'



function reducer(data) {
    return data.map(value=>{
        const x = {}
        x.id = value.id
        x.khatedar_code = value.khatedar_code
        x.farmer_id = value.farmer.id

        x.slno = value.slno_in_khata

        return x
    })
}
export function AddKhatedarForm ({chakbandi_id, khatauni_id, ...props})
{
    const newForm = useForm({resolver:yupResolver(yupSchema)})
    const [khata_no,setKhataNo] = useState("")
    function fn1(e) {
        console.log("Khata_no", e.target.value)
        setKhataNo(e.target.value)
    }

    return (<><ReactHookFormControlledInput comp={<TextField/>} label="KhataNo" name={"khata_no"} onChange={fn1} form={newForm}/>
        <DataEntryForKhatedar chakbandi_id={chakbandi_id} khatauni_id={khatauni_id} khata_no={khata_no} newForm={newForm}/></> )
}
 function DataEntryForKhatedar({chakbandi_id, khatauni_id, khata_no, newForm}) {

    const {items} = useGraphQlQuery(query, {
        filter: JSON.stringify({
            khatauni_id: khatauni_id,
            khata_no: khata_no
        })
    },'khatedar_by_filter',reducer)
    // console.log("myitems", items)
     function submitFn(data) {
         console.log(data)
         data.khatauni_id = khatauni_id
         data.chakbandi_id = chakbandi_id

         defaultSubmitFn(data, 'khatedarentry',newForm).then(result => {console.log(result)})

     }
    // return (<p>Hi</p>)
     const fieldInfo = {
         id:{ label: 'ID', pk:true,required: false, defaultValue: ''},

         farmer_id:{ label: 'Khatedar Code', required: true, defaultValue: '', comp:<FarmerSearchByKhatedarCode key={Math.random()} chakbandi_id={chakbandi_id} khatauni_id={khatauni_id}/>},

         slno:{label: 'Serial No', required: true, defaultValue: ''},

     }
    return (<><DynamicReactHookForm debug={true} addTitle={"Add Khatedar"} onSubmit={submitFn} initialValues={items} fieldInfo={fieldInfo} componentName={"khatedars"} newForm={newForm}/></>)

}

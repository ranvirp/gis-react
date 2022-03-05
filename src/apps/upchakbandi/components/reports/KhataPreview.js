import React, {useState} from "react"
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import BasicTable from "../../../../components/tables/tables";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {ReactHookFormControlledInput} from "../../../../components/forms/ReactHookFormInput";
import {TextField, Box, Stack} from "@mui/material";
import {KhataLockButton} from "../forms/KhataLockButton";
const khatedarQuery = 'query a($filter:String!){khatedar_by_filter(filter:$filter){id farmer{name relationship relative_name} khatedar_code slno_in_khata share_ch4_set{share}}}'
const gataQuery = 'query a($filter:String!){gata_by_filter(filter:$filter){id   gata_no area bhaumik_year}}'
const khataQuery = 'query a($filter:String!){khata_by_filter(filter:$filter){id  khatauni{village{vname}} khata_no category{category name} area status}}'

function genFilter(khatauni_id,khata_no) {
    return {
        filter: JSON.stringify({
            khatauni_id: khatauni_id,
            khata_no: khata_no
        })
    }
}
const myColumns = [
    {id:'farmerName', label:'खातेदार का नाम'}
]
const myGataColumns = [
    {id:'bhaumik_year', label:'भौमिक वर्ष'},
    {id:'gata_no', label:'गाटा संख्या'},
    {id:'area', label:'क्षेत्रफल'}
]
function reducer(data) {
    return data.map(value => {
        const x = {}
        x.farmerName = value.farmer.name + '-' + value.farmer.relationship + '-' + value.farmer.relative_name
        return x
    })
}
export function KhataPreview ({khatauni_id, ...props})
{
    console.log(khatauni_id, "preview khatauni")
    const newForm = useForm()
    const [khata_no,setKhataNo] = useState(0)
    const {items,status} = useGraphQlQuery(khataQuery, genFilter(khatauni_id,khata_no), 'khata_by_filter')
    if (status==='pending') return 'loading'
    console.log(items)
    let lock_status = 0
    if (items.length > 0) lock_status = items[0].status
    function fn1(e) {
        console.log("khata_no", e.target.value)
        setKhataNo(e.target.value)
    }
    var villName = ''
    if (items.length > 0) villName = items[0].khatauni.village.vname
    var category = ''
    if (items.length > 0) category = items[0].category.category
    return (<Stack>
        <ReactHookFormControlledInput comp={<TextField/>} label="Khata No" name={"khata_no"} onChange={fn1} form={newForm}/>
           <KhataLockButton lock_status={lock_status} khatauni_id={khatauni_id} khata_no={khata_no} />
            <Stack direction={"row"} spacing={4}><Box>राजस्व ग्राम का नाम:{villName}</Box><Box>श्रेणी:{category}</Box></Stack>
            <Stack direction={"row"}>


        <KhatedarPreview sx={{width:"100%"}} khata_no={khata_no} khatauni_id={khatauni_id}/>

                <GataPreview sx={{width:"100%"}} khata_no={khata_no} khatauni_id={khatauni_id}/>

        </Stack>
        </Stack>
    )
}
export function KhatedarPreview({khata_no, khatauni_id, ...props})
{

    const {items} = useGraphQlQuery(khatedarQuery,genFilter(khatauni_id, khata_no),'khatedar_by_filter', reducer)
    console.log(items)
    return (

    <BasicTable {...props} columns={myColumns} items={items??[]}/>
    )
}
export function GataPreview({khata_no, khatauni_id, ...props})
{

    const {items, status} = useGraphQlQuery(gataQuery,genFilter(khatauni_id, khata_no),'gata_by_filter')
    if (status==='pending') return ''
    return (

        <BasicTable {...props} columns={myGataColumns} items={items??[]}/>
    )
}
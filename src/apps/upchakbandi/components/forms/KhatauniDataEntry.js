import React from "react"

import {BasicTabs} from "../../../../components/tabpanels/BasicTabPanel";
import {AddGataForm} from "./GataEntryForm";
import {AddKhatedarForm} from "./AddKhatedarForm";

import {KhataPreview} from "../reports/KhataPreview";

import {KhataEntryForm} from "./KhataEntryForm";

import {FarmerDataEntryForm} from "./FarmerDataEntryForm";
import {AddGataMapForm} from "./OldGataNewGataMapEntryForm";
export function dateToString(dateString)
{
    const d = new Date(dateString)
    return d.getDate() + '-' + (d.getMonth() + 1)+ '-' + d.getFullYear()

}
function getBandobastKhatauniId()
{


}
let q = `query a($filter:String!) {chakbandi_documents_by_filter(filter:$filter){type_of_khatauni khatauni{id,fasli_year }}}`
export function KhatauniDataEntry({chakbandi_id, chakbandi_village_name,chakbandi_date_of_4notification,khatauni_type, khatauni_id })
{
console.log(khatauni_type, "khatauni_type")
 let items =   [
        {label: 'New Farmer Entry', comp:<FarmerDataEntryForm chakbandi_id={chakbandi_id} khatauni_id={khatauni_id}/>},
        {label: 'Khata Details', comp:<KhataEntryForm khatauni_id={khatauni_id}/>},

        {label:'Khatedar Entry', comp:<AddKhatedarForm chakbandi_id={chakbandi_id} khatauni_id={khatauni_id}/>},
        {label:'Gata Entry', comp:<AddGataForm khatauni_id={khatauni_id} chakbandi_id={chakbandi_id}/>},

        {label:'Khata Preview', comp:<KhataPreview khatauni_id={khatauni_id}/>}

    ]
    if (khatauni_type === 'b') {
        items.push({
            label: '41-Old Gata Map',
            comp: <AddGataMapForm chakbandi_id={chakbandi_id} khatauni_id={khatauni_id}/>
        })


    }

    return (

        <BasicTabs items={items}/>
    )
}
import React from "react"

import {BasicTabs} from "../../../../components/tabpanels/BasicTabPanel";
import {AddGataForm} from "./GataEntryForm";
import {AddKhatedarForm} from "./AddKhatedarForm";
import {ClickableItem} from "../../../../components/clickableitem";
import {ChooseDefaultChakbandi} from "../reports/chooseaChakbandi";
import {KhataCreateForm, KhataCreateUpdateForm} from "./KhataDetailsForm";
import {KhataPreview} from "../reports/KhataPreview";
import {DefaultValuesChecker} from "./DefaultValuesChecker";
import {ChakbandiDocuments} from "./ChakbandiDocuments";
import {KhataEntryForm} from "./KhataEntryForm";
import {Grid, Stack, Typography} from "@mui/material";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {KhatauniValueInitializer} from "./KhatauniValueInitializer";
export function dateToString(dateString)
{
    const d = new Date(dateString)
    return d.getDay() + '-' + (d.getMonth() + 1)+ '-' + d.getFullYear()

}
function getBandobastKhatauniId()
{


}
let q = `query a($filter:String!) {chakbandi_documents_by_filter(filter:$filter){khatauni{id,fasli_year type_of_khatauni}}}`
export function KhatauniDataEntry({chakbandi_id, chakbandi_village_name,chakbandi_date_of_4notification, khatauni_id })
{
console.log(khatauni_id, "data entry")
    return (

        <BasicTabs items={[

            {label: 'Khata Details', comp:<KhataEntryForm khatauni_id={khatauni_id}/>},

            {label:'Khatedar Entry', comp:<AddKhatedarForm chakbandi_id={chakbandi_id} khatauni_id={khatauni_id}/>},
            {label:'Gata Entry', comp:<AddGataForm khatauni_id={khatauni_id}/>},
            {label:'Khata Preview', comp:<KhataPreview khatauni_id={khatauni_id}/>}
        ]}/>
    )
}
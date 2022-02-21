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
import {Grid, Typography} from "@mui/material";
function dateToString(dateString)
{
    const d = new Date(dateString)
    return d.getDay() + '-' + (d.getMonth() + 1)+ '-' + d.getFullYear()

}
export function KhatauniDataEntry(props)
{
    return (
        <DefaultValuesChecker>
            <Grid container xs={12}>
                <Grid item xs={6}>राजस्व ग्राम का नाम</Grid><Grid item xs={2}><Typography>{localStorage.chakbandi_village_name}</Typography></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={6}>अधिसूचना का दिनांक </Grid><Grid item xs={2}>  <Typography> { dateToString(localStorage.chakbandi_date_of_4notification)}</Typography></Grid>
                <Grid item xs={4}></Grid>

            </Grid>
        <BasicTabs items={[
            {label:'Documents  Details',comp:<ChakbandiDocuments/>},

            {label: 'Khata Details', comp:<KhataEntryForm/>},

            {label:'Khatedar Entry', comp:<AddKhatedarForm/>},
            {label:'Gata Entry', comp:<AddGataForm/>},
            {label:'Khata Preview', comp:<KhataPreview/>}
        ]}/>
        </DefaultValuesChecker>
    )
}
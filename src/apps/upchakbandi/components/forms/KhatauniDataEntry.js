import React from "react"

import {BasicTabs} from "../../../../components/tabpanels/BasicTabPanel";
import {AddGataForm} from "./GataEntryForm";
import {AddKhatedarForm} from "./AddKhatedarForm";
import {ClickableItem} from "../../../../components/clickableitem";
import {ChooseDefaultChakbandi} from "../reports/chooseaChakbandi";
import {KhataCreateForm, KhataCreateUpdateForm} from "./KhataDetailsForm";
import {KhataPreview} from "../reports/KhataPreview";

export function KhatauniDataEntry(props)
{
    /*
    if (!localStorage.chakbandi_id){
        return (<h1>Please select a chakbandi village first <ClickableItem comp={<ChooseDefaultChakbandi/>}/></h1>)
    }
    */
    return (
        <BasicTabs items={[
            {label:'Khata Details',comp:KhataCreateForm},
            {label:'Khatedar Entry', comp:<AddKhatedarForm/>},
            {label:'Gata Entry', comp:<AddGataForm/>},
            {label:'Khata Preview', comp:<KhataPreview/>}
        ]}/>
    )
}
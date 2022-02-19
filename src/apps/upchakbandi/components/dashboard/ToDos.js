import React from "react";
import {ClickableItem} from "../../../../components/clickableitem";
import {ChakbandiCreateUpdateForm} from "../../generated/forms/chakbandi";
import {AddGataForm} from "../forms/GataEntryForm";
import {FarmerCreateUpdateForm} from "../forms/FarmerEntryForm";
import {AddKhatedarForm} from "../forms/AddKhatedarForm";

import {AddGataMapForm} from "../forms/OldGataNewGataMapEntryForm";
import {AddCH4Share} from "../forms/ShareCH4Entry";
export function ToDos(props)
{
    return (
        <ol align={"left"}>
            <li><ClickableItem comp={<ChakbandiCreateUpdateForm/>} title={"Create Chakbandi village"}/></li>
            <li><ClickableItem comp={<AddGataMapForm/>} title={"Enter 41"}/> </li>
            <li>Enter 45</li>
            <li><ClickableItem title="Enter Khatedar" comp={<AddKhatedarForm/>}/></li>
            <li><ClickableItem title="Enter Khatauni" comp={<AddGataForm/>}/></li>
            <li><ClickableItem title="Enter CH4 data" comp={<AddCH4Share/>}/></li>

            <li><ClickableItem title="Enter Farmer" comp={<FarmerCreateUpdateForm/>}/></li>
            <li>Enter Orders of Chakbandi</li>





        </ol>
    )
}
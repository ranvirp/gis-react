import React from "react";
import {DefaultChakbandiValueChecker} from "./DefaultChakbandiValueChecker";
import {KhatauniValueInitializer} from "./KhatauniValueInitializer";
import {KhatauniDataEntry} from "./KhatauniDataEntry";
export function AadharKhatauniEntry(props)
{
    return (
        <DefaultChakbandiValueChecker>
            <KhatauniValueInitializer chakbandi_id={localStorage.chakbandi_id}>
                <KhatauniDataEntry chakbandi_id={localStorage.chakbandi_id} chakbandi_village_name={localStorage.chakbandi_village_name}
                                   chakbandi_date_of_4notification={localStorage.chakbandi_date_of_4notification}
                                   khatuani_id={localStorage.aid}/>

            </KhatauniValueInitializer>
        </DefaultChakbandiValueChecker>
    )
}
import React from "react"
import {ChooseDefaultChakbandi} from "../reports/chooseaChakbandi";
import {ChooseDefaultKhatauni} from "../reports/chooseakhatauni";
export function DefaultValuesChecker(props)
{
    if (!localStorage.chakbandi_id) {
        return (
            <ChooseDefaultChakbandi/>
        )
    }
    if (!localStorage.khatauni_id) {
        return (
            <ChooseDefaultKhatauni/>
        )
    }
    return (
        <>{props.children}</>
    )
}
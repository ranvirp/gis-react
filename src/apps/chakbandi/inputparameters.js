import React from "react";
import {TextField, Button} from "@mui/material";
import {Villagedropdown} from "../../components/forms/villagedropdown";
import {FasliYearForm} from "./components/forms/fasliyear";
import {KhatauniTypeForm} from "./components/forms/khataunitype";
export function getButton()
{
    return (<Button type="submit">Submit</Button>)
}
export function getInputParameters(component, input)
{
    var components = {}
    components.fasli_year = <FasliYearForm/>
    components.type_of_khatauni = <KhatauniTypeForm/>
    var myprops = {}
    myprops.no_of_khatas = {type:'number'}
    var values = {}
    values.Khatauni = {}
    values.Khatauni.village = {}
    values.Khatauni.village.component = <Villagedropdown/>
    values.Khatauni.fasli_year = {}
    values.Khatauni.fasli_year.component = <FasliYearForm/>
    var x = {}
    x.component = values[component]?.[input]?.component ?? components[input]
    x.component = x.component ?? <TextField/>
    x.required = values[component]?.[input]?.['required']

    x.required = x.required ?? true
    x.props = myprops[input] ?? {}
    return x
}
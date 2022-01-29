import React from "react";
import { Dropdown } from "../../../../experimentalcomponents/forms/dropdown";
const types = ['1', '1A', '2', '3', '4', '5', '6', '7', '8', '9']
const categories = [
    {label:'1', value:'1', key:'1'},
    {label:'2', value:'2', key:'2'},
    {label:'3', value:'3', key:'3'},
    {label:'4', value:'4', key:'4'},
    {label:'5', value:'5', key:'5'},
    {label:'6', value:'6', key:'6'},

]
export function CategoryDropdown(props)
{
    return(
        <Dropdown fieldValue={categories} changeFunction={props.changeFunction} fieldId={props.id}
        fieldName={props.name} fieldLabel={props.label}/>

    )
}
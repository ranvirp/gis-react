import React from "react";
import {Dropdown} from "../../../../components/forms/dropdown";
export const  FasliYearForm = (props)=>{
    var list = [];
    for (var i = 1349; i <= 1449; i++) {
        list.push(i);
    }
    const years = list.map((value)=>{return {key:value, label:value, value:value.toString()}})
    return <Dropdown values={years} {...props}/>
}
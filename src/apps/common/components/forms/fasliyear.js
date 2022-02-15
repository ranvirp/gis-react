import React from "react";
import {Dropdown} from "../../../../components/forms/Dropdown";
export const  FasliYearForm = (props)=>{
    var list = [];
    for (var i = 1449; i >= 1349; i--) {
        list.push(i);
    }
    const years = list.map((value)=>{return { label:value, value:value.toString()}})

    return <Dropdown  values={years} {...props}/>
}
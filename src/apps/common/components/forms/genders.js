import React from "react";
import {Dropdown} from "../../../../components/forms/dropdown";
export const  GendersDropdown = (props)=>{
    var list = {m:'Male', f:'Female', n:'Neutral'};

    const relations = Object.keys(list).map((key)=>{return { label:list[key], value:key}})

    return <Dropdown  values={relations} {...props}/>
}
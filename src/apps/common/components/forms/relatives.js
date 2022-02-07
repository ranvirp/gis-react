import React from "react";
import {Dropdown} from "../../../../components/forms/dropdown";
export const  RelativesDropdown = (props)=>{
    var list = {f:'Father', w:'Wife', m:'Mother', h:'Husband', n:'None'};

    const relations = Object.keys(list).map((key)=>{return { label:list[key], value:key}})

    return <Dropdown  values={relations} {...props}/>
}
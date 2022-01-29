import React from "react";
import {Dropdown} from "../../../../components/forms/dropdown";
export const  KhatauniTypeForm = (props)=>{
    var list = {sudhar:'Sudhar Khatauni', bandobast:'Bandobast', f1359:'1359 Fasli Khatauni'};

    const khataunitypes = Object.keys(list).map((value)=>{return {key:value, label:list[value], value:value}})
    return <Dropdown values={khataunitypes} {...props}/>
}
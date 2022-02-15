import React from "react";
import {Dropdown} from "../../../../components/forms/Dropdown";
export const  DesignationDropdown = (props)=>{
    var list = {co:'Chakbandi Adhikari', aco:'Assistance CO', soc:'Bandobast Adhikari', ddc:'DDC'};

    const designations = Object.keys(list).map((value)=>{return { label:value, value:value.toString()}})

    return <Dropdown  values={designations} {...props}/>
}
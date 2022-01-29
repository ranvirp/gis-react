import React from 'react'
import {Dependentdropdown} from "./dependentdropdown";
import dists from "../../data/districts.json";
import vills from "../../data/villages.json";
export default function DistVillForm() {
   const args = {
        fieldA:'dist',
        fieldB:'revvill',
        formid:'TestForm',
        fieldA_label:'District',
        fieldB_label:'Revenue Village',
        fieldAValues:dists.map((value)=>({value:value.district_code_census, label:value.district_name_english})),
        getFieldBValues:(value)=> {
            console.log(value)
            if (value === null) { return [{value:null, label:'none'}]}
            var a = vills.filter(vill => {

                if ('village_code_census' in vill) {
                    const vill_census_code = vill.village_code_census
                    console.log(vill_census_code)
                    console.log(value)
                    console.log(vill_census_code.startsWith(value))

                    return vill_census_code.startsWith(value)
                } else {
                    return false
                }
                })
            console.log(a)
            return a.map((k)=>({value:k.village_code_census,label:k.vname_eng}))
        }
    }
    return <Dependentdropdown {...args}></Dependentdropdown>
}

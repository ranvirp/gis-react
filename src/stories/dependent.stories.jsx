import React from "react";
import DependentForm from "../experimentalcomponents/forms/dependent";
import {Dependentdropdown} from "../experimentalcomponents/forms/dependentdropdown";
import {MenuItem} from "@material-ui/core";

export default {
    title: 'Dependednt Form',
    component: Dependentdropdown,
};
const Template = (args) => <Dependentdropdown {...args} />;


export const depform = Template.bind({});
var  dists = require('../data/districts.json')
var vills = require('../data/villages.json')

depform.args = {
    fieldA:'dist',
    fieldB:'revvill',
    formid:'TestForm',
    fieldA_label:'District',
    fieldB_label:'Revenue Village',
    fieldAValues:dists.map((value)=>({value:value.district_code_census, label:value.district_name_english})),
    getFieldBValues:(value)=> {
        const a = vills.find(vill => {
            const vill_census_code =  vill.village_census_code
            return vill_census_code.startsWith(value)})
        console.log(a)
        return [ {age:30 + value, label:'Thirty' + value},{age:20 + value, label:'Twenty' + value}]
    }
}




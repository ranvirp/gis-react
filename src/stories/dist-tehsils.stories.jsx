import React from "react";
import DependentForm from "../experimentalcomponents/forms/dependent";
import {Dependentdropdown} from "../experimentalcomponents/forms/dependentdropdown";
import {MenuItem} from "@material-ui/core";
import {Dependentdropdownthree} from "../experimentalcomponents/forms/dependentdropdownthree";
import {Villagedropdown} from "../experimentalcomponents/forms/districtdropdown";

export default {
    title: 'District Tehsil Dependednt Form',
    //component: Dependentdropdownthree,
    component:Villagedropdown
};

const Template = (args) => <Villagedropdown {...args} />;


export const depform = Template.bind({});



depform.args = {
    fieldAId:'dist',
    fieldAName:'dist',
    fieldALabel:'dist',
    fieldBId:'tehsil',
    fieldBName:'tehsil',
    fieldBLabel:'tehsil',

    fieldCId:'village',
    fieldCName:'village',
    fieldCLabel:'village',



}




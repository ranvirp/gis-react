import React from "react";
import SideBarItem from "../../components/sidebar/sidebar_items/SideBarItem";


import {ChooseDefaultKhatauni} from "./components/reports/chooseakhatauni";
import { GataCreateUpdateForm} from "./generated/forms/gata";
import { GataWithEdit} from "./generated/reports/gata";
import {FarmerCreateForm} from "./generated/forms/farmer";
import {Claims} from "./components/forms/claims";
import {PetitionReport} from "./functions/functionres";
import {KhataAll, KhataWithEdit} from "./generated/reports/khata";
import {FarmerAll} from "./generated/reports/farmer";
import {ChooseDefaultChakbandi} from "./components/reports/chooseaChakbandi";
import {AddGataForm, GataListForm, KhataEntryForm} from "./components/forms/GataEntryForm";
import {ToDos} from "./components/dashboard/ToDos";
import {KhatauniDataEntry} from "./components/forms/KhatauniDataEntry";
import {ChakbandiCreateForm} from "./components/forms/ChakbandiCreateForm";
import {ChakbandiDocuments} from "./components/forms/ChakbandiDocuments";
import {AadharKhatauniEntry} from "./components/forms/AadharKhatauniEntry";
import {BandobastKhatauniEntry} from "./components/forms/BandobastKhatauniEntry";
import {AddGataMapForm} from "./components/forms/OldGataNewGataMapEntryForm";

const mode = 'dev'


export const graphqlurl = mode==='dev'?'http://127.0.0.1:8000/graphql':'http://150.230.140.7:8000/graphql'
const defaultValue = {khatauni:localStorage.khatauni_id}
const khataprops = {khatauni:{disabled:true}}
const khataquery = `mutation something($khatauni:String!, $khata_no:String!, $category:String!, $area:String!){
        create_khata(khatauni: $khatauni, khata_no: $khata_no, category: $category, area: $area) {
            khata { id         khata_no category  area   }  
          ok

        }
        }`
const createGataMutation = `mutation something($khatauni:String!, $gata_no:String!, $area:String!, $khata_no:String!, $bhaumik_year:String!){
        create_gata(khatauni: $khatauni, gata_no: $gata_no, area: $area, khata_no: $khata_no, bhaumik_year: $bhaumik_year) {
            gata { id      gata_no  area  khata_no  bhaumik_year   }  
          ok

        }
        }`
const gatacolumns =  [
    { id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'gata_no',label: 'Gata No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'khata_no',label: 'Khata No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'bhaumik_year',label: 'Bhaumik Year',minWidth: 10, align: 'center', format: (value) => value.toString(),},
];
const khatafn = (value) => {value.khatauni = value.khatauni.id; value.category = value.category.name;return value}
const fn = (value) => (value.khatauni = value.khatauni.id)
const ChakbandiSettings = ()=> {
    return {'sidebaritems':(handleClick)=> {
        return {

            'चकबंदी  का विवरण':[
                <SideBarItem comp={<ChakbandiCreateForm />} title='चकबंदी अधिसूचना का विवरण' handleClick={handleClick}/>,
                <SideBarItem comp={<ChooseDefaultChakbandi />} title='चकबंदी ग्राम चुनें' handleClick={handleClick}/>,

                <SideBarItem comp={<ChakbandiDocuments />} title='चकबंदी अभिलेखों का विवरण' handleClick={handleClick}/>,


            ],

            'अभिलेखों की डेटा एंट्री': [
           <SideBarItem comp={<BandobastKhatauniEntry/>} title='बंदोबस्त खतौनी-45' handleClick={handleClick}/>,
                <SideBarItem comp={<AddGataMapForm/>} title='बंदोबस्त खतौनी-41' handleClick={handleClick}/>,
                <SideBarItem comp={<AadharKhatauniEntry/>} title='आधार वर्ष' handleClick={handleClick}/>,


            ],






        }}, 'title':'Chakbandi'}
}
 export default ChakbandiSettings;

import DistrictSideBarItem from "../../components/sidebar/sidebar_items/DistrictSideBarItem";
import React from "react";
import {handleClick} from "../../components/sidebar/sidebar";
import SideBarItem from "../../components/sidebar/sidebar_items/SideBarItem";
//import { KhataForm } from "./components/forms/khata";
//import { GataForm } from "./components/forms/gata";
import { KhataCorrectionForm } from "./components/forms/khatacorrection";
import {FarmerForm} from "./components/forms/farmer";
import {KhataForm} from "./components/forms/khata";
import {GataForm, MyGataForm} from "./components/forms/gata";
import {KhatedarForm} from "./components/forms/khatedar";
import {CourtOrderForm} from "./components/forms/courtorder";
import {CourtForm} from "./components/forms/court";
import {PresidingOfficerForm} from "./components/forms/presidingofficer";
import {LandTransferForm} from "./components/forms/landtransfer";
import {LandCategoryForm} from "./components/forms/landcategory";
import {Gatadelta} from "./components/forms/gatadelta";
import {KhatauniCreateForm} from "./generated/forms/khatauni";
import {KhatauniForm} from "./components/forms/khatauni";


import {KhatauniList} from "./generated/reports/khatauni";
import {Dashboard} from "./components/reports/dashboard";
import {KhataCreateForm} from "./components/forms/khata";
import KhataList from "./components/reports/khata";
import {LandCategoryCreateForm} from "../upvillages/generated/forms/landcategory";
import LandCategoryList from "../upvillages/generated/reports/landcategory";
import {ChooseDefaultKhatauni} from "./components/reports/chooseakhatauni";
import {GataCreateForm} from "./generated/forms/gata";
import {GataList, GataWithEdit} from "./generated/reports/gata";
import {FarmerCreateForm} from "./generated/forms/farmer";
import {FarmerList} from "./components/reports/farmer";
import {CourtPosting} from "./components/forms/courtposting";
import {ClaimCreateForm} from "./generated/forms/claim";
import ClaimList from "./generated/reports/claim";
import {Claims} from "./components/forms/claims";
import PetitionList from "./generated/reports/petition";
import {PetitionReport} from "./functions/functionres";

export const graphqlurl = 'http://127.0.0.1:8000/graphql'
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
            '':[<SideBarItem comp={<ChooseDefaultKhatauni/>} title='Chooose default khatauni' handleClick={handleClick}/>,],
            Khatauni:[   <SideBarItem comp={<KhatauniCreateForm />} title='Khatauni Form' handleClick={handleClick}/>,
                <SideBarItem comp={KhatauniList} title='Khatauni List' handleClick={handleClick}/>,],

            Khata:[   <SideBarItem comp={<KhataCreateForm mutationQuery={khataquery} defaultValues={defaultValue}/>} title='Khata Form' handleClick={handleClick}/>,
                <SideBarItem comp={KhataList} title='Khata List' handleClick={handleClick}/>,],
            Gata:[   <SideBarItem comp={<GataCreateForm mutationQuery={createGataMutation} defaultValues={defaultValue}/>} title='Gata Form' handleClick={handleClick}/>,
                <SideBarItem comp={<GataWithEdit fn={fn} formFn={(val)=>{val.khatauni= val.khatauni.id}}/>} title='Gata List' handleClick={handleClick}/>,],
            Farmer:[   <SideBarItem comp={FarmerCreateForm} title='Farmer Form' handleClick={handleClick}/>,
                <SideBarItem comp={FarmerList} title='Farmer List' handleClick={handleClick}/>,],
            Claim:[   <SideBarItem comp={<Claims  defaultValues={defaultValue}/>} title='claim Form' handleClick={handleClick}/>,
               // <SideBarItem comp={<PetitionList fn={(value)=>{value.khatauni = value.khatauni.id;return value}}/>} title='Petition List' handleClick={handleClick}/>,
                <SideBarItem comp={PetitionReport} title='Petition List' handleClick={handleClick}/>,
               // <SideBarItem comp={MyGataForm} title='Petition List' handleClick={handleClick}/>,

        ],




        }}, 'title':'Chakbandi'}
}
 export default ChakbandiSettings;

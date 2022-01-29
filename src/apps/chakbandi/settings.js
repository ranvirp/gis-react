import DistrictSideBarItem from "../../components/sidebar/sidebar_items/DistrictSideBarItem";
import React from "react";
import {handleClick} from "../../components/sidebar/sidebar";
import SideBarItem from "../../components/sidebar/sidebar_items/SideBarItem";
//import { KhataForm } from "./components/forms/khata";
//import { GataForm } from "./components/forms/gata";
import { KhataCorrectionForm } from "./components/forms/khatacorrection";
import {FarmerForm} from "./components/forms/farmer";
import {KhataForm} from "./components/forms/khata";
import {GataForm} from "./components/forms/gata";
import {KhatauniForm} from "./components/forms/khatauni";
import {KhatedarForm} from "./components/forms/khatedar";
import {CourtOrderForm} from "./components/forms/courtorder";
import {CourtForm} from "./components/forms/court";
import {PresidingOfficerForm} from "./components/forms/presidingofficer";
import {LandTransferForm} from "./components/forms/landtransfer";
import {LandCategoryForm} from "./components/forms/landcategory";
import {Gatadelta} from "./components/forms/gatadelta";
import KhatauniList from "./components/reports/khatauni";

export const graphqlurl = 'http://127.0.0.1:8000/graphql'

const ChakbandiSettings = ()=> {
    return {'sidebaritems':(handleClick)=> {
        return [      
                          <DistrictSideBarItem handleClick={handleClick}/>,
                          <SideBarItem comp={<KhataForm/>} title='Khata Form' handleClick={handleClick}/>,
                          <SideBarItem comp={<GataForm/>} title='Gata Form' handleClick={handleClick}/>,
                          <SideBarItem comp={<Gatadelta/>} title='Gata Delta Form' handleClick={handleClick}/>,
                          <SideBarItem comp={<FarmerForm/>} title='Farmer Form' handleClick={handleClick}/>,
                          <SideBarItem comp={<KhatauniForm/>} title='Khatauni Form' handleClick={handleClick}/>,
            <SideBarItem comp={<KhatauniList/>} title='Khatauni List' handleClick={handleClick}/>,

            <SideBarItem comp={<KhatedarForm/>} title='Khatedar Form' handleClick={handleClick}/>,
                          <SideBarItem comp={<CourtOrderForm/>} title='Court Order Form' handleClick={handleClick}/>,
                          <SideBarItem comp={<CourtForm/>} title='Court Form' handleClick={handleClick}/>,
                          <SideBarItem comp={<PresidingOfficerForm/>} title='Presiding Officer Form' handleClick={handleClick}/>,
                          <SideBarItem comp={<LandTransferForm/>} title='Land Transfer Form' handleClick={handleClick}/>,

                          <SideBarItem comp={<LandCategoryForm/>} title='Land Category Form' handleClick={handleClick}/>,


        ]}, 'title':'Chakbandi'}
}
 export default ChakbandiSettings;

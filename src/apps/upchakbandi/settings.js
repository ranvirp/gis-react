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
import {AddGataForm, GataListForm, KhataEntryForm} from "./components/forms/KhataEntryForm";
import {ToDos} from "./components/dashboard/ToDos";

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
            '  ':[<SideBarItem comp={<ChooseDefaultChakbandi/>} title='Chooose default Chakbandi' handleClick={handleClick}/>,],
             Dashboard:[   <SideBarItem comp={<ToDos />} title='Todos' handleClick={handleClick}/>,
             ],

            // Khatauni:[   <SideBarItem comp={<KhatauniCreateForm />} title='Khatauni Form' handleClick={handleClick}/>,
            //    <SideBarItem comp={KhatauniList} title='Khatauni List' handleClick={handleClick}/>,],

            Khata:[
                <SideBarItem comp={<AddGataForm khata_no={10}/>} title='Add Gata Form' handleClick={handleClick}/>,

                <SideBarItem comp={<GataListForm khata_no={30}/>} title='Khata Form' handleClick={handleClick}/>,

                <SideBarItem comp={<KhataWithEdit mutationQuery={khataquery} defaultValues={defaultValue}/>} title='Khata Form' handleClick={handleClick}/>,
                <SideBarItem comp={<KhataAll fn={(val)=>{val.category=val.category.name;val.khatauni= val.khatauni.id}}/>} title='Khata List' handleClick={handleClick}/>,],
            Gata:[   <SideBarItem comp={<GataCreateUpdateForm edit={false} debug={false}  defaultValues={defaultValue}/>} title='Gata Form' handleClick={handleClick}/>,
                <SideBarItem comp={<GataWithEdit fn={fn} formFn={(val)=>{val.khatauni= val.khatauni.id}}/>} title='Gata List' handleClick={handleClick}/>,],
            Farmer:[   <SideBarItem comp={FarmerCreateForm} title='Farmer Form' handleClick={handleClick}/>,
                <SideBarItem comp={<FarmerAll fn={fn}/>} title='Farmer List' handleClick={handleClick}/>,],
            Claim:[   <SideBarItem comp={<Claims  defaultValues={defaultValue}/>} title='claim Form' handleClick={handleClick}/>,
               // <SideBarItem comp={<PetitionList fn={(value)=>{value.khatauni = value.khatauni.id;return value}}/>} title='Petition List' handleClick={handleClick}/>,
                <SideBarItem comp={PetitionReport} title='Petition List' handleClick={handleClick}/>,
               // <SideBarItem comp={MyGataForm} title='Petition List' handleClick={handleClick}/>,

        ],




        }}, 'title':'Chakbandi'}
}
 export default ChakbandiSettings;

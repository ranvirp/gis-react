import DistrictSideBarItem from "../../components/sidebar/sidebar_items/DistrictSideBarItem";
import React from "react";
import {handleClick} from "../../components/sidebar/sidebar";

const ChakbandiSettings = ()=> {
    return {'sidebaritems':(handleClick)=> {
        return [                    <DistrictSideBarItem handleClick={handleClick}/>
        ]}, 'title':'Chakbandi'}
}
 export default ChakbandiSettings;

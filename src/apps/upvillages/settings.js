import React from "react";
import SideBarItem from "../../components/sidebar/sidebar_items/SideBarItem";
const mode = 'dev'


export const graphqlurl = mode==='dev'?'http://127.0.0.1:8000/graphql':'http://150.230.140.7:8000/graphql'

const ChakbandiSettings = ()=> {
    return {'sidebaritems':(handleClick)=> {
        return {Khatauni:[
          ]



        }}, 'title':'Chakbandi'}
}
 export default ChakbandiSettings;

import './App.css';
import React from 'react';

import PrimarySearchAppBar from "./toolbar/toolbar1";
import PermanentDrawerLeft from "./sidebar/sidebar";


function AppWithoutLogin(props) {
   

   
        return (
            <div className="App">


                    <PrimarySearchAppBar title={props.title}/>
                    <PermanentDrawerLeft sidebaritems={props.sidebaritems}/>



            </div>

        );
        
        }

export default AppWithoutLogin;

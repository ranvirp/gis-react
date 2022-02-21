import React from 'react';

import PrimarySearchAppBar from "./toolbar/toolbar1";
import PermanentDrawerLeft from "./sidebar/sidebar";
import './App.css'
import {ForAuthenticatedUser} from "./authentication/ForAuthenticatedUser";

function App(props) {



        return (



                <div className="App">
                    <ForAuthenticatedUser>
                        <p>I am here for authenticated user only</p>


                    <PrimarySearchAppBar title={props.title}/>

                    <PermanentDrawerLeft sidebaritems={props.sidebaritems}/>
                    </ForAuthenticatedUser>

                </div>






);
}

export default App;

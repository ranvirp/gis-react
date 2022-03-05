import React from 'react';

import PrimarySearchAppBar from "./toolbar/toolbar1";
import PermanentDrawerLeft from "./sidebar/sidebar";
import './App.css'
import {ForAuthenticatedUser} from "./authentication/ForAuthenticatedUser";
import {PasswordResetWithoutOldPassword} from "./authentication/PasswordReset";


function App(props) {


        return (



                <div className="App">
                    <PasswordResetWithoutOldPassword>
                    <ForAuthenticatedUser key={"authenticateduser"}>
                        <p>I am here for authenticated user only</p>


                    <PrimarySearchAppBar key="searchbar" title={props.title}/>

                    <PermanentDrawerLeft key="drawerleft" sidebaritems={props.sidebaritems}/>
                    </ForAuthenticatedUser>
                    </PasswordResetWithoutOldPassword>
                </div>






);
}

export default App;

import React, {useEffect, useState} from 'react';

import PrimarySearchAppBar from "./toolbar/toolbar1";
import PermanentDrawerLeft from "./sidebar/sidebar";
import './App.css'
import {ForAuthenticatedUser} from "./authentication/ForAuthenticatedUser";
import {PasswordResetWithoutOldPassword} from "./authentication/PasswordReset";
import {BrowserRouter, Route, Switch} from "react-router-dom";
/*
  Used with authentication system
 */

function App(props) {
    console.log(props)

    const [comp, setComp] = useState(null)
    const [checkTime, setCheckTime] = useState(props.time)




    console.log("rendering app at ",checkTime)
        return (
                <div className="App">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/reset">
                                <PasswordResetWithoutOldPassword>

                                </PasswordResetWithoutOldPassword>
                            </Route>
                            <Route path="/main">
                                <ForAuthenticatedUser key={Math.random()} time={checkTime} fn={setCheckTime}>
                                    <p>Entered Appwithlogin:I am here for authenticated user only</p>


                                    <PrimarySearchAppBar key="searchbar" title={props.title} fn={setComp} comp={comp}/>

                                    <PermanentDrawerLeft key="drawerleft" sidebaritems={props.sidebaritems} fn={setComp} comp={comp}/>
                                </ForAuthenticatedUser>
                            </Route>
                        </Switch>
                    </BrowserRouter>

                </div>





);
}

export default App;

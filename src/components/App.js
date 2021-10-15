import './App.css';
import React, {useContext} from 'react';
import MyComponent from "../Village";

import PrimarySearchAppBar from "./toolbar/toolbar1";
import PermanentDrawerLeft from "./sidebar/sidebar1";
import SignInPage from "./pages/signinpage";
export const authenticated = {
    'authenticated': localStorage.getItem('authenticated'),
    'userid': localStorage.getItem('userid'),
    'token': localStorage.getItem('token')
}
export const  setAuthenticated = (result) => {
    console.log(result.success)

    localStorage.setItem('authenticated', result.success)
    localStorage.setItem('userid', result.userid)
    localStorage.setItem('token', result.token)
    authenticated.authenticated = result.success ? 'true' : 'false'
    authenticated.userid = result.userid
    authenticated.token = result.token
}
export const myContext = React.createContext([authenticated, setAuthenticated])

function App() {
    const authenticated = {
        'authenticated': localStorage.getItem('authenticated'),
        'userid': localStorage.getItem('userid'),
        'token': localStorage.getItem('token')
    }
    console.log(authenticated)
    const [context, setContext] = React.useState(authenticated);

    console.log(context.authenticated)
    if ((context.authenticated == 'true') ) {
        return (
            <myContext.Provider value={[context, setContext]}>
            <div className="App">

                <PrimarySearchAppBar title={"Election App"}/>

                <PermanentDrawerLeft mainc={MyComponent}/>

            </div>
            </myContext.Provider>

        );
    } else {
        return   (<myContext.Provider value={[context, setContext]}>
                <SignInPage txt={"Login."} afterHandle={setContext}/>
                </myContext.Provider>)

            }
}

export default App;

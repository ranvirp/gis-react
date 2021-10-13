import './App.css';
import React, {useContext} from 'react';
import MyComponent from "./Village";

import PrimarySearchAppBar from "./components/toolbar/toolbar1";
import PermanentDrawerLeft from "./components/sidebar/sidebar1";
import SignInPage from "./components/pages/signinpage";
var authenticated = {
    'authenticated': true,
    'email': null
}
const  setAuthenticated = (authenticatedstatus,email) => {
    console.log(authenticatedstatus)
    authenticated.authenticated = authenticatedstatus
    authenticated.email = email
}
export const myContext = React.createContext([authenticated, setAuthenticated])

function App() {
    const [context, setContext] = React.useState(authenticated);

    console.log(context.authenticated)
    if ((context.authenticated) ) {
        return (
            <myContext.Provider value={[context, setContext]}>
            <div className="App">

                <PrimarySearchAppBar/>

                <PermanentDrawerLeft mainc={MyComponent}/>

            </div>
            </myContext.Provider>

        );
    } else {
        return   (<myContext.Provider value={[authenticated, setAuthenticated]}>
                <SignInPage txt={"This is my first website"}/>
                </myContext.Provider>)

            }
}

export default App;

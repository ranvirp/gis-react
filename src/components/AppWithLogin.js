import React from 'react';

import PrimarySearchAppBar from "./toolbar/toolbar1";
import PermanentDrawerLeft from "./sidebar/sidebar";
import SignInPage from "./pages/signinpage";
import './App.css'

export const  setAuthenticated = (result) => {

    localStorage.setItem('authenticated', result.authenticated)
    localStorage.setItem('userid', result.userid)
    localStorage.setItem('token', result.token)

}
export const myContext = React.createContext()
const authenticated = {
    'authenticated': (localStorage.getItem('authenticated') === 'true'),
    'userid': localStorage.getItem('userid'),
    'token': localStorage.getItem('token')
}
function App(props) {

    const [context, setContext] = React.useState(authenticated);
    const handleValues =  (values, result) => {

        if (result.errors) {
            console.log('errors')
            setAuthenticated({authenticated:false, userid:null, token:null})
            setContext({authenticated:false, userid:null, token:null})
        } else {
            console.log('noerrors')
            setAuthenticated({authenticated:true, userid:values.email, token:result.data.token_auth.token})

            setContext({authenticated:true, userid:values.email, token:result.data.token_auth.token})
        }

    }
    const logout = ()=>
    {
        setAuthenticated({authenticated:false, userid:null, token:null})
        setContext({authenticated:false, userid:null, token:null})
    }
    //console.log(context)

        return (
             (context.authenticated == true)?

                <div className="App">

                    <PrimarySearchAppBar title={props.title}/>

                    <PermanentDrawerLeft sidebaritems={props.sidebaritems} context={{auth:context,logout:logout}}/>

                </div>



   :

            <SignInPage txt={"Login."} afterHandle={handleValues}/>



);
}

export default App;

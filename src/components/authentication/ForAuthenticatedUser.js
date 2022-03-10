import React from "react"
import {SignIn} from "./SignIn/signinreacthook";
const initialState = {
    authenticated:false,
    token_auth:{
       token:localStorage.token,
        refresh_token:localStorage.refreshToken,
    payload: {
        "username": null,
        "exp": 0,
        "origIat": 0
    },
    },


};
function parseJwt (token) {
    if (token == null) return false
    else {
        var base64Url = token.split('.')[1];
        if (base64Url) {
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        }
        return {}
    }
};
function isAuthenticated()
{
    const token = localStorage.token
    if (token==null) return false
    const decoded = parseJwt(token??'')
    const exp = decoded.exp
    const timenow = Date.now()
    if (exp < timenow) return false
    console.log(decoded, "decoded")
    if (decoded.username) return decoded.username

}
const username = isAuthenticated()
export function ForAuthenticatedUser(props)
{
    const [authenticated,setAuthenticated ] = React.useState(username?true:false)
    const [authToken,setAuthToken ] = React.useState(initialState)

    function afterHandle(data, results)
    {
       if (!results.errors)
       {
           setAuthToken(results.data.token_auth)
           localStorage.token = results.data.token_auth.token
           setAuthenticated(true)

       }
    }

    const user = {
        authenticated:authenticated,
        username:username?username:null,
        logout:()=>{localStorage.token = null;setAuthToken(null);setAuthenticated(false)}
    }

    return (

         authenticated ? <>
                    {props.children.map((value,index)=>
                      {return React.cloneElement(value, {user:user, key:index})})}

                </>


                :<SignIn afterHandle={afterHandle}/>

    )
}
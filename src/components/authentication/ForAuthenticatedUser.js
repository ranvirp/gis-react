import React, {useEffect} from "react"
import {SignIn} from "./SignIn/signinreacthook";
import {graphqlFetch} from "../../apps/common/hooks/GraphQLHooks";

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
}
 function  getRefreshToken(token)
{
    const query = 'mutation refresh_token($token: String!) {\n' +
        '  refresh_token(token: $token) {\n' +
        '    token\n' +
        '    payload\n' +
        '    refresh_expires_in\n' +
        '  }\n' +
        '}'
    return graphqlFetch(query, {token:token},'refresh_token')


}
function isAuthenticated()
{
    const token = localStorage.token
    console.log('token', token)
    if (token === 'null') {
        console.log('token is null')
        return false
    }
    const decoded = parseJwt(token??'')
    const exp = decoded.exp
    const timenow = Date.now()/1000
    console.log("tokenexp and timenow",exp, timenow)
    console.log(decoded)
    console.log((exp - timenow)/60)
    const diff = (exp - timenow)/60
    if ( diff < 0 ) {
        // send refresh_token
        localStorage.token = null
        return false
    } else if (diff <=4.3) {

        getRefreshToken(localStorage.token).then(res=>{localStorage.token = res.items.token})

        //localStorage.clear()
    }
    console.log(decoded, "decoded")
    if (decoded.username) return decoded.username

}
const username = isAuthenticated()
//console.log(username)
export function ForAuthenticatedUser(props)
{
    console.log("checking authentication at", props, props.children)

    function afterHandle(token)
    {
      props.fn(Date.now()/1000)
    }
   const username = isAuthenticated()
    const user = {
        authenticated:username !== false,
        username:username?username:null,
        logout:()=>{ localStorage.token = null;

            console.log("now loggin out")
            props.fn(Date.now()/1000)}
    }
    console.log("authenticated", user.authenticated)

    return (

         user.authenticated ? <>

                    {props.children.map((value,index)=>
                      {return React.cloneElement(value, {user:user, key:index})})}

                </>


                :<SignIn afterHandle={afterHandle}/>


    )
}
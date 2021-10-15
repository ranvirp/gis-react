import React, {useContext} from 'react';
import MultiColumnGrid from "./multicolumngrid";
import Typography from "@material-ui/core/Typography";
import SignIn from "../authentication/SignIn/SignIn";
import {myContext} from "../App";
import {authenticated, setAuthenticated} from "../App";

const axios = require("axios")

const LOGIN_QUERY = (values) => {return `
  query Login{ 
      userauth(userinfo: {userid:"${values.email}", passwd:"${values.password}", deviceid:"deviceid 1.0", os:"ios14", clienttype:"safari"}) {
        userid
        token 
        success
      }
      }

`;}
const handleValues = (values, afterHandle) => {
    axios({
        url: 'http://localhost:3001/graphql',
        method: 'post',
        data: {
            query: LOGIN_QUERY(values)
        }
    }).then((result) => {
        //console.log(result.data)
        //console.log(result.data.userauth)
        const myOut = result.data.userauth
        if (myOut.error != true) {
           // console.log(myOut)
            setAuthenticated(myOut)
            afterHandle(authenticated)
        }
    });
}
export default function SignInPage(props) {
    const [context, setContext] = useContext(myContext)
    const afterHandle = (result)=>{
        if (!result.error  && result.success) {
            localStorage.setItem('authenticated', 1)
            localStorage.setItem('userid', result.userid)
            localStorage.setItem('token', result.token)

        }
    }
    const elems = {'6': <SignIn handleValues={handleValues} afterHandle={props.afterHandle}/>, '5':  <Typography gutterBottom={true} align="justify"  variant="h6"  sx={{marginLeft:'40px'}} component="div">
            {props.txt}
        </Typography>}
    return (

        <MultiColumnGrid elems={elems} noofcolumns={4} numrows={2} />
    );
}

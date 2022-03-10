import React, {useContext} from 'react';
import MultiColumnGrid from "./MultiColumnGrid";
import Typography from "@mui/material/Typography";
import {SignIn} from "../authentication/SignIn/signinreacthook";



const axios = require("axios")

const LOGIN_QUERY = (values) => {
    return `
  query Login{ 
      userauth(userinfo: {userid:"${values.email}", passwd:"${values.password}", deviceid:"deviceid 1.0", os:"ios14", clienttype:"safari"}) {
        userid
        token 
        success
      }
      }

`;}
const GET_AUTH_TOKEN_MUTATION = `
mutation ($email:String!,$password:String!) {token_auth(username:$email, password:$password)
{token}
}`

export default function SignInPage(props) {

    const heading = <Typography component={"span"} variant={"h5"} sx={{color:"white"}}>Welcome to Chakbandi, Uttar Pradesh</Typography>
    var elems = {'21': <SignIn  afterHandle={props.afterHandle} sx={{ backgroundColor:"#FFFFFF"}}/>}
    elems['11'] = heading
    //elems['21'] = heading
    var styles = {'61':{backgroundColor:"black"}}
    //styles['21'] = {backgroundColor:"green"}
    const containerStyle = {backgroundColor:"#FFFFFF"}

    return (

        <MultiColumnGrid containerStyle={containerStyle} styles={styles} defaultStyle={{backgroundColor:"#FFFFFF"}} elems={elems} left={0} right={0} colwidths={[[100],[27, 46, 27], [37, 26, 37], [100]]} rowheights={[10,5,45,40]} />
    );
}

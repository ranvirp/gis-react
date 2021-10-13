import React from 'react';
import MultiColumnGrid from "./multicolumngrid";
import Typography from "@material-ui/core/Typography";
import SignIn from "../authentication/SignIn/SignIn";
import {gql} from "@apollo/client";
import {client} from "../../index"
const axios = require("axios")

const LOGIN_QUERY = (values) => {return `
  query Login{ 
      userauth(userinfo: {userid:"${values.email}", passwd:"${values.password}", deviceid:"hello", os:"osnew", clienttype:"newclient"}) {
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
        console.log(result.data)
    });
}
export default function SignInPage(props) {
    const afterHandle = (result)=>{console.log(result)}
    const elems = {'6': <SignIn handleValues={handleValues} afterHandle={afterHandle}/>, '5':  <Typography gutterBottom={true} align="justify"  variant="h6"  sx={{marginLeft:'40px'}} component="div">
            {props.txt}
        </Typography>}
    return (

        <MultiColumnGrid elems={elems} noofcolumns={4} numrows={2} />
    );
}

import React, {useEffect} from "react"
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import {graphqlFetch, useGraphQlQuery} from "../../apps/common/hooks/GraphQLHooks";
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../forms/ReactHookFormInput";
import {Box, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import * as yup from "yup"
import PrimarySearchAppBar from "../toolbar/toolbar1";
import PermanentDrawerLeft from "../sidebar/sidebar";
const query = `query a($token: String!) {
\treset_valid(token: $token) {
\t\tvalid
\t\tusername
\t}
}
`
const mutation = `mutation a($username: String!, $passwd: String!, 
\t$token: String!) {
\tpassword_reset(username: $username, passwd: $passwd, token: $token) {
\t\tsuccess error
\t}
}`
//TODO
export  function PasswordResetWithoutOldPassword(props)
{
    const location = useLocation();
    const form = useForm()
    const parsed = queryString.parse(location.search)
    const token = parsed.reset
    const [items,setItems] = React.useState({})
    useEffect(()=> {
         graphqlFetch(query, {token: token}, 'reset_valid').then(({items,errors,success})=>{
            setItems(items)
        })



    },[token])
    function onSubmit(data)
    {
        const result =  graphqlFetch(mutation, {username:data['username'], token:data['token'], passwd:data['password']},'password_reset')
        result.then(
            ({items})=> {
                console.log(items)
            }
        )
    }


    //console.log('render')
    if (!token || !items.username) {return <>{props.children}</>}

        return (
          items.valid?
              <Box>
              <PrimarySearchAppBar title={props.title}/>

              <Box sx={{marginTop:"120px",display:"flex",flexDirection:"column"}}>

                  <Typography>Please reset your password for user {items.username}</Typography>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <ReactHookFormInput name={"password"} comp={<TextField type={"password"}/>} label={"Password"} form={form} fullWidth/>
                <ReactHookFormInput name={"confirmpassword"} comp={<TextField type={"password"}/>} label={"Confirm Password"} form={form} fullWidth/>
                <ReactHookFormInput name={"token"} comp={<input type={"hidden"} />}  value={token} form={form} fullWidth/>
                <ReactHookFormInput name={"username"} comp={<input  type={"hidden"} />}  value={items.username} form={form} fullWidth/>
                <Button type={"submit"}>Submit</Button>
            </form>
              </Box></Box>: <>{props.children}</>

        )




}
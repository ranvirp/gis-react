import React, {useEffect} from "react"
import {useHistory, useLocation} from 'react-router-dom';
import queryString from 'query-string';
import {graphqlFetch, useGraphQlQuery} from "../../apps/common/hooks/GraphQLHooks";
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../forms/ReactHookFormInput";
import {Box, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import * as yup from "yup"
import PrimarySearchAppBar from "../toolbar/toolbar1";
import {SignIn} from "./SignIn/signinreacthook";
import {yupResolver} from "@hookform/resolvers/yup";
import Password from "./common/password";
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
const yupSchema = yup.object().shape({

    password:yup.string().required(),
    confirmpassword:yup.string()   .oneOf([yup.ref('password'), null], "Passwords don't match!").required()
})
export  function PasswordResetWithoutOldPassword(props)
{
    const location = useLocation();
    const history = useHistory()
    const form = useForm({resolver:yupResolver(yupSchema)})

    const [items,setItems] = React.useState({})
    const [resetDone,setResetDone] = React.useState(false)
    const parsed = queryString.parse(location.search)
    const token = parsed.reset
    useEffect(()=> {
        if (token)
         graphqlFetch(query, {token: token}, 'reset_valid').then(({items,errors,success})=>{
            setItems(items)
        })



    },[token])

    function onSubmit(data)
    {
        data.token = token
        data.username = items.username
        console.log(data)

        const result =  graphqlFetch(mutation, {username:data['username'], token:data['token'], passwd:data['password']},'password_reset')
        result.then(
            ({items})=> {
                console.log(items)
                setResetDone(true)
                history.push({search:''})

            }
        )
    }


    //console.log('render')
   // history.push('/')
    if (resetDone) {

        return (<SignIn/>) }
    if (!token || !items.username) {return <Box key={"user" + items.username}>{props.children}</Box>}

        return (
          items.valid?
              <Box>
              <PrimarySearchAppBar title={props.title}/>

              <Box sx={{marginTop:"120px",display:"flex",flexDirection:"column"}}>

                  <span>Please reset your password for user {items.username}</span>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <ReactHookFormInput name={"password"} comp={<Password/>} label={"Password"} form={form} fullWidth/>
                <ReactHookFormInput name={"confirmpassword"} comp={<Password/>} label={"Confirm Password"} form={form} fullWidth/>
                 <Button type={"submit"}>Submit</Button>
            </form>
              </Box></Box>: <Box><Box><span>Reset token already used</span></Box>{props.children}</Box>

        )




}
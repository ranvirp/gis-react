import React from "react";
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../forms/ReactHookFormInput";
import Button from "@mui/material/Button";
import {graphqlFetch} from "../../apps/common/hooks/GraphQLHooks";
import {Box, Stack} from "@mui/material";
import {SignIn} from "./SignIn/signinreacthook";
export function SendPasswordResetEmail(props)
{
    const [loginPage, setLoginPage] = React.useState(false)
    const [status, setStatus] = React.useState('')

    const form = useForm()
    function onSubmit(data)
    {
        console.log(data)
        const result = graphqlFetch('query a($email:String!){email_reset_link(email:$email){status}}',data,'email_reset_link')
        result.then(res=>{
            form.reset()
            setStatus("Email has been sent")
        })
        if (!result.status) {setStatus("sending email")}
    }
    if (loginPage) return (<SignIn/>)
    function goToLogin(e)
    {
        setLoginPage(true)
    }
    return(
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", height:"600px"}}>

            <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack spacing={4}>
                <Box>{status}</Box>
                <h2>Welcome to E-chakbandi</h2>

            <span> Please enter your email. Password reset link shall be sent on this email</span>

            <ReactHookFormInput form={form} label={"Email"} name={"email"}/>
            <Button type={"submit"}>Submit</Button>
                <Button onClick={goToLogin}>Go back to Login</Button>

            </Stack>
            </form>
        </Box>
    )
}
import {GenericForm} from "../../forms/genericreacthookform";

import React from "react";
import * as yup from "yup";
import {Paper, Typography, Grid, Button} from "@mui/material";
import Email from "../common/email";
import Password from "../common/password";
import {ReactHookFormInput} from "../../../apps/upchakbandi/components/forms/formutilities";

const yupschema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),

    password: yup
        .string('Enter your password')

        .required('Password is required'),

});
const LoginFormComponent = (props) => {
    const margin = "5px 10px"
    return (
        <Paper elevation={4}  sx={{ ...props.sx}}>

            <Typography align={"center"} variant={"h6"} sx={{display:'block'}}>Please Sign In</Typography>


                <Grid container  spacing={3}  >
                    <Grid item xs={12} sx={{margin:margin}}>
                        <ReactHookFormInput {...props} comp={<Email/>} id='email' props={{


                            label: 'Email',
                            required: true,
                            fullWidth:true,


                        }}/>

                    </Grid>
                    <Grid item xs={12} sx={{margin:margin}}>
                        <ReactHookFormInput {...props} comp={<Password/>} id='password' props={{


                            label: 'Password',
                            required: true,
                            fullWidth:true,


                        }}/>

                    </Grid>

                    <Grid item xs={12} sx={{margin:margin}}>

                        <Button color="primary" variant="contained" fullWidth type="submit" >
                            Submit
                        </Button>
                    </Grid>

                </Grid>

        </Paper>
    );
}
const GET_AUTH_TOKEN_MUTATION = `
mutation ($email:String!,$password:String!) {token_auth(username:$email, password:$password)
{token}
}`
function varsLogin(data){
    return {email:data.email, password:data.password}
}
export function SignIn(props)
{

    return (
        <GenericForm  afterSubmitFn={props.afterHandle} debug={true} yupSchema={yupschema} formComponent={<LoginFormComponent/>} formComponentProps={props} mutationQuery={GET_AUTH_TOKEN_MUTATION} onSubmitFn={(result)=>{console.log(result)}} variables={varsLogin}/>

    )
}
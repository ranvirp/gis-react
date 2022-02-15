import {GenericReactHookForm} from "../../forms/GenericReactHookForm";

import React from "react";
import * as yup from "yup";
import {
    Paper,
    Typography,
    Grid,
    Button,
    Divider,
    Box,
    Container,
    CssBaseline,
    Avatar,
    FormControlLabel, Checkbox, Link, createTheme
} from "@mui/material";
import Email from "../common/email";
import Password from "../common/password";
import {ReactHookFormInput} from "../../../apps/upchakbandi/components/forms/formutilities";
import {ThemeProvider} from "@mui/styles";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const yupschema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),

    password: yup
        .string('Enter your password')

        .required('Password is required'),

});
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
const LoginFormComponent = (props) => {
    const margin = "5px 10px"

    return (

                <Grid container  spacing={3}  sx={{margin:'10px', backgroundColor:'#FFFFFFF'}}>
                    <Grid item xs={12} sx={{cornerRadius:'6px 6px 0 0'}}>
                        <Typography align={"center"} variant={"h6"} sx={{display:'block', padding:'5px 0 5px 0'}}>Please Sign In</Typography>

                    </Grid>
                    <Grid item xs={12} sx={{margin:margin}}>
                        <ReactHookFormInput {...props} comp={<Email/>} id='email' props={{


                            label: 'Email',
                            required: true,
                            fullWidth:true,


                        }}/>

                    </Grid>
                    <Divider/>
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


    );
/*
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box  sx={{ mt: 1 }}>
                        <ReactHookFormInput {...props} comp={<Email/>} id='email' props={{
id:'email',

                            label: 'Email',
                            required: true,
                            fullWidth:true,


                        }}/>
                        <ReactHookFormInput {...props} comp={<Password/>}  props={{
                            id:'password',

                            label: 'Password',
                            required: true,
                            fullWidth:true,


                        }}/>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );

     */
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
        <GenericReactHookForm afterSubmitFn={props.afterHandle} debug={true} yupSchema={yupschema} formComponent={<LoginFormComponent/>} formComponentProps={props} mutationQuery={GET_AUTH_TOKEN_MUTATION} onSubmitFn={(result)=>{console.log(result)}} variables={varsLogin}/>

    )
}
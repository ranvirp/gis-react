import React from 'react';
import * as yup from 'yup';
import Password from "../common/password";
import Email from "../common/email";
import {makeStyles} from "@mui/styles";
import {Paper, Typography, Grid, Button} from "@mui/material";
import {GenericReactHookForm} from "../../forms/GenericReactHookForm";

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),

    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirmPassword: yup
        .string('Confirm your password')
        .oneOf([yup.ref('password')], "Passwords must match")

        .required('Password is required'),
});
const useStyles = makeStyles({
    root: {
        backgroundColor: "red",
        margin: "auto"
    },
    root2: {
        backgroundColor: "green",
        margin: "auto"
    },
    marginall: {
        marginLeft:'20px',
        marginRight:'20px'
    },
    margintop: {
        marginTop:'20px',
        marginBottom:'20px',


    }
});
export default function Signup(props)  {
    const classes = useStyles()
   const formComponent =         <Grid container  spacing={3}>
       <Grid item xs={12} className={classes.marginall}>
           <Email
               fullWidth
               id="email"
               name="email"
               label="Email"

           />
       </Grid>
       <Grid item xs={12} className={classes.marginall}>
           <Password
               fullWidth
               id="password"
               name="password"
               label="Password"

           />
       </Grid>
       <Grid item xs={12} className={classes.marginall}>
           <Password
               fullWidth
               id="confirmPassword"
               name="confirmPassword"
               label="Confirm Password"


           />
       </Grid>
       <Grid item xs={12} className={classes.marginall}>

           <Button color="primary" variant="contained" fullWidth type="submit">
               Submit
           </Button>
       </Grid>

   </Grid>

    return (
        <Paper elevation={4} className={classes.marginall}>
            <Typography align={"center"} variant={"h6"} className={classes.margintop}>Please Sign Up</Typography>
        <GenericReactHookForm formComponent={formComponent}/>
        </Paper>
    );
};


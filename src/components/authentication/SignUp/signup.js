import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import Password from "../common/password";
import Email from "../common/email";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";

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
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
            confirmPassword:'foobar'
        },
        validationSchema: validationSchema,
        validateOnChange: true,

        onSubmit: (values) => {
            props.handleValues(values)
        },
    });

    return (
        <Paper elevation={4} className={classes.marginall}>
            <Typography align={"center"} variant={"h6"} className={classes.margintop}>Please Sign Up</Typography>
        <form onSubmit={formik.handleSubmit}>

        <Grid container  spacing={3}>
                <Grid item xs={12} className={classes.marginall}>
                <Email
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                </Grid>
                <Grid item xs={12} className={classes.marginall}>
                <Password
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                </Grid>
                <Grid item xs={12} className={classes.marginall}>
                <Password
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
                </Grid>
                    <Grid item xs={12} className={classes.marginall}>

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
                    </Grid>

    </Grid>
</form>
        </Paper>
    );
};


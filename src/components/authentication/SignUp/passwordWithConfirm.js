import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Box, Paper} from "@mui/material";
import Password from "../common/password";


export default function PasswordWithConfirm(props)  {
    const [submitted, setSubmitted] = React.useState(false);
    const validationSchema = yup.object({

        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        confirmPassword: yup
            .string('Confirm your password')
            .oneOf([yup.ref('password')], "Passwords don't match")
            .required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            password: 'foobar',
            confirmPassword:'foobar'
        },
        validationSchema: validationSchema,
        validateOnChange: true,


        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    React.useEffect(()=>{formik.handleSubmit()}) 



    return (

            <Box m={props.m} pt={props.pt}>


                    <Password
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Password
                        fullWidth
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />

            </Box>

    );
};


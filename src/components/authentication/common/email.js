import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Email(props) {
    return (


            <TextField
                {...props}
                defaultValue={props.defaultValue}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle/>
                        </InputAdornment>
                    ),
                }}
                variant="standard"

            />

    )
}

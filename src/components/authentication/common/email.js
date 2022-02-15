import * as React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

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

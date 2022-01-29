import React from 'react';
import Button from "@material-ui/core/Button";
const facebookLoginEndPoint = 'https://www.facebook.com/v12.0/dialog/oauth?'
const facebookAppId = '546189873350544'
const redirect_uri = 'http://localhost:3000/fboauth'
const clientToken = '4cdf7c312814975a8dfe3e61d8f06dec'

export default function FacebookForm(props) {
    const handleClick = ( comp) => {
        console.log("clicked");
        console.log("facebook login");
        const path = facebookLoginEndPoint + 'client_id=' + facebookAppId + '&redirect_uri=' + redirect_uri
        window.location.href = path

    };
    return (
        <div>
            <Button  handleClick={handleClick(props)} >
                Login with Facebook
            </Button>
        </div>
    );
}

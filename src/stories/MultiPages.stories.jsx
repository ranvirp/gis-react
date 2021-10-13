import React from 'react';

import MultiColumnGrid from "../components/pages/multicolumngrid";
import Signup from "../components/authentication/SignUp/signup";
import Typography from "@material-ui/core/Typography";
import LeafletMap from "../components/leaflet/components/leafletmap";
import L from 'leaflet'
import SignInPage from "../components/pages/signinpage";


export default {
    title: 'Multi Column',
    component: MultiColumnGrid,
};

const Template = (args) => <MultiColumnGrid {...args} />;
const Template1 = (args) => <SignInPage {...args} />;
export const signin = Template1.bind({});

export const signup = Template.bind({});
const elems = {'5': <Signup/>, '3':  <Typography gutterBottom={true} align="justify"  variant="h6"  sx={{marginLeft:'40px'}} component="div">
        SHARJAH: Sunil Narine gave glimpses of his 'old mystery' with the ball and then topped it up with three monster sixes as Kolkata Knight Riders' four-wicket victory in an exciting 'Eliminator' dashed Virat Kohli's dream of winning an IPL trophy while leading Royal Challengers Bangalore.
        KKR will now meet Delhi Capitals in the second Qualifier on Wednesday to decide Chennai Super Kings' rivals for the title clash on October 15.
        Scorecard | As it happened
    </Typography>, '4':<LeafletMap/>}
signup.args = {
    // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
   numrows:2,
    elems:elems,
    noofcolumns:3

};
signin.args = {
    // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
   txt:"Mere desh ki dharti"

};

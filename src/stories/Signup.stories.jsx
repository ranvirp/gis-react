import React from 'react';

import SignUp  from '../components/authentication/SignUp/signup';
import * as HeaderStories from './Header.stories';
import SignIn from "../components/authentication/SignIn/SignIn";

export default {
  title: 'SignUp',
  component: SignUp,
};

const Template = (args) => <SignUp {...args} />;
const Template1 = (args) => <SignIn {...args} />;


export const signup = Template.bind({});
export const signin = Template1.bind({})
signup.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
m:4,
  pt:5,
  handleValues:(values)=>{console.log(values)}
};

import React from "react";
import { KhataForm } from "../../apps/chakbandi/components/forms/khata";

export default {
    title: 'Khata Form',
    component:KhataForm
};

const Template = (args) => <KhataForm {...args} />;


export const depform = Template.bind({});


import React from "react";

import SchemaForm from "../experimentalcomponents/forms/schemabasedform";
import testschema from "../form-schemas/testschema";
import {Dropdownschema} from "../form-schemas/dropdownschema";

export default {
    title: 'Schema Form',
    component: SchemaForm,
};
const Template = (args) => <SchemaForm {...args} />;
const values = [{'label':'hi', 'value':'hello'}]

export const depform = Template.bind({});
export const testform = Template.bind({})

depform.args = {
    'schema': Dropdownschema(values)
}
testform.args = {
    'schema': testschema
}



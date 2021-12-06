import React from 'react'
import Form from "@rjsf/material-ui";
//const Form = JSONSchemaForm.default;

export default function SchemaForm(props) {
    return <Form schema={props.schema} />
}

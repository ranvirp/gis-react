import {Field, Form, Formik} from "formik";
import React from "react";

export default function Form1() {
    const initialValues = { textA: '', textB: '', textC: '' };

    return (
        <div className="App1">
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
            >
                <Form>
                    <label>
                        textA
                        <Field name="textA" />
                    </label>
                    <label>
                        textB
                        <Field name="textB" />
                    </label>
                    <label>
                        textC
                        <Field name="textC" />
                        <small>
                            (the result of <code>fetchNewTextC(textA, textB))</code>
                        </small>
                    </label>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )};

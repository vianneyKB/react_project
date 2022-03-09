import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//import { register } from "../slices/auth";
import { clearMessage } from "../../util/slices/message";

const ContactForm = () => {
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        messageRef: "",
    };
    // adding validation
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .test("len", "The firstName must be between 3 and 20 characters.",
                (val) => val && val.toString().length >= 3 && val.toString().length <= 20
            )
            .required("This field is required!"),

        lastName: Yup.string()
            .test("len", "The lastName must be between 3 and 20 characters.",
                (val) => val && val.toString().length >= 3 && val.toString().length <= 20
            )
            .required("This field is required!"),

        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),

        messageRef: Yup.string()
        //     .message()
    })
    const handleSubmit = (formValue) => {
        const { firstName, lastName, email, messageRef } = formValue;
        setSuccessful(false);
        alert('SUCCESS!! :-) \n\n' + JSON.stringify(formValue, null, 4))
    };
    return (
        <div className="col-md-12 contact-form ">
            <div className="container jumbotron">
                <div className=" row col-md-6 offset-md-3">
                    <h1>Contact us</h1>
                    {/* using the validation and values in formik */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="form">
                            {!successful && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <Field name="firstName" type="text" className="form-control" />
                                        <ErrorMessage name="firstName" component="div" className="alert alert-danger" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field name="lastName" type="text" className="form-control" />
                                        <ErrorMessage name="lastName" component="div" className="alert alert-danger" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field name="email" type="email" className="form-control" />
                                        <ErrorMessage name="email" component="div" className="alert alert-danger" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">message</label>
                                        <Field name="message" as="textarea" className="form-control form-textarea" />
                                        <ErrorMessage name="message" component="div" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-2">Send</button>
                                    </div>
                                </div>
                            )}
                        </Form>
                    </Formik>
                </div>
                {message && (
                    <div className="form-group">
                        <div
                            className={successful ? "alert alert-success" : "alert alert-danger"}
                            role="alert"
                        >
                            {message}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ContactForm;
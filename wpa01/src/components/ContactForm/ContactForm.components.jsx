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
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .test(
                "len",
                "The firstName must be between 3 and 20 characters.",
                (val) =>
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            )
            .required("This field is required!"),

        lastName: Yup.string()
            .test(
                "len",
                "The lastName must be between 3 and 20 characters.",
                (val) =>
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            )
            .required("This field is required!"),

        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),

        // message: Yup.string()
        //     .message()
    });
    const handleSubmit = (formValue) => {
        const { firstName, lastName, email, message } = formValue;
        setSuccessful(false);
    };
    return (
        <div className="col-md-12 contact-form">
            <div className="container">
                <h1>Contact us</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="form">
                        {!successful && (
                            <div>
                                <div className="firstName">
                                    <label htmlFor="firstName" id="nameLabel">First Name</label>
                                    <Field name="firstName" type="text" className="form-control" />
                                    <ErrorMessage name="firstName" component="div" className="alert alert-danger" />
                                </div>

                                <div className="lastName">
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
                                    <Field name="message" type="text" className="form-control" />
                                    <ErrorMessage name="message" component="div" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Send</button>
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
    );
};
export default ContactForm;
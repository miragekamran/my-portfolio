import React from "react";
import "../../styles.css";

import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const Contact = (props) => {
  return (
    <Form>
      {props.touched.username && props.errors.username && (
        <p className="error">{props.errors.username}</p>
      )}
      <Field type="text" name="username" placeholder="User Name" />
      {props.touched.email && props.errors.email && <p>{props.errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
      {props.touched.message && props.errors.message && (
        <p>{props.errors.message}</p>
      )}
      <Field component="textarea" name="message" placeholder="Message" />

      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => {
    return {
      username: props.username || "",
      email: props.email || "",
      message: props.message || "",
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required("Please enter your username"),
    email: yup.string().required("Please enter a valid email "),
    message: yup.string().required("Please enter your message"),
  }),
  handleSubmit: (props) => {},
})(Contact);


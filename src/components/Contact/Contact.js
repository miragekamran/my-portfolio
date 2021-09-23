// import React from "react";
// import "./Contact.css";

// import { withFormik, Form, Field } from "formik";
// import * as yup from "yup";

// const Contact = (props) => {
//     return (
//         <Form className="contact">
//             {props.touched.name && props.errors.name && (
//                 <p className="error">{props.errors.name}</p>
//             )}
//             <Field type="text" name="name" placeholder="Name" />
//             {props.touched.email && props.errors.email && (
//                 <p>{props.errors.email}</p>
//             )}
//             <Field type="email" name="email" placeholder="Email" />
//             {props.touched.message && props.errors.message && (
//                 <p>{props.errors.message}</p>
//             )}
//             <Field component="textarea" name="message" placeholder="Message" />

//             <button className="send-msg-btn" type="submit">
//                 Submit
//             </button>
//         </Form>
//     );
// };

// export default withFormik({
//     mapPropsToValues: (props) => {
//         return {
//             name: props.name || "",
//             email: props.email || "",
//             message: props.message || "",
//         };
//     },
//     validationSchema: yup.object().shape({
//         name: yup.string().required("Please enter your name"),
//         email: yup.string().required("Please enter a valid email"),
//         message: yup.string().required("Please enter your message"),
//     }),
//     handleSubmit: (props) => {},
// })(Contact);

import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import "semantic-ui-css/semantic.min.css";

import "./Mes.css";

const SERVICE_ID = "default_service";
const TEMPLATE_ID = "basic";
const USER_ID = "user_SFmpwfJsmdkPCzWzg5JXk";

const Message = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
            (result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully",
                });
            },
            (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                });
            }
        );
        e.target.reset();
    };
    return (
        <div className="Mes">
            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                    id="form-input-control-email"
                    control={Input}
                    label="Email"
                    name="email"
                    placeholder="Email…"
                    required
                    icon="mail"
                    iconPosition="left"
                />
                <Form.Field
                    id="form-input-control-last-name"
                    control={Input}
                    label="Name"
                    name="name"
                    placeholder="Name…"
                    required
                    icon="user circle"
                    iconPosition="left"
                />
                <Form.Field
                    id="form-textarea-control-opinion"
                    control={TextArea}
                    label="Message"
                    name="message"
                    placeholder="Message…"
                    required
                />
                <Button type="submit" color="green">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Message;

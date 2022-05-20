import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";

function FormContactCom(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eeh7rgt",
        "template_tvcjk6p",
        e.target,
        "user_lWjSSnDS51D7egsde0a8d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleShow();
    e.target.reset();
  };

  return (
    <div>
      <div
        style={{
          padding: "15px",
          borderRadius: "10px",
          marginTop: "10px",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            textAlign: "left",
            color: "goldenrod",
            backgroundColor: "black",
          }}
        >
          <h4 style={{ color: "gray" }}>
            I would love to receive your message!
          </h4>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Label as="h5">Company Name</Form.Label>
              <Form.Control type="text" name="CompanyName" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label as="h5">Subject</Form.Label>
              <Form.Control type="text" name="Subject" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label as="h5">Email address</Form.Label>
              <Form.Control type="email" name="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label as="h5">Send Me A Message!</Form.Label>
              <Form.Control as="textarea" rows={3} name="Message" />
            </Form.Group>
            <div style={{ textAlign: "right" }}>
              <Button type="submit">Send</Button>
            </div>
          </Form>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thanks For You Message, i Will Contact with You!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormContactCom;

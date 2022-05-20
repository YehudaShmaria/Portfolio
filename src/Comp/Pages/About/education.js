import React, { useState } from "react";
import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";

function EducationCom(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  return (
    <div>
      <Container>
        <div style={{ textAlign: "left", marginBottom: "10px" }}>
          <h1>
            <cite>Education</cite>
          </h1>
        </div>
        <Row>
          <Col sm={6} md={6} xs={12}>
            <div style={{ color: "black", marginTop: "15px" }}>
              <Card>
                <Card.Header style={{ backgroundColor: "goldenrod" }} as="h5">
                  Full stack development in .NET | Python | MERN
                </Card.Header>
                <span style={{ textAlign: "right", paddingRight: "10px" }}>
                  <cite>
                    <b>01.12.2019 – 01.04.2021</b>
                  </cite>
                </span>
                <div style={{ textAlign: "left" }}>
                  <Card.Body>
                    <Card.Title>Strauss Campus Hadassah College</Card.Title>
                    <Card.Text>
                      The course focuses on the basics of programming, learning
                      algorithm, WEB programming, building window software, and
                      programming paradigms Like object-oriented programming and
                      a layering pattern.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ textAlign: "right" }}>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      Skill learned
                    </Button>
                    <Button
                      href="https://www.strausscampus.co.il/"
                      variant="primary"
                    >
                      Go To website
                    </Button>{" "}
                  </Card.Footer>
                </div>
              </Card>
              <Modal
                centered
                show={show}
                onHide={() => {
                  setShow(false);
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Skill learned</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <Col>
                      <ul>
                        <h2>C#</h2>
                        <li>ASP.NET MVC</li>
                        <li>WinForms</li>
                        <li>Object-Oriented Programming</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <h2>JavaScript</h2>
                        <li>React.JS</li>
                        <li>Node.JS</li>
                        <li>jQuery</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <h2>Python</h2>
                        <li>Django</li>
                        <li>Flask</li>
                        <li>Object-Oriented Programming</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <h2>Styling</h2>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Spring</li>
                      </ul>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
          <Col sm={6} md={6} xs={12}>
            <div style={{ color: "black", marginTop: "15px" }}>
              <Card>
                <Card.Header style={{ backgroundColor: "goldenrod" }} as="h5">
                  Full stack development MERN Stack
                </Card.Header>
                <span style={{ textAlign: "right", paddingRight: "10px" }}>
                  <cite>
                    <b>01.06.2021 – 01.09.2021</b>
                  </cite>
                </span>
                <div style={{ textAlign: "left" }}>
                  <Card.Body>
                    <Card.Title>Yaniv Arad Training Labs</Card.Title>
                    <Card.Text>
                      The course focuses on Full Stack MERN, learning while
                      doing, end-to-end construction in technology, the course
                      is delivered by the most sought-after lecturer in the
                      field.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ textAlign: "right" }}>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setShow1(true);
                      }}
                    >
                      Skill learned
                    </Button>
                    <Button
                      href="https://www.yaniv-arad.com/"
                      variant="primary"
                    >
                      Go To website
                    </Button>
                  </Card.Footer>
                </div>
              </Card>
              <Modal
                centered
                show={show1}
                onHide={() => {
                  setShow1(false);
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Skill learned</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <Col>
                      <ul>
                        <h2>React.js</h2>
                        <li>Full API</li>
                        <li>Interceptors</li>
                        <li>Context</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <h2>DataBase</h2>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Json File</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <h2>Node.JS</h2>
                        <li>Json Web Token</li>
                        <li>Express</li>
                        <li>Middleware</li>
                      </ul>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setShow1(false);
                    }}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EducationCom;

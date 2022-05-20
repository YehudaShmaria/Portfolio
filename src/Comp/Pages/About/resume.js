import React, { useState } from "react";
import { Col, Row, Image, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function ResumeCom() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <div style={{ textAlign: "left", marginBottom: "10px" }}>
        <h1>
          <cite>My Resume</cite>
        </h1>
      </div>

      <Row>
        <Col md={4} sm={12} xs={12}>
          <div style={{ marginTop: "10px" }}>
            <Image
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              src={process.env.PUBLIC_URL + "/Images/CV.jpg"}
            ></Image>
          </div>
        </Col>
        <Col md={4} sm={6} xs={6}>
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <Image
              style={{ width: "220px", height: "auto", borderRadius: "10px" }}
              src={process.env.PUBLIC_URL + "/Images/MyCV.png"}
            ></Image>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6}>
          <div style={{ textAlign: "left" }}>
            <div style={{ padding: "50px" }}>
              <Button
                variant="info"
                onClick={() => {
                  setLgShow(true);
                }}
              >
                View
              </Button>
            </div>
            <div style={{ padding: "50px" }}>
              <Link to="/YehudaResume.pdf" target="_blank" download>
                <Button variant="info">Download</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <Modal
        centered
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Yehuda Resume
          </Modal.Title>
          <Link to="/YehudaResume.pdf" target="_blank" download>
            <Button style={{ marginLeft: "10px" }} variant="success">
              Download
            </Button>
          </Link>
        </Modal.Header>
        <Modal.Body>
          <Image
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            src={process.env.PUBLIC_URL + "/Images/MyCV2.png"}
          ></Image>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/YehudaResume.pdf" target="_blank" download>
            <Button variant="success">Download</Button>
          </Link>
          <Button
            onClick={() => {
              setLgShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ResumeCom;

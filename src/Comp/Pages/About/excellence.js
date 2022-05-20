import React, { useRef, useState } from "react";
import { Row, Col, Image, Card, Button, Modal } from "react-bootstrap";
import { use3dEffect } from "use-3d-effect";

function ExcellenceCom(props) {
  const ref = useRef(null);
  const [lgShow, setLgShow] = useState(false);
  const [lgShow1, setLgShow1] = useState(false);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  return (
    <div>
      <div style={{ textAlign: "left", marginBottom: "10px" }}>
        <h1>
          <cite>Excellence</cite>
        </h1>
      </div>
      <Row>
        <Col sm={6} md={6} xs={12}>
          <div style={{ color: "black", marginTop: "10px" }}>
            <Card>
              <Card.Header style={{ backgroundColor: "goldenrod" }} as="h5">
                Outstanding Rosh Hashanah
              </Card.Header>
              <div style={{ textAlign: "left" }}>
                <Card.Body>
                  <Row>
                    <Col sm={6} md={6} xs={12}>
                      <Image
                        style={{ width: "100%", height: "auto" }}
                        src={process.env.PUBLIC_URL + "/Images/My2.jpg"}
                      ></Image>
                    </Col>
                    <Col sm={6} md={6} xs={12}>
                      <Card.Text style={{ marginTop: "25px" }}>
                        Rosh Hashanah Outstanding from the Commander of the
                        Investigations and Intelligence Division.{" "}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer style={{ textAlign: "right" }}>
                  <Button
                    onClick={() => {
                      setLgShow(true);
                    }}
                    variant="primary"
                  >
                    Certificate of Excellence
                  </Button>
                </Card.Footer>
              </div>
            </Card>
          </div>
        </Col>
        <Col sm={6} md={6} xs={12}>
          <div style={{ color: "black", marginTop: "10px" }}>
            <Card>
              <Card.Header style={{ backgroundColor: "goldenrod" }} as="h5">
                Outstanding in the technology section
              </Card.Header>
              <div style={{ textAlign: "left" }}>
                <Card.Body>
                  <Row>
                    <Col sm={6} md={6} xs={12}>
                      <Image
                        style={{ width: "100%", height: "auto" }}
                        src={process.env.PUBLIC_URL + "/Images/mador.jpg"}
                      ></Image>
                    </Col>
                    <Col>
                      <Card.Text style={{ marginTop: "25px" }}>
                        Outstanding of the technology section, for introducing
                        special capabilities to field units.{" "}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer style={{ textAlign: "right" }}>
                  <Button
                    onClick={() => {
                      setLgShow1(true);
                    }}
                    variant="primary"
                  >
                    Certificate of Excellence
                  </Button>
                </Card.Footer>
              </div>
            </Card>
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
            Outstanding Rosh Hashanah
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            style={{ width: "100%", height: "auto" }}
            src={process.env.PUBLIC_URL + "/Images/ExRoshHashana.png"}
          ></Image>
        </Modal.Body>
      </Modal>
      <Modal
        centered
        size="lg"
        show={lgShow1}
        onHide={() => setLgShow1(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Outstanding in the technology section
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            style={{ width: "100%", height: "auto" }}
            src={process.env.PUBLIC_URL + "/Images/ExMador.png"}
          ></Image>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ExcellenceCom;

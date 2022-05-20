import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  Alert,
  Col,
  Row,
  Carousel,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

function AboutHomeCom(props) {
  const [lgShow, setLgShow] = useState(false);
  const history = useHistory();

  const { background, rotateZ } = useSpring({
    from: {
      background: "#46e891",
      rotateZ: -50,
    },
    to: {
      background: "#277ef4",
      rotateZ: 200,
    },
    config: {
      duration: 2000,
    },
    loop: { reverse: true },
  });

  return (
    <div style={{ fontFamily: "monospace" }}>
      <Row>
        <Col sm={6} xs={12} md={3}>
          <div
            style={{ padding: "50px", textAlign: "center" }}
            onClick={() => {
              history.push("/about");
            }}
          >
            <animated.div
              style={{
                background,
                width: 120,
                height: 120,
                borderRadius: 16,
                rotateZ,
              }}
            >
              <h3>About Me</h3>
              <p style={{ color: "black" }}>Click Me!</p>
            </animated.div>
          </div>

          <div>
            <h5>Yehuda CV</h5>
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => {
                setLgShow(true);
              }}
              variant="info"
            >
              View
            </Button>
            <Link to="/YehudaResume.pdf" target="_blank" download>
              <Button variant="info">Download</Button>
            </Link>
          </div>

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
        </Col>
        <Col sm={12} md={5} xs={12}>
          <div style={{ textAlign: "left", padding: "10px" }}>
            <h3>Short review</h3>
            <Alert variant="dark">
              Full Stack programmer, MERN && .NET && Python
            </Alert>
            <Alert style={{ background: "goldenrod", color: "white" }}>
              Israel Police Intelligence Division, 2 years
            </Alert>
            <Alert variant="dark">
              Project management in the field of GPS...
            </Alert>
            <Alert style={{ background: "goldenrod", color: "white" }}>
              High self-learning and love of knowledge...
            </Alert>
          </div>
        </Col>
        <Col sm={6} md={4} xs={12}>
          <div>
            <h3>My story in pictures</h3>
            <div style={{ padding: "10px" }}>
              <Carousel variant="dark" interval={3000}>
                <Carousel.Item>
                  <img
                    height={"290px"}
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/Images/police.jpg"}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height={"290px"}
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/Images/My.jpg"}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height={"290px"}
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/Images/MERN.png"}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height={"290px"}
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/Images/net.jpg"}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height={"290px"}
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/Images/python.jfif"}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutHomeCom;

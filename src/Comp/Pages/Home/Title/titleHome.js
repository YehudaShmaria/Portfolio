import React, { useRef } from "react";
import {
  Button,
  OverlayTrigger,
  Row,
  Col,
  Tooltip,
  Image,
} from "react-bootstrap";
import Typical from "react-typical";
import "./title.css";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import { Link } from "react-router-dom";

function TitleHomeCom(props) {
  const ref = useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click Me
    </Tooltip>
  );
  return (
    <div>
      <div style={{ marginBottom: "50px", padding: "50px" }}>
        <Row>
          <Col md={4} sm={5} xs={12}>
            <animated.div
              ref={ref}
              style={{
                color: "white",
                padding: "2em",
                ...style,
              }}
              {...mouseHandlers}
            >
              <div data-aos="zoom-in">
                <Image
                  className="MyImage"
                  rounded
                  src={process.env.PUBLIC_URL + "/Images/Me2.jpg"}
                />
              </div>
            </animated.div>
          </Col>
          <Col md={8} sm={7} xs={12}>
            <div data-aos="flip-top">
              <div className="text-dark mt-3">
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontFamily: "monospace" }}>
                    Hello world:
                    <Typical
                      loop={Infinity}
                      steps={[
                        "My Name is Yehuda Shmaria",
                        3000,
                        "Full Stack Development",
                        3000,
                      ]}
                    ></Typical>
                  </p>
                </div>
                <h3>Welcome To My Portfolio!!</h3>
                <div style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                  <h5 style={{ fontFamily: "monospace" }}>
                    You can read{" "}
                    <Link to="/about" style={{ textDecoration: "none" }}>
                      {" "}
                      About me
                    </Link>
                    ,{" "}
                    <Link to="/projects" style={{ textDecoration: "none" }}>
                      Watch My projects
                    </Link>
                    , and{" "}
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                      Contact me.
                    </Link>{" "}
                  </h5>
                  <h5 style={{ fontFamily: "monospace" }}>
                    Hope you'll enjoy!!
                  </h5>
                </div>
              </div>
              <div className="text-dark mt-2">
                <Row>
                  <Col sm={3} xs={4} md={4}>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        onClick={() => {
                          props.goToRef("aboutRef");
                        }}
                        variant="warning"
                      >
                        About
                      </Button>
                    </OverlayTrigger>
                  </Col>
                  <Col sm={4} xs={5} md={4}>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        onClick={() => {
                          props.goToRef("projectRef");
                        }}
                        variant="warning"
                      >
                        Projects
                      </Button>
                    </OverlayTrigger>
                  </Col>
                  <Col sm={4} xs={3} md={4}>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        onClick={() => {
                          props.goToRef("contactRef");
                        }}
                        variant="warning"
                      >
                        Contact
                      </Button>
                    </OverlayTrigger>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TitleHomeCom;

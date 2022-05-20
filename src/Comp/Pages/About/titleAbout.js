import { Row, Col, Image, Button } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";

function TitleAboutCom(props) {
  const ref = useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ fontFamily: "monospace" }}>
      <div>
        <Row>
          <Col sm={5} md={5} xs={12}>
            <div
              style={{
                background: "black",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <animated.div
                ref={ref}
                style={{
                  color: "white",
                  padding: "2em",
                  ...style,
                }}
                {...mouseHandlers}
              >
                <div style={{ paddingTop: "20px" }}>
                  <Image
                    height={"200x"}
                    rounded
                    src={process.env.PUBLIC_URL + "/Images/Me2.jpg"}
                  />
                </div>
              </animated.div>
              <div style={{ color: "goldenrod", padding: "20px" }}>
                <h2>Full Stack Development</h2>
              </div>
            </div>
          </Col>

<<<<<<< HEAD
    const ref = useRef(null);
    const { style, ...mouseHandlers } = use3dEffect(ref);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{ fontFamily: 'monospace' }}>
            <div>
                <Row>
                    <Col sm={5} md={5} xs={12}>
                        <div style={{ background: 'black', borderRadius: '10px', marginTop: '10px' }}>

                            <animated.div
                                ref={ref}
                                style={{
                                    color: 'white', padding: '2em',
                                    ...style
                                }}
                                {...mouseHandlers}
                            >

                                <div style={{ paddingTop: '20px' }}>
                                    <Image height={'200x'} rounded src={process.env.PUBLIC_URL + "/Images/Me2.jpg"} />
                                </div>
                            </animated.div>
                            <div style={{ color: 'goldenrod', padding: '20px' }}>
                                <h2>Full Stack Development</h2>
                            </div>
                        </div>
                    </Col>

                    <Col sm={7} md={7} xs={12}>
                        <animated.div
                            ref={ref}
                            style={{
                                color: 'white',
                                ...style
                            }}
                            {...mouseHandlers}
                        >

                            <div style={{ background: 'goldenrod', color: 'black', borderRadius: '10px', marginTop: '10px' }}>
                                <div style={{ padding: '20px' }}>
                                    <h4 style={{ textAlign: 'left' }}>Who am I:</h4>
                                    <h5>Hi my name is Yehuda Shmaria, Full Stack Developer, challenges lover, expert in learning new things, lives technology and combines it with amazing teamwork.</h5>
                                    <h4 style={{ fontFamily: 'serif' }}><cite><b>My motto: Aspire far, believe in yourself, work hard and nothing can stop you !!</b></cite></h4>
                                </div>
                            </div>
                        </animated.div>

                        <div style={{ backgroundColor: 'grey', borderRadius: '10px', marginTop: '10px' }}>
                            <div style={{ padding: '10px' }}>
                                <Row>
                                    <Col sm={3} md={3} xs={6}>
                                        <div style={{ paddingTop: '38px', paddingBottom: '38px' }}>
                                            <Button onClick={() => { props.goToRef("educationRef") }}>Education</Button>
                                        </div>

                                    </Col>
                                    <Col sm={3} md={3} xs={6}>
                                        <div style={{ paddingTop: '38px', paddingBottom: '38px' }}>
                                            <Button onClick={() => { props.goToRef("experienceRef") }}>Experience</Button>
                                        </div>
                                    </Col>
                                    <Col sm={3} md={3} xs={6}>
                                        <div style={{ paddingTop: '38px', paddingBottom: '38px' }}>
                                            <Button onClick={() => { props.goToRef("excellenceRef") }}>Excellence</Button>
                                        </div>

                                    </Col>
                                    <Col sm={3} md={3} xs={6}>
                                        <div style={{ paddingTop: '38px', paddingBottom: '38px' }}>
                                            <Button onClick={() => { props.goToRef("skillsRef") }}>Skill</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
=======
          <Col sm={7} md={7} xs={12}>
            <animated.div
              ref={ref}
              style={{
                color: "white",
                ...style,
              }}
              {...mouseHandlers}
            >
              <div
                style={{
                  background: "goldenrod",
                  color: "black",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
              >
                <div style={{ padding: "20px" }}>
                  <h4 style={{ textAlign: "left" }}>Who am I:</h4>
                  <h5>
                    Hi my name is Yehuda Shmaria, Full Stack programmer,
                    challenges lover, expert in learning new things, lives
                    technology and combines it with amazing teamwork.
                  </h5>
                  <h4 style={{ fontFamily: "serif" }}>
                    <cite>
                      <b>
                        My motto: Aspire far, believe in yourself, work hard and
                        nothing can stop you !!
                      </b>
                    </cite>
                  </h4>
                </div>
              </div>
            </animated.div>
>>>>>>> 9b09a93 (Finely)

            <div
              style={{
                backgroundColor: "grey",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div style={{ padding: "10px" }}>
                <Row>
                  <Col sm={3} md={3} xs={6}>
                    <div style={{ paddingTop: "38px", paddingBottom: "38px" }}>
                      <Button
                        onClick={() => {
                          props.goToRef("educationRef");
                        }}
                      >
                        Education
                      </Button>
                    </div>
                  </Col>
                  <Col sm={3} md={3} xs={6}>
                    <div style={{ paddingTop: "38px", paddingBottom: "38px" }}>
                      <Button
                        onClick={() => {
                          props.goToRef("experienceRef");
                        }}
                      >
                        Experience
                      </Button>
                    </div>
                  </Col>
                  <Col sm={3} md={3} xs={6}>
                    <div style={{ paddingTop: "38px", paddingBottom: "38px" }}>
                      <Button
                        onClick={() => {
                          props.goToRef("excellenceRef");
                        }}
                      >
                        Excellence
                      </Button>
                    </div>
                  </Col>
                  <Col sm={3} md={3} xs={6}>
                    <div style={{ paddingTop: "38px", paddingBottom: "38px" }}>
                      <Button
                        onClick={() => {
                          props.goToRef("skillsRef");
                        }}
                      >
                        Skill
                      </Button>
                    </div>
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

export default TitleAboutCom;

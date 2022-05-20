import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Offcanvas,
  Badge,
} from "react-bootstrap";
import Typical from "react-typical";
import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import TitleAboutCom from "./titleAbout";
import EducationCom from "./education";
import ExperienceCom from "./experience";
import SkillsCom from "./skills";
import ExcellenceCom from "./excellence";
import InterviewCom from "./Interview";
import ResumeCom from "./resume";

function MainAboutCom(props) {
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const excellenceRef = useRef(null);
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 30 },
    to: { x: 130 },
  });
  useEffect(() => {
    AOS.init({ duration: 3000 });
    document.title = "Yehuda - About";
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const scrollToCom = (name) => {
    switch (name) {
      case "educationRef":
        educationRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        break;
      case "experienceRef":
        experienceRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        break;
      case "skillsRef":
        skillsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        break;
      case "excellenceRef":
        excellenceRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        break;
    }
<<<<<<< HEAD

    return (
        <div>
            <Container>
                <div style={{ marginTop: '50px' }}>
                    <div>
                        <h1 style={{ fontFamily: 'monospace' }}><Typical wraper='b' loop={Infinity} steps={['About Page', 2000]}></Typical></h1>
                        {/* <div class="fixed-bottom" onClick={() => { handleShow() }}>
                            <animated.div
                                style={{
                                    width: 80,
                                    height: 50,
                                    backgroundColor: 'goldenrod',
                                    borderRadius: 16,
                                    ...styles,
                                }}>
                                <div style={{ padding: '5px' }}>
                                    <Badge bg="success">Interview<br></br> Me</Badge>
                                </div>
                            </animated.div>
                        </div> */}
                    </div>
=======
  };

  return (
    <div>
      <Container>
        <div style={{ marginTop: "50px" }}>
          <div>
            <h1 style={{ fontFamily: "monospace" }}>
              <Typical
                wraper="b"
                loop={Infinity}
                steps={["About Page", 2000]}
              ></Typical>
            </h1>
            <div
              class="fixed-bottom"
              onClick={() => {
                handleShow();
              }}
            >
              <animated.div
                style={{
                  width: 80,
                  height: 50,
                  backgroundColor: "goldenrod",
                  borderRadius: 16,
                  ...styles,
                }}
              >
                <div style={{ padding: "5px" }}>
                  <Badge bg="success">
                    Interview<br></br> Me
                  </Badge>
>>>>>>> 9b09a93 (Finely)
                </div>
              </animated.div>
            </div>
          </div>
        </div>

        <div>
          <Offcanvas show={show} placement="end" onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Interview with me</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <InterviewCom />
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div
          data-aos="zoom-top"
          style={{ marginBottom: "50px", marginTop: "40px" }}
        >
          <TitleAboutCom goToRef={(name) => scrollToCom(name)} />
        </div>

        <hr />

        <div>
          <Button
            variant="success"
            on
            onClick={() => {
              resumeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }}
          >
            Go To Yehuda Resume
          </Button>
        </div>

        <div
          ref={educationRef}
          data-aos="zoom-top"
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          <EducationCom />
        </div>

        <hr />

        <div
          ref={experienceRef}
          data-aos="zoom-top"
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          <ExperienceCom />
        </div>

        <hr />

        <div
          ref={excellenceRef}
          data-aos="zoom-top"
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          <ExcellenceCom />
        </div>

        <hr />

        <div
          ref={skillsRef}
          data-aos="zoom-top"
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          <SkillsCom />
        </div>

        <hr />

        <div
          ref={resumeRef}
          data-aos="zoom-top"
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          <ResumeCom />
        </div>
      </Container>
    </div>
  );
}

export default MainAboutCom;

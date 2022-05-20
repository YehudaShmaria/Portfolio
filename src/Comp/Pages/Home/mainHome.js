import React, { useEffect, useRef, useState } from "react";
import { Container, Badge } from "react-bootstrap";
import AboutHomeCom from "./aboutHomeCom";
import ContactHomeCom from "./contactHomeCom";
import ProjectsHomeCom from "./projectsHomeCom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import Typical from "react-typical";
import TitleHomeCom from "./Title/titleHome";

function HomeCom() {
  const [isHome, setIsHome] = useState(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const history = useHistory();
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 30 },
    to: { x: 130 },
  });
  useEffect(() => {
    AOS.init({ duration: 3000 });
    document.title = "Yehuda - Home";
    setIsHome(true);
  },[]);

  const scrollToCom = (name) => {
    switch (name) {
      case "aboutRef":
        aboutRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        break;
      case "projectRef":
        projectRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        break;
      case "contactRef":
        contactRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        break;
    }
  };

  return (
    <div>
      <Container>
        <div style={{ marginTop: "50px" }}>
          <h1 style={{ fontFamily: "monospace" }}>
            <Typical
              wraper="b"
              loop={Infinity}
              steps={["Home Page", 2000]}
            ></Typical>
          </h1>
          <div
            class="fixed-bottom"
            onClick={() => {
              history.push("/contact");
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
                  Contact <br></br> Me
                </Badge>
              </div>
            </animated.div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          style={{ backgroundColor: "whitesmoke", marginTop: "50px" }}
        >
          <TitleHomeCom goToRef={(name) => scrollToCom(name)} />
        </div>
        <hr />
        <div ref={aboutRef} data-aos="zoom-in">
          <div style={{ marginTop: "50px", marginBottom: "50px" }}>
            <AboutHomeCom />
          </div>
        </div>

        <hr />
        <div data-aos="zoom-in">
          <div
            ref={projectRef}
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <ProjectsHomeCom />
          </div>
        </div>
        <hr />

        <div data-aos="zoom-in">
          <div
            ref={contactRef}
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <ContactHomeCom isHome={isHome} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeCom;

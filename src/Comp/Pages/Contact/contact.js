import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typical from "react-typical";
import AtherWaysContactCom from "./atherWaysContact";
import FormContactCom from "./formContact";
import AOS, { refresh } from "aos";
import "aos/dist/aos.css";
import TitleContactCom from "./titleContact";

function ContactCom(props) {
  const atherWaysContact = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 3000 });
    document.title = "Yehuda - Contact";
  }, []);

  const goToAtherContact = () => {
    atherWaysContact.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div>
      <Container>
        <h1 style={{ fontFamily: "monospace" }}>
          <Typical
            wraper="b"
            loop={Infinity}
            steps={["About Page", 2000]}
          ></Typical>
        </h1>
        <div style={{ marginTop: "40px" }}>
          <Row>
            <Col data-aos="fade-top" sm={8} md={6} xs={12}>
              <TitleContactCom go={() => goToAtherContact()} />
            </Col>
            <Col data-aos="fade-Bottom" sm={8} md={6} xs={12}>
              <FormContactCom />
            </Col>
          </Row>
        </div>

        <hr style={{ marginTop: "50px", marginBottom: "50px" }}></hr>

        <div
          ref={atherWaysContact}
          data-aos="fade-down"
          style={{ marginTop: "50px" }}
        >
          <AtherWaysContactCom />
        </div>
      </Container>
    </div>
  );
}

export default ContactCom;

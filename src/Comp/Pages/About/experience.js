import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function ExperienceCom(props) {
  return (
    <div>
      <Container>
        <div style={{ textAlign: "right", marginBottom: "10px" }}>
          <h1>
            <cite>Experience</cite>
          </h1>
        </div>
        <Row>
          <Col sm={3} xs={12} md={3}>
            <div style={{ marginTop: "10px" }}>
              <div
                style={{ backgroundColor: "goldenrod", borderRadius: "10px" }}
              >
                <div style={{ padding: "15px" }}>
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    rounded
                    src={process.env.PUBLIC_URL + "/Images/police1.jpg"}
                  ></Image>
                </div>
                <div style={{ backgroundColor: "black", borderRadius: "10px" }}>
                  <div style={{ padding: "10px", color: "goldenrod" }}>
                    <h2>Israel Police</h2>
                    <h5>Intelligence Division</h5>
                    <h6>Collection Department</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4} xs={12} md={4}>
            <div
              style={{ borderRadius: "10px", color: "gold", marginTop: "10px" }}
              className="bg-primary"
            >
              <div style={{ padding: "8px" }}>
                <h4>Development of software</h4>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "gray",
                opacity: "0.8",
                marginTop: "13px",
                borderRadius: "10px",
              }}
            >
              <span style={{ textAlign: "right", paddingRight: "10px" }}>
                <cite>
                  <b>01.06.2020 – 01.04.2021</b>
                </cite>
              </span>
              <div style={{ padding: "10px", textAlign: "left" }}>
                <h3>Role:</h3>
                <h5>
                  Software developer for the Engineering and Research Squad of
                  the Intelligence Division.
                </h5>
              </div>

              <div style={{ padding: "10px", textAlign: "left" }}>
                <h3>Technologies:</h3>
                <h5>
                  C# - ASP.NET MVC | SQL server | WinForms | Entity Framework.
                </h5>
              </div>
            </div>
          </Col>
          <Col sm={4} xs={12} md={5}>
            <div
              style={{ borderRadius: "10px", color: "gold", marginTop: "10px" }}
              className="bg-primary"
            >
              <div style={{ padding: "8px" }}>
                <h4>Project management and development</h4>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "gray",
                opacity: "0.8",
                marginTop: "13px",
                borderRadius: "10px",
              }}
            >
              <span style={{ textAlign: "right", paddingRight: "10px" }}>
                <cite>
                  <b>01.04.2021 – Currently</b>
                </cite>
              </span>
              <div style={{ padding: "10px", textAlign: "left" }}>
                <h3>Role:</h3>
                <span></span>
                <h5>
                  Project manager and training in the field of GPS and tracking
                  devices, networks, operating systems And other technologies.
                </h5>
              </div>

              <div style={{ padding: "10px", textAlign: "left" }}>
                <h3>Technologies:</h3>
                <h5>
                  {" "}
                  GPS Servers | Tracking devices | Operating Systems | Networks
                  | Linux.
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ExperienceCom;

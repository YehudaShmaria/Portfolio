import React from "react";
import { Col, Row, Button, Alert, Image } from "react-bootstrap";
import ProjectImagesCom from "./ProjectImage/projectImages";
import { useHistory } from "react-router-dom";

function ProjectsHomeCom(props) {
  const history = useHistory();

  return (
    <div>
      <Row>
        <Col xs={12} md={7} sm={12}>
          <div style={{ fontFamily: "monospace", textAlign: "left" }}>
            <h3>Projects</h3>
          </div>

          <div
            style={{
              backgroundColor: "goldenrod",
              color: "black",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3 style={{ padding: "10px" }}>Web && Software</h3>
          </div>
          <div style={{ marginTop: "30px" }}>
            <ProjectImagesCom />
          </div>
        </Col>
        <Col xs={12} md={5} sm={12}>
          <div style={{ marginTop: "40px" }}>
            <Image
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
              src={process.env.PUBLIC_URL + "/Images/project1.webp"}
            ></Image>
            <Button
              style={{ marginTop: "10px" }}
              onClick={() => {
                history.push("/projects");
              }}
            >
              View Projects
            </Button>
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: "20px" }}>
        <Row>
          <Col md={6} sm={6} xs={12}>
            <Alert variant="warning">
              <cite>
                "Sooner or later, those who win are those who think thay can"
              </cite>
            </Alert>
          </Col>
          <Col md={6} sm={6} xs={12}>
            <Alert variant="warning">
              <cite>
                "You never know when you start a project just how good it can
                be"
              </cite>
            </Alert>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProjectsHomeCom;

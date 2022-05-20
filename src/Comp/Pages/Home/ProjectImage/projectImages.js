import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { CarouselWrapper } from "react-pretty-carousel";
import { useHistory } from "react-router-dom";

function ProjectImagesCom(props) {
  const history = useHistory();
  return (
    <div style={{ fontFamily: "monospace" }}>
      <Row>
        <Col md={12}>
          <CarouselWrapper items={3} mode="gallery" showControls={false}>
            <div>
              <Image
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + "/Images/net.jpg"}
              />
            </div>
            <div>
              <Image
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + "/Images/mern.jpg"}
              />
            </div>
            <div>
              <Image
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + "/Images/django.jpg"}
              />
            </div>
            <div>
              <Image
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + "/Images/winform.jpg"}
              />
            </div>
            <div>
              <Image
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + "/Images/gpsgate.png"}
              ></Image>
            </div>
          </CarouselWrapper>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectImagesCom;

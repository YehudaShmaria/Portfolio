import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { CarouselWrapper } from "react-pretty-carousel";
import { useHistory } from "react-router-dom";

function ContactHomeCom({isHome}) {
  const history = useHistory();
  return (
    <div style={{ fontFamily: "monospace" }}>
      <h2 style={{ marginBottom: "20px" }}>
        {isHome ? "Please Contact Me!" : "Ather Ways To Contact Me!"}
      </h2>
      <Row>
        <Col md={12}>
          <CarouselWrapper items={3} mode="gallery" showControls={false}>
            <div>
              <Image
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + "/Images/linkdin.jpg"}
              />

              <div style={{ marginTop: "20px" }}>
                <Button
                  href="https://www.linkedin.com/in/yehuda-shmaria/"
                  variant="warning"
                >
                  Linkdin
                </Button>
              </div>
            </div>
            {isHome ? (
              <>
                {" "}
                <div>
                  <Image
                    style={{ width: "100%" }}
                    src={process.env.PUBLIC_URL + "/Images/webSite1.jpg"}
                  />
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      onClick={() => {
                        history.push("/contact");
                      }}
                      variant="warning"
                    >
                      Web Site
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <Image
                  style={{ width: "100%" }}
                  src={process.env.PUBLIC_URL + "/Images/whatsapp1.jpg"}
                />

                <div style={{ marginTop: "20px" }}>
                  <Button href="https://wa.link/0ur4hl" variant="warning">
                    WhatsApp
                  </Button>
                </div>
              </div>
            )}
            <div>
              <Image
                style={{ width: "100%" }}
                src={process.env.PUBLIC_URL + "/Images/gmail.png"}
              />

              <div style={{ marginTop: "20px" }}>
                <Button href="mailto:yehudas1999@gmail.com" variant="warning">
                  Gmail
                </Button>
              </div>
            </div>
            {isHome ? (
              <>
                {" "}
                <div>
                  <div>
                    <Image
                      style={{ width: "100%" }}
                      src={process.env.PUBLIC_URL + "/Images/whatsapp1.jpg"}
                    />

                    <div style={{ marginTop: "20px" }}>
                      <Button href="https://wa.link/0ur4hl" variant="warning">
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </CarouselWrapper>
        </Col>
      </Row>
    </div>
  );
}

export default ContactHomeCom;

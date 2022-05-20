import React from "react";
import Slider from "react-slick";
import { Image } from "react-bootstrap";

function SkillsCom(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <div>
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <h1>
          <cite>Computing skill</cite>
        </h1>
      </div>
      <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <div style={{ marginTop: "30px", marginBottom: "50px" }}>
          <Slider {...settings}>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/C.png"}
                ></Image>
              </div>
            </div>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/javascript.png"}
                ></Image>
              </div>
            </div>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/html.jfif"}
                ></Image>
              </div>
            </div>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/node.jpg"}
                ></Image>
              </div>
            </div>

            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/react.png"}
                ></Image>
              </div>
            </div>

            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/mongodb.png"}
                ></Image>
              </div>
            </div>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/OOP.jpg"}
                ></Image>
              </div>
            </div>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/ASP.NET.jfif"}
                ></Image>
              </div>
            </div>

            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/GitHub.jpg"}
                ></Image>
              </div>
            </div>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/linux.png"}
                ></Image>
              </div>
            </div>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/bootstrap.png"}
                ></Image>
              </div>
            </div>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/SQL.png"}
                ></Image>
              </div>
            </div>
            <div>
              <div style={{ padding: "10px" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + "/Images/Skills/Django.png"}
                ></Image>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SkillsCom;

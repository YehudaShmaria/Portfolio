import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import WaterCom from "./Test/water";

function ProjectsCom(props) {
  useEffect(() => {
    document.title = "Yehuda - Projects";
  }, []);
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <WaterCom />
      </div>
      <div
        style={{
          backgroundColor: "whitesmoke",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <div
          style={{ color: "goldenrod", padding: "20px", marginBottom: "100px" }}
        >
          <h1>
            This page in the creation process came back later and you can view
            its contents.
          </h1>
          <h2>
            In the meantime, you can watch my projects on my GitHub account:{" "}
          </h2>
          <div style={{ padding: "20px" }}>
            <a href="https://github.com/YehudaShmaria">
              {" "}
              <Image
                style={{ width: "150px", height: "auto" }}
                src={process.env.PUBLIC_URL + "/Images/Skills/GitHub.jpg"}
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCom;

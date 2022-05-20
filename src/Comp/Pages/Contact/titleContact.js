import React from "react";
import { Button, Image, Alert } from "react-bootstrap";

function TitleContactCom(props) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <div style={{ padding: "10px" }}>
          <Image
            style={{ width: "100%", height: "auto" }}
            src={process.env.PUBLIC_URL + "/Images/contact.png"}
          ></Image>
        </div>

        <div style={{ padding: "20px" }}>
          <h2>
            <cite>My Name Is Yehuda Shmaria...</cite>
          </h2>
        </div>

        <div style={{ padding: "10px" }}>
          <h5>
            I would also really like to just help, consult and meet new people
            who will make me smarter....
          </h5>
        </div>

        <div style={{ padding: "5px" }}>
          <Button
            onClick={() => {
              props.go();
            }}
          >
            How can I be contacted
          </Button>
        </div>

        <div style={{ padding: "8px" }}>
          <Alert variant="warning">
            <cite>
              "If I don't turn to you and you don't turn to me how will we
              meet?"
            </cite>
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default TitleContactCom;

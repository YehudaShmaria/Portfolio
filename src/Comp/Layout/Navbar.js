import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./navbar.css";

function NavbarCom(props) {
  const [navbarColor, setNavbarColor] = useState(true);

  const changrNavbarColor = () => {
    if (window.scrollY > 100) setNavbarColor(false);
    else setNavbarColor(true);
  };
  window.addEventListener("scroll", changrNavbarColor);
  return (
    <div>
      <Navbar
        fixed="top"
        variant={navbarColor ? "light" : "dark"}
        bg={navbarColor ? "light" : "primary"}
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="#">Yehuda Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className={navbarColor ? "test" : null}>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/projects">
                  <Nav.Link>Projects</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/contact">
                  <Nav.Link>Contact Me</Nav.Link>
                </LinkContainer>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCom;

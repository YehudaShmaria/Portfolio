import React from "react";
import { Container } from "react-bootstrap";
import NavbarCom from "./Comp/Layout/Navbar";
import { Switch, Route } from "react-router-dom";
import HomeCom from "./Comp/Pages/Home/mainHome";
import ContactCom from "./Comp/Pages/Contact/contact";
import ProjectsCom from "./Comp/Pages/Projects/projects";
import MainAboutCom from "./Comp/Pages/About/mainAbout";
import ScrollToTopCom from "./scrollToTop";

function TheWebPage() {
  return (
    <div>
      <Container fluid>
        <ScrollToTopCom />
        <NavbarCom />
        <div style={{ marginTop: "60px" }}>
          <Switch>
            <Route exact path="/">
              <HomeCom />
            </Route>
            <Route path="/about">
              <MainAboutCom />
            </Route>
            <Route path="/contact">
              <ContactCom />
            </Route>
            <Route path="/projects">
              <ProjectsCom />
            </Route>
          </Switch>
        </div>
      </Container>
    </div>
  );
}

export default TheWebPage;

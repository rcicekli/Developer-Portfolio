import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Col, NavbarText } from "reactstrap";
import developerImage from "../assets/developerr.JPG";
import { Row } from "reactstrap";

export default function MyNav() {
  return (
    <div
      className="fixed-top mx-autorounded-5 rounded p-5 "
      style={{ backgroundColor: "#000", fontFamily: "Daktilo" }}
    >
      <Row>
        <Navbar expand="lg">
          <Container className="position-relative d-flex align-items-center justify-content-center">
            {" "}
            <Col
              lg={6}
              className="justify-content-center d-flex align-items center"
            >
              {/* lg haricindeki screenlerde gizle */}
              <NavbarText
                style={{ color: "#00ff00" }}
                className="d-none d-lg-block m-auto h3 p-3"
              >
                Developer Name
              </NavbarText>
            </Col>
            <div className="position-absolute " style={{ marginTop: "110px" }}>
              <img
                className="rounded-circle"
                src={developerImage}
                alt="İmageProfile"
                width={200}
                height={180}
              ></img>
            </div>
            <Col
              lg={6}
              className="justify-content-center d-flex align-items center"
            >
              {/* lg haricindeki screenlerde gizle */}
              <NavbarText
                style={{ color: "#00ff00" }}
                className="d-none d-lg-block  m-auto h3 p-3"
              >
                Computer Engineer
              </NavbarText>
            </Col>
          </Container>
        </Navbar>
      </Row>
    </div>
  );
}

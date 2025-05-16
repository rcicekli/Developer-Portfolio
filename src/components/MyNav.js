import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css"; // Özel stil dosyasını ekliyoruz

export default function MyNav({ setNavHeight }) {
  const navRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [setNavHeight]);

  return (
    <Navbar ref={navRef} className="matrix-navbar" fixed="top">
      <Container fluid>
        <Row className="w-100 align-items-center justify-content-between text-center">
          <Col xs="6" className="text-start matrix-text">
            (Developer Name)
          </Col>
          <Col xs="6" className="text-end matrix-text">
            Computer Engineer
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

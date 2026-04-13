import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // İkonları ekledik
import "../App.css";

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
        <Row className="w-100 align-items-center">
          {/* Sol: İsim */}
          <Col xs="4" className="text-start matrix-text px-0">
            Ramazan Çiçekli
          </Col>

          {/* Orta: Sosyal Medya İkonları */}
          <Col xs="4" className="text-center d-flex justify-content-center gap-3">
            <a 
              href="https://github.com/rcicekli" 
              target="_blank" 
              rel="noreferrer" 
              className="matrix-icon-link"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/rcicekli/" 
              target="_blank" 
              rel="noreferrer" 
              className="matrix-icon-link"
            >
              <FaLinkedin />
            </a>
          </Col>

          {/* Sağ: Ünvan */}
          <Col xs="4" className="text-end matrix-text px-0">
            Computer Engineer
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
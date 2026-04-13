import React from "react";
import TypeWriter from "typewriter-effect";
import { Row, Col } from "reactstrap";

export default function AboutMe() {
  return (
    <div>
      <Row className="p-5 text-white overflow-hidden">
        <Col
          style={{ marginTop: "10px", fontFamily: "Daktilo", color: "#00ff00" }}
          xs={12}
          sm={12}
        >
          <div className="mx-auto">
            <TypeWriter
              options={{
                autoStart: true,
                loop: false,
                delay: 5,
              }}
              onInit={(TypeWriter) => {
                TypeWriter.typeString(
                   "Merhaba!<br/>  Ben Ramazan, bir Bilgisayar Mühendisi ve tam yığın (Full-stack) geliştiriciyim. <br/>  Android Studio'nun derinliklerinden React'in dinamik dünyasına uzanan bir çizgide; <br/>  modern web teknolojileri ve mobil platformlar için yenilikçi çözümler üretiyorum."
                ).start();
              }}
            />
          </div>
        </Col>
        <Col className="mt-5" xs={12} sm={12}>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Daktilo",
              color: "#00ff00",
            }}
          >
            <TypeWriter
              options={{
                delay: 30,
              }}
              onInit={(TypeWriter) => {
                TypeWriter.pauseFor(3000)
                  .typeString("Merhaba")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Ben Ramazan")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("ve Bilgisayar Mühendisiyim")
                  .pauseFor(1000)
                   .deleteAll()
                  .typeString("Sayfama Hoşgsdfsfsdf")
                  .pauseFor(1000)
                  .deleteChars(13)            
                  .typeString(" Hoşgeldiniz")

                  .start();
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

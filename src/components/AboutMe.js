import React from "react";
import TypeWriter from "typewriter-effect";
import TypeWriter2 from "typewriter-effect";
import { Row, Col } from "reactstrap";

export default function AboutMe() {
  return (
    <div>
      <Row className="container text-white mt-5 overflow-auto">
        <Col
          style={{ marginTop: "50px", fontFamily: "Daktilo", color: "#00ff00" }}
          xs={12}
          sm={12}
        >
          <div className="mt-5 mx-auto">
            <TypeWriter2
              options={{
                autoStart: true,
                loop: false,
                delay: 15,
              }}
              onInit={(TypeWriter) => {
                TypeWriter.typeString(
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                )
                .start();
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
                TypeWriter.pauseFor(12000)
                  .typeString("Hello I'm Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm Computer Engineer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("and Frondasd")
                  .pauseFor(1000)
                  .deleteChars(8)
                  .typeString("Front-End Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("These Are the Things About Me")

                  .start();
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

import React from "react";
import AwesomeSlider from "react-awesome-slider";
import style from "../styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Slider() {
  const slider = (
    <div>
      <AwesomeSlider
        style={{ backgroundColor: "#000" }}
        cssModule={style}
        fillParent={true}
        bullets={false}   
        mobileTouch={true}
  
        animation="cubeAnimation"
      >
        <div>
          <AboutMe />{" "}
        </div>
        <div>
          <Skills />{" "}
        </div>
        <div>
          <Projects />{" "}
        </div>

        <div>
          <Contact />{" "}
        </div>
      </AwesomeSlider>
    </div>
  );
  return <div>{slider}</div>;
}

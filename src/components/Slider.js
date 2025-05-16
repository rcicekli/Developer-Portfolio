import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";


export default function Slider({ topSpacing }) {
  return (
    <div
    className="awssld--fill-parent"
      style={{
        marginTop: topSpacing,
        height: `calc(100vh - ${topSpacing}px)`,
      }}
    >
      <AwesomeSlider
        bullets={false}   
        fillParent={true}
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
}
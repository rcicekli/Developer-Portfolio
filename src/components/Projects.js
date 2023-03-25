import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGoogle,
  FaJava,
  FaJs,
  FaPhp,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import TypeWriter from "typewriter-effect";

export default function Projects() {
  return (
    <div style={{ marginTop: "400px" }}>
      <div className="p-5 container ">
        <div className=" row container mt-5  text-center  justify-content-center">
          <div
            className="d-none d-md-block mb-3 "
            style={{ fontFamily: "Daktilo", color: "#00ff00" }}
          >
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["My Projects"],
              }}
            />
          </div>

          <div class="col-lg-4 m-1 col-sm-12 col-md-12 col-12 mx-5 mb-2 ">
            <div
              class="dil card  rounded-4 "
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div class="card-body">
                <h1
                  class="card-title "
                  style={{ color: "#000", fontSize: "80px" }}
                >
                  <FaGithub />
                </h1>
                <a
                  href="https://github.com/rcicekli"
                  target="_blank"
                  rel="noreferrer"
                  className="card-title text-decoration-none "
                  style={{ color: "#000", fontSize: "20px" }}
                >
                  OpenWeatherMap Turkey
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 m-1 col-sm-12 col-md-12  col-12  mx-5  mb-2  ">
            <div
              class="dil card  rounded-4 "
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div class="card-body">
                <h1
                  class="card-title"
                  style={{ color: "#000", fontSize: "80px" }}
                >
                  <FaGithub />
                </h1>
                <a
                  href="https://github.com/rcicekli"
                  target="_blank"
                  rel="noreferrer"
                  className="card-title text-decoration-none "
                  style={{ color: "#000", fontSize: "20px" }}
                >
                  Restaurant Website React
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 m-1 col-sm-12 col-md-12 col-12 mx-5  mb-2 ">
            <div
              class="dil card  rounded-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div class="card-body">
                <h1
                  class="card-title"
                  style={{ color: "#000", fontSize: "80px" }}
                >
                  <FaGithub />
                </h1>
                <a
                  href="https://github.com/rcicekli"
                  target="_blank"
                  rel="noreferrer"
                  className="card-title text-decoration-none "
                  style={{ color: "#000", fontSize: "20px" }}
                >
                  Php Laravel Admin
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 m-1 col-sm-12 col-md-12 col-12 mx-5  mb-2 ">
            <div
              class="dil card  rounded-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div class="card-body">
                <h1
                  class="card-title"
                  style={{ color: "#000", fontSize: "80px" }}
                >
                  <FaGithub />
                </h1>
                <a
                  href="https://github.com/rcicekli"
                  target="_blank"
                  rel="noreferrer"
                  className="card-title text-decoration-none "
                  style={{ color: "#000", fontSize: "20px" }}
                >
                  Todo-List Redux
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block">
          <div style={{ color: "#00ff00" }} class="snowflake">
            <FaJava />
          </div>
          <div style={{ color: "#00ff00" }} class="snowflake">
            <FaCss3 />
          </div>
          <div style={{ color: "#00ff00" }} class="snowflake">
            <FaGoogle />
          </div>
          <div style={{ color: "#00ff00" }} class="snowflake">
            <FaJs />
          </div>
          <div style={{ color: "#00ff00" }} class="snowflake">
            <FaPython />
          </div>
          <div style={{ color: "#00ff00" }} class="snowflake">
            <FaGithub />
          </div>
          <div style={{ color: "#00ff00" }} class="snowflake">
            <FaBootstrap />
          </div>
          <div style={{ color: "#00ff00" }} class="snowflake">
            <FaPhp />
          </div>
        </div>
      </div>
    </div>
  );
}

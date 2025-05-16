
import {
  FaBootstrap,
  FaCss3,
  FaGoogle,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaYandex,
} from "react-icons/fa";
import TypeWriter from "typewriter-effect";

export default function Skills() {
  return (
    <div className="container p-5 mt-5 "
    style={{ marginTop: "20px" }}>
      <div className="mt-5">
        <div className=" row container mt-5  text-center  justify-content-center mx-auto ">
          <div
            className="d-none d-md-block m-5 "
            style={{ fontFamily: "Daktilo", color: "#00ff00" }}
          >
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["My Skills"],
              }}
            />
          </div>
          <div className="col-lg-3 m-1 col-sm-12 col-md-12 col-12 mx-5 mb-2 my-auto">
            <div
              className="dil card  rounded-4 "
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="card-body">
                <h3 className="card-title " style={{ color: "#ff7b00" }}>
                  <FaHtml5 />
                </h3>
                <p className="card-text text-black fw-bold d-none d-lg-block">
                  HTML
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 m-1 col-sm-12 col-md-12  col-12  mx-5  mb-2  ">
            <div
              className="dil card  rounded-4 "
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="card-body">
                <h3 className="card-title" style={{ color: "#0000ff" }}>
                  <FaCss3 />
                </h3>
                <p className="card-text text-black fw-bold d-none d-lg-block">
                  CSS
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 m-1 col-sm-12 col-md-12 col-12 mx-5  mb-2 ">
            <div
              className="dil card  rounded-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="card-body">
                <h3 className="card-title" style={{ color: "#fff200" }}>
                  <FaJs />
                </h3>
                <p className="card-text text-black fw-bold d-none d-lg-block">
                  JAVASCRIPT
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 m-1 col-sm-12 col-md-12 col-12 mx-5  mb-2 ">
            <div
              className="dil card  rounded-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="card-body">
                <h3 className="card-title" style={{ color: "#00d4ff" }}>
                  <FaReact />
                </h3>
                <p className="card-text text-black fw-bold d-none d-lg-block">
                  REACT
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 m-1 col-sm-12 col-md-12 col-12 mx-5  mb-2 ">
            <div
              className="dil card  rounded-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="card-body">
                <h3 className="card-title" style={{ color: "#7CB701" }}>
                  <FaNodeJs />
                </h3>
                <p className="card-text text-black fw-bold d-none d-lg-block">
                  NODE.JS
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-3 m-1 col-sm-12 col-md-12 col-12 mx-5  mb-2 ">
            <div
              className="dil card  rounded-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="card-body">
                <h3 className="card-title" style={{ color: "#4D588E" }}>
                  <FaPhp />
                </h3>
                <p className="card-text text-black fw-bold d-none d-lg-block">
                  PHP
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-3 m-1 col-sm-12 col-md-12 col-12 mx-5  mb-2 ">
            <div
              className="dil card  rounded-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="card-body">
                <h3 className="card-title" style={{ color: "#356FA0" }}>
                  <FaPython />
                </h3>
                <p className="card-text text-black fw-bold d-none d-lg-block">
                  PHYTON
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-3 m-1  col-sm-12 col-md-12 col-12 mx-5  mb-2 ">
            <div
              className=" dil card  rounded-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="card-body">
                <h3 className="card-title" style={{ color: "#7511F1" }}>
                  <FaBootstrap />
                </h3>
                <p className="card-text  text-black fw-bold d-none d-lg-block">
                  BOOTSTRAP
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 m-1  col-sm-12 col-md-12 col-12 mx-5  mb-2  ">
            <div
              className=" dil card  rounded-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
              <div className="card-body">
                <h3 className="card-title" style={{ color: "#ff001a" }}>
                  <FaJava />
                </h3>
                <p className="card-text text-black fw-bold d-none d-lg-block">
                  JAVA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-lg-block">
          <div style={{ color: "#00ff00" }} className="snowflake">
            <FaJava />
          </div>
          <div style={{ color: "#00ff00" }} className="snowflake">
            <FaCss3 />
          </div>
          <div style={{ color: "#00ff00" }} className="snowflake">
            <FaGoogle />
          </div>
          <div style={{ color: "#00ff00" }} className="snowflake">
            <FaJs />
          </div>
          <div style={{ color: "#00ff00" }} className="snowflake">
            <FaPython />
          </div>
          <div style={{ color: "#00ff00" }} className="snowflake">
            <FaYandex />
          </div>
          <div style={{ color: "#00ff00" }} className="snowflake">
            <FaBootstrap />
          </div>
          <div style={{ color: "#00ff00" }} className="snowflake">
            <FaPhp />
          </div>
        </div>
      </div>
    </div>
  );
}


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
    <div className="container  mt-5 mb-5"
    style={{ marginTop: "20px" }}>
      <div className="mt-5">
         <div className="container p-5 mt-5" style={{ marginTop: "20px" }}>
      <div className="mt-5">
        <div className="row container mt-5 text-center justify-content-center mx-auto">
          {/* Typewriter effect for the title */}
          <div
            className="d-none d-md-block m-5"
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

          {/* Skill Cards Section */}
          <div className="row justify-content-center">
            {[
              { icon: <FaHtml5 />, title: "HTML", color: "#ff7b00" },
              { icon: <FaCss3 />, title: "CSS", color: "#0000ff" },
              { icon: <FaJs />, title: "JAVASCRIPT", color: "#fff200" },
              { icon: <FaReact />, title: "REACT", color: "#00d4ff" },
              { icon: <FaNodeJs />, title: "NODE.JS", color: "#7CB701" },
              { icon: <FaPhp />, title: "PHP", color: "#4D588E" },
              { icon: <FaPython />, title: "PYTHON", color: "#356FA0" },
              { icon: <FaBootstrap />, title: "BOOTSTRAP", color: "#7511F1" },
              { icon: <FaJava />, title: "JAVA", color: "#ff001a" },
            ].map((skill, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-12 m-2" // Adjusted column sizes
              >
                <div
                  className="dil card rounded-4"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                >
                  <div className="card-body">
                    <h3 className="card-title" style={{ color: skill.color }}>
                      {skill.icon}
                    </h3>
                    <p className="card-text text-black fw-bold d-none d-lg-block">
                      {skill.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

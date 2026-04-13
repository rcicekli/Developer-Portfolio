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
  FaExternalLinkAlt,
} from "react-icons/fa";
import TypeWriter from "typewriter-effect";

export default function Projects() {
  const projectList = [
    { id: 1, title: "R-Sport Ecommerce", github: "https://github.com/rcicekli/R-Sport-Ecommerce-Frontend", demo: "https://r-sport-ecommerce-frontend.vercel.app/" },
    { id: 2, title: "Restaurant Website", github: "https://github.com/rcicekli/Restaurant-Website", demo: "https://restaurant-website-eta-six.vercel.app/" },
    { id: 3, title: "PortfolioGBT", github: "https://github.com/rcicekli/PortfolioGBT", demo: "https://portfolio-gbt.vercel.app/" },
    { id: 4, title: "DaVinci AI Front-End", github: "https://github.com/rcicekli/Davinci-Ai-Front-End", demo: "https://davinci-ai-front-end.vercel.app/" },
  ];

  return (
    <div className="container">
 

      {/* projects-wrapper sınıfı ile tüm cihazlar için boşlukları yönettik */}
      <div className="projects-wrapper  ">
        
        {/* BAŞLIK BÖLÜMÜ */}
        <div className="header-box ">
          <div style={{ fontFamily: "Daktilo", color: "#00ff00", fontSize: "1rem", textAlign: "center" }}>
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                strings: ["My Projects"],
              }}
            />
          </div>
        </div>

        {/* KARTLAR (Büyük ekranda 2'şerli) */}
        <div className="row justify-content-center g-4 cards ">
          {projectList.map((project) => (
            <div key={project.id} className=" col-lg-6 col-md-6 col-12">
              <div className="project-card card h-100 rounded-4 border-0 shadow-sm ">
                <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
                  <div className="mb-3" style={{ fontSize: "60px",color:"#00ff00" }}>
                    <FaGithub />
                  </div>
                  <h5 className="card-title fw-bold mb-4">{project.title}</h5>
                  
                  <div className="d-flex gap-2 w-100 justify-content-center mt-auto">
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn d-flex align-items-center gap-2 px-3 py-2">
                      <FaGithub /> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn  d-flex align-items-center gap-2 px-3 py-2">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ALT İKONLAR */}
        <div className="mt-5 d-flex justify-content-center flex-wrap gap-4">
          {[FaJava, FaCss3, FaGoogle, FaJs, FaPython, FaGithub, FaBootstrap, FaPhp].map((Icon, index) => (
            <div key={index} style={{ color: "#00ff00", fontSize: "1rem" }} className="snowflake">
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
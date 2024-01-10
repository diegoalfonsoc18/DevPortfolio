import React, { useState } from "react";
import "./projects.css";
import landingOne from "../../img/index.png";
import landingTwo from "../../img/proyecto3.png";
import landingThree from "../../img/proyecto4.png";
import landingFour from "../../img/proyecto5.png";
import arrowR from "../../icon/right-arrow.png";
import arrowL from "../../icon/left-arrow.png";

const Projects = () => {
  const projectsImg = [
    {
      name: "landingOne",
      img: landingOne,
    },
    {
      name: "landingTwo",
      img: landingTwo,
    },
    {
      name: "landingThree",
      img: landingThree,
    },
    {
      name: "landingFour",
      img: landingFour,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projectsImg.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + projectsImg.length) % projectsImg.length
    );
  };

  return (
    <section>
      <div className="titleProjects">
        <h2 id="projects">Projects</h2>
      </div>
      <div className="projects">
        <img
          className="arrow"
          src={arrowL}
          alt="arrow"
          onClick={handlePrevSlide}
        ></img>
        {projectsImg.map((imgs, index) => (
          <div
            key={index}
            className="wrapperProjects"
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <img
              className="imgProjects"
              key={imgs.name}
              src={imgs.img}
              alt="landing One"
            ></img>
            <div className="TitleProjects">
              <span>{imgs.name}</span>
            </div>
          </div>
        ))}
        <img
          className="arrow"
          src={arrowR}
          alt="arrow"
          onClick={handleNextSlide}
        ></img>
      </div>
    </section>
  );
};

export default Projects;

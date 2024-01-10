import "./projects.css";
import landingOne from "../../img/index.png";
import landingTwo from "../../img/proyecto3.png";
import landingThree from "../../img/proyecto4.png";
import landingFour from "../../img/proyecto5.png";

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

  return (
    <section>
      <div className="titleProjects">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {projectsImg.map((imgs) => (
          <div className="wrapperProjects">
            <div className="itemProjects">
              <img key={imgs.name} src={imgs.img} alt="landing One"></img>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

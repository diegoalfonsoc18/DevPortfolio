import "./about.css";
import dev from "../../icon/dev.png";
const About = () => {
  return (
    <article>
      <div className="articleWrapper">
        <div className="wrapperAbout">
          <h2 id="about">About</h2>
          <span>
            Desarrollador web con experiencia en HTML, CSS, JavaScript, React y
            MySql. Apasionado por el aprendizaje continuo y las últimas
            tendencias en desarrollo web. Comprometido con soluciones creativas
            y de calidad, listo para colaborar en proyectos innovadores.
          </span>
        </div>
        <div className="containerDev">
          <div className="wrapperCard">
            <div className="textDev">
              <span>FrontEnd Developer</span>
              <a href="#projects" target="_blank">
                Projects
              </a>
            </div>
            <div className="iconDev">
              <img src={dev} alt="dev logo"></img>
            </div>
          </div>
          <div className="wrapperCard">
            <div className="textDev">
              <span>FrontEnd Developer</span>
              <a href="#projects" target="_blank">
                Projects
              </a>
            </div>
            <div className="iconDev">
              <img src={dev} alt="dev logo"></img>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;

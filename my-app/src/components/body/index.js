import "./body.css";
import linkedin from "../../icon/linkedin.png";
import github from "../../icon/github.png";
import discord from "../../icon/discord.png";

const Body = () => {
  return (
    <div className="body">
      <div className="wrapperMain">
        <div className="menu"></div>
        <div className="wrapper">
          <div className="imageCircle">
            <div className="circle"></div>
          </div>
        </div>
        <div className="menu">
          <div className="wrapperMenu">
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
      <div className="footerMain">
        <div className="footerBody">
          <div className="title">
            <h3>Web Developer</h3>
          </div>
          <div className="socialIcon">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/diego-alfonso-castillo/"
              target="_blank"
            >
              <img src={linkedin} alt="linkendin"></img>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/diego-alfonso-castillo/"
              target="_blank"
            >
              <img src={github} alt="github icon"></img>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/diego-alfonso-castillo/"
              target="_blank"
            >
              <img src={discord} alt="icon discord"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

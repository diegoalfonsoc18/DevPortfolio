import "./body.css";

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
            <a href="#">ABOUT</a>
            <a href="#">PROJECTS</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
      </div>
      <div className="footerMain">
        <div className="footerBody"></div>
      </div>
    </div>
  );
};

export default Body;

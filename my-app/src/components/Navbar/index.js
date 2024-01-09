import "./components.css";
import dev from "../../icon/dev.png";
const Navbar = () => {
  return (
    <div className="navbarMain">
      <div className="navbar">
        <div className="logo">
          <img src={dev} alt="Dev"></img>
        </div>
        <div className="textNav">
          <p className="name">DIEGO</p>
          <p className="lastname">ALFONSO</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

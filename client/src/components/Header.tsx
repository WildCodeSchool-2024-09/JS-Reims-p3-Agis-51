import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import home from "../assets/images/home.jpg";
import Navigation from "./Nav";

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="header-container">
      <div className="sub-header-container">
        <div className="header-logo">
          <Link to={"/"}>
            <img className="logo" src={home} alt="logo" />
          </Link>
        </div>
        <button
          className={`btn-menu ${isClicked ? "show" : ""}`}
          type="button"
          id="check"
          onClick={() => {
            handleClick();
          }}
        >
          <span className="burger-bars" />
        </button>
      </div>
      <nav className={`nav ${isClicked ? "show" : ""}`}>
        <Navigation handleClick={handleClick} />
      </nav>
    </div>
  );
}

export default Header;

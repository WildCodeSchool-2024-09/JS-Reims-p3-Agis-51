import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import home from "../assets/images/home.jpg";
import Nav from "./Nav";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="sub-header-container">
        <Link to={"/"}>
          <img src={home} alt="" />
        </Link>
        <button className="btn-menu" type="button" onClick={toggleMenu}>
          Menu
        </button>
      </div>
      <nav className={`nav-container ${isMenuOpen ? "show" : ""}`}>
        <Nav />
      </nav>
    </div>
  );
}

export default Header;

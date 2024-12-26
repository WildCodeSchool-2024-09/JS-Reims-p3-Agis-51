import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const handleshowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <Link onClick={handleshowLinks} to={"/"} className="navbar__link">
            Qui Sommes Nous
          </Link>
        </li>
        <li className="navbar__item slideInDown-2">
          <Link
            onClick={handleshowLinks}
            to={"/Reparation"}
            className="navbar__link"
          >
            Reparation
          </Link>
        </li>
        <li className="navbar__item slideInDown-3">
          <Link onClick={handleshowLinks} to={"/list"} className="navbar__link">
            Location
          </Link>
        </li>
        <li className="navbar__item slideInDown-4">
          <Link
            onClick={handleshowLinks}
            to={"/about"}
            className="navbar__link"
          >
            Contact
          </Link>
        </li>
        <li className="navbar__item slideInDown-5">
          <Link onClick={handleshowLinks} to={"/"} className="navbar__link">
            Nous Aider
          </Link>
        </li>
        <li className="navbar__item slideInDown-6">
          <Link onClick={handleshowLinks} to={"/"} className="navbar__link">
            Revue de presse
          </Link>
        </li>
        <li className="navbar__item slideInDown-7">
          <Link onClick={handleshowLinks} to={"/"} className="navbar__link">
            Compte
          </Link>
        </li>
      </ul>
      <button
        type="button"
        className="navbar__burger"
        onClick={handleshowLinks}
      >
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default Nav;

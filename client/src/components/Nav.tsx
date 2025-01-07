import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <Link to={"/"} className="menu-link">
        Qui Sommes Nous
      </Link>
      <Link to={"/"} className="menu-link">
        Reparation
      </Link>
      <Link to={"/location"} className="menu-link">
        Location
      </Link>
      <Link to={"/about"} className="menu-link">
        Contact
      </Link>
      <Link to={"/"} className="menu-link">
        Nous Aider
      </Link>
      <Link to={"/presse"} className="menu-link">
        Revue de presse
      </Link>
      <Link to={"/"} className="menu-link">
        Compte
      </Link>
    </nav>
  );
}

export default Nav;

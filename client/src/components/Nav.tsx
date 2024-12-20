import { Link } from "react-router-dom";
import "./Nav.css";
import DropdownAccount from "./DropdownAccount";

function Nav() {
  return (
    <nav>
      <Link to={"/"} className="menu-link">
        Qui Sommes Nous
      </Link>
      <Link to={"/"} className="menu-link">
        Reparation
      </Link>
      <Link to={"/list"} className="menu-link">
        Location
      </Link>
      <Link to={"/about"} className="menu-link">
        Contact
      </Link>
      <Link to={"/"} className="menu-link">
        Nous Aider
      </Link>
      <Link to={"/"} className="menu-link">
        Revue de presse
      </Link>
      <DropdownAccount />
    </nav>
  );
}

export default Nav;

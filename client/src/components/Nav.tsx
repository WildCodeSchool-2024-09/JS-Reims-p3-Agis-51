import { Link } from "react-router-dom";
import "./Nav.css";

type ToggleFunction = () => void;

function Nav({ handleshowLinks }: { handleshowLinks: ToggleFunction }) {
  return (
    <nav>
      <div className="menu-overlay">
        <div className="navbar-item">
          <Link onClick={handleshowLinks} to={"/"} className="menu-link">
            Qui Sommes Nous
          </Link>
        </div>
        <div className="navbar-item">
          <Link onClick={handleshowLinks} to={"/"} className="menu-link">
            Reparation
          </Link>
        </div>
        <div className="navbar-item">
          <Link onClick={handleshowLinks} to={"/list"} className="menu-link">
            Location
          </Link>
        </div>
        <div className="navbar-item">
          <Link onClick={handleshowLinks} to={"/about"} className="menu-link">
            Contact
          </Link>
        </div>
        <div className="navbar-item">
          <Link onClick={handleshowLinks} to={"/"} className="menu-link">
            Nous Aider
          </Link>
        </div>
        <div className="navbar-item">
          <Link onClick={handleshowLinks} to={"/"} className="menu-link">
            Revue de presse
          </Link>
        </div>
        <div className="navbar-item">
          <Link onClick={handleshowLinks} to={"/"} className="menu-link">
            Compte 👤
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

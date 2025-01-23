import "./Nav.css";
import { Link } from "react-router-dom";
import about from "../assets/images/about.png";
import compte from "../assets/images/compte.png";
import contact from "../assets/images/contact.png";
import location from "../assets/images/location-auto.png";
import nousaider from "../assets/images/nous-aider.png";
import reparation from "../assets/images/reparations.png";
import revue from "../assets/images/revue-presse.png";

function Navigation({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="navbar__links">
      <Link
        onClick={handleClick}
        to={"/qui-sommes-nous"}
        className="navbar__link"
      >
        <img src={about} className="about-img" alt="about" /> Qui Sommes Nous
      </Link>

      <Link onClick={handleClick} to={"/reparation"} className="navbar__link">
        <img src={reparation} className="reparation-img" alt="" /> Reparation
      </Link>

      <Link onClick={handleClick} to={"/list"} className="navbar__link">
        <img src={location} className="location-img" alt="" />
        Location
      </Link>

      <Link onClick={handleClick} to={"/Contact"} className="navbar__link">
        <img src={contact} className="contact-img" alt="" /> Contact
      </Link>

      <Link onClick={handleClick} to={"/NousAider"} className="navbar__link">
        <img src={nousaider} className="aide-img" alt="" /> Nous Aider
      </Link>

      <Link onClick={handleClick} to={"/presse"} className="navbar__link">
        <img src={revue} className="revue-img" alt="" /> Revue de presse
      </Link>
      <Link onClick={handleClick} to={"/FormUser"} className="navbar__link">
        <img src={compte} className="compte-img" alt="" /> Compte
      </Link>
    </div>
  );
}

export default Navigation;

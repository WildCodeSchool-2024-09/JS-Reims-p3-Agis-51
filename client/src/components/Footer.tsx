import "./Footer.css";
import { Link } from "react-router-dom";
import CCAS from "../assets/images/CCAS.png";
import Reims from "../assets/images/Reims.png";
import fse from "../assets/images/fse.png";
import grandest from "../assets/images/grandest.png";
import marne from "../assets/images/marne.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-images">
        <img src={marne} alt="marne" className="footer-icon" />
        <img src={grandest} alt="grandest" className="footer-icon" />
        <img src={fse} alt="fse" className="footer-icon" />
        <img src={Reims} alt="Reims" className="footer-icon" />
        <img src={CCAS} alt="CCAS" className="footer-icon" />
      </div>
      <div className="footer-text">
        <p>&copy; 2025 AGIS51 | Garage Solidaire</p>
        <Link to="/legal" className="footer-link">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
export default Footer;

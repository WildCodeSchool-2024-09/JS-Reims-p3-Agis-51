import "./Footer.css";
import { Link } from "react-router-dom";
import CCAS from "../assets/images/CCAS.png";
import fse from "../assets/images/fse.png";
import grandest from "../assets/images/grandest.png";
import marnede from "../assets/images/marnede.png";
import reims from "../assets/images/reims.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-images">
        <Link to={"/reims"}>
          <img src={reims} alt="reims" className="footer-icon" />
        </Link>
        <Link to={"/marnede"}>
          <img src={marnede} alt="marnede" className="footer-icon" />
        </Link>
        <Link to={"/grandest"}>
          <img src={grandest} alt="grandest" className="footer-icon" />
        </Link>
        <Link to={"/fse"}>
          <img src={fse} alt="fse" className="footer-icon" />
        </Link>
        <Link to={"/CCas"}>
          <img src={CCAS} alt="CCas" className="footer-icon" />
        </Link>
      </div>

      <div className="footer">
        <p>&copy; 2024 dev. TOUS droits reservé.</p>
      </div>
    </footer>
  );
}
export default Footer;

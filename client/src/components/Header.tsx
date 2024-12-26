import "./Header.css";
import { Link } from "react-router-dom";
import Nav2 from "./Nav2";
import home from "../assets/images/home.jpg";


function Header() {
  return (
    <>
      <div className="header-container">
        <div>
          <Nav2 />
        </div>

        <div className="logo-container">
          <Link to={"/"}>
            <img className="logo" src={home} alt="logo" />
          </Link>
         
        </div>
      </div>
    </>
  );
}

export default Header;

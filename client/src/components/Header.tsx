import "./Header.css";
import { Link } from "react-router-dom";
import home from "../assets/images/home.jpg";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <div className="header-container">
        <div>
          <Nav />
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

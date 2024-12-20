import { useState } from "react";
import { Link } from "react-router-dom";

import "./DropdownAccount.css";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button
        type="button"
        className="dropdown-toggle"
        onClick={toggleDropdown}
      >
        <span className="icon">👤</span>
        <span className="arrow">▾</span>
      </button>

      {isOpen && (
        <div className="dropdown-account">
          <ul>
            <li>
              <Link to="/SignupUser">Créer mon compte</Link>
            </li>
            <li>
              <Link to="/LoginUser">Se connecter</Link>
            </li>
            <hr />
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

import { useState } from "react";
import "./LoginUser.css";
import { Link } from "react-router-dom";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLoginValidation = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    let isValid = true;

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError(true);
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError(true);
      isValid = false;
    }

    if (isValid) {
      alert("Connexion réussie !");
    }
  };

  return (
    <div className="login-container">
      <form className="form-login" onSubmit={handleLoginValidation}>
        <h2>Connexion</h2>

        <div className="input">
          <input
            type="email"
            placeholder="Adresse Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputlogin"
          />
          {emailError && (
            <p className="error">
              Veuillez entrer une adresse email valide (avec @).
            </p>
          )}
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputlogin"
          />
          {passwordError && (
            <p className="error">
              Le champ "Mot de passe" ne peut pas être vide.
            </p>
          )}
        </div>

        <button type="submit" className="buttonlogin">
          Connexion
        </button>

        <div className="links">
          <p>
            <a href="#forgot-password">Mot de passe oublié ?</a>
          </p>
          <p>
            Pas encore de compte ? <Link to="/signupUser">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginUser;

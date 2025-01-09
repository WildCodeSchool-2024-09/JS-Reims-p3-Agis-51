import { useState } from "react";
import "./FormUser.css";

function FormUser() {
  const [isSignupVisible, setIsSignupVisible] = useState(true);

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [signupNameError, setSignupNameError] = useState(false);
  const [signupEmailError, setSignupEmailError] = useState(false);
  const [signupPasswordError, setSignupPasswordError] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginEmailError, setLoginEmailError] = useState(false);
  const [loginPasswordError, setLoginPasswordError] = useState(false);

  const handleSignupSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setSignupNameError(false);
    setSignupEmailError(false);
    setSignupPasswordError(false);

    let isValid = true;

    if (signupName.trim() === "") {
      setSignupNameError(true);
      isValid = false;
    }

    if (signupEmail.trim() === "" || !signupEmail.includes("@")) {
      setSignupEmailError(true);
      isValid = false;
    }

    if (signupPassword.trim() === "") {
      setSignupPasswordError(true);
      isValid = false;
    }

    if (isValid) {
      alert("Inscription réussie !");
      setSignupName("");
      setSignupEmail("");
      setSignupPassword("");
    }
  };

  const handleLoginValidation = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setLoginEmailError(false);
    setLoginPasswordError(false);

    let isValid = true;

    if (loginEmail.trim() === "" || !loginEmail.includes("@")) {
      setLoginEmailError(true);
      isValid = false;
    }

    if (loginPassword.trim() === "") {
      setLoginPasswordError(true);
      isValid = false;
    }

    if (isValid) {
      alert("Connexion réussie !");
    }
  };

  return (
    <div className="forms-container">
      <div className="form-toggle-buttons">
        <button
          type="button"
          onClick={() => setIsSignupVisible(true)}
          className="toggle-button"
        >
          Créer un Compte
        </button>
        <button
          type="button"
          onClick={() => setIsSignupVisible(false)}
          className="toggle-button"
        >
          Connexion
        </button>
      </div>

      {isSignupVisible ? (
        <form className="form-signup" onSubmit={handleSignupSubmit}>
          <h2>Créer un Compte</h2>

          <div className="input">
            <input
              type="text"
              placeholder="Nom"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              className="inputsignup"
            />
            {signupNameError && (
              <p className="error">Le champ "Nom" ne peut pas être vide.</p>
            )}
          </div>

          <div className="input">
            <input
              type="email"
              placeholder="Adresse Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="inputsignup"
            />
            {signupEmailError && (
              <p className="error">
                Veuillez entrer une adresse email valide (avec @).
              </p>
            )}
          </div>

          <div className="input">
            <input
              type="password"
              placeholder="Mot de passe"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="inputsignup"
            />
            {signupPasswordError && (
              <p className="error">
                Le champ "Mot de passe" ne peut pas être vide.
              </p>
            )}
          </div>

          <button type="submit" className="buttonsignup">
            S'inscrire
          </button>
        </form>
      ) : (
        <form className="form-login" onSubmit={handleLoginValidation}>
          <h2>Connexion</h2>

          <div className="input">
            <input
              type="email"
              placeholder="Adresse Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="inputlogin"
            />
            {loginEmailError && (
              <p className="error">
                Veuillez entrer une adresse email valide (avec @).
              </p>
            )}
          </div>

          <div className="input">
            <input
              type="password"
              placeholder="Mot de passe"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="inputlogin"
            />
            {loginPasswordError && (
              <p className="error">
                Le champ "Mot de passe" ne peut pas être vide.
              </p>
            )}
          </div>

          <button type="submit" className="buttonlogin">
            Connexion
          </button>
        </form>
      )}
    </div>
  );
}

export default FormUser;

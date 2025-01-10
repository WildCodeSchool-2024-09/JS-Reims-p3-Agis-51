import { useState } from "react";
import "./SignupUser.css";

function SignupUser() {
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [signupNameError, setSignupNameError] = useState(false);
  const [signupEmailError, setSignupEmailError] = useState(false);
  const [signupPasswordError, setSignupPasswordError] = useState(false);

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

  return (
    <div className="signup-container">
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
            <p className="error">Veuillez entrer un email valide (avec @).</p>
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
    </div>
  );
}

export default SignupUser;

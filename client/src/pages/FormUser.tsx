import { useState } from "react";
import "./FormUser.css";

function FormUser() {
  const [isLogin, setIsLogin] = useState(false);

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupErrors, setSignupErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({
    email: false,
    password: false,
  });

  const handleLoginClick = () => setIsLogin(true);
  const handleSignUpClick = () => setIsLogin(false);

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      name: signupName.trim() === "",
      email: signupEmail.trim() === "" || !signupEmail.includes("@"),
      password: signupPassword.trim() === "",
    };

    setSignupErrors(errors);

    if (!Object.values(errors).includes(true)) {
      alert("Inscription réussie !");
      setSignupName("");
      setSignupEmail("");
      setSignupPassword("");
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      email: loginEmail.trim() === "" || !loginEmail.includes("@"),
      password: loginPassword.trim() === "",
    };

    setLoginErrors(errors);

    if (!Object.values(errors).includes(true)) {
      alert("Connexion réussie !");
    }
  };

  return (
    <div className="formUser-container">
      <div className="form-user-toggle-buttons">
        <button
          type="button"
          className={`toggle-user-button ${!isLogin ? "active" : ""}`}
          onClick={handleSignUpClick}
        >
          Créer un Compte
        </button>
        <button
          type="button"
          className={`toggle-user-button ${!isLogin ? "active" : ""}`}
          onClick={handleLoginClick}
        >
          Connexion
        </button>
      </div>

      {!isLogin ? (
        <form className="form-signup" onSubmit={handleSignupSubmit}>
          <h2>Créer un Compte</h2>
          <div className="input-form-user">
            <input
              type="text"
              placeholder="Nom"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              className="inputsignup"
            />
            {signupErrors.name && (
              <p className="error">Le champ "Nom" ne peut pas être vide.</p>
            )}
          </div>

          <div className="input-form-user">
            <input
              type="email"
              placeholder="Adresse Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="inputsignup"
            />
            {signupErrors.email && (
              <p className="error">
                Veuillez entrer une adresse email valide (avec @).
              </p>
            )}
          </div>

          <div className="input-form-user">
            <input
              type="password"
              placeholder="Mot de passe"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="inputsignup"
            />
            {signupErrors.password && (
              <p className="error">
                Le champ "Mot de passe" ne peut pas être vide.
              </p>
            )}
          </div>

          <button type="submit" className="button-form-user">
            S'inscrire
          </button>
        </form>
      ) : (
        <form className="form-login" onSubmit={handleLoginSubmit}>
          <h2>Connexion</h2>
          <div className="input-form-user">
            <input
              type="email"
              placeholder="Adresse Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="inputlogin"
            />
            {loginErrors.email && (
              <p className="error">
                Veuillez entrer une adresse email valide (avec @).
              </p>
            )}
          </div>

          <div className="input-form-user">
            <input
              type="password"
              placeholder="Mot de passe"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="inputlogin"
            />
            {loginErrors.password && (
              <p className="error">
                Le champ "Mot de passe" ne peut pas être vide.
              </p>
            )}
          </div>

          <button type="submit" className="button-form-user">
            Connexion
          </button>
          <div>
            <p>
              Vous n'avez pas de compte ?{" "}
              <button type="button" onClick={handleSignUpClick}>
                Créer un compte
              </button>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

export default FormUser;

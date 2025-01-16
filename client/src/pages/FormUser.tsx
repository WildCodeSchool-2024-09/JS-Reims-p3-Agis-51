import { useRef, useState } from "react";
import type { FormEventHandler } from "react";
import "./FormUser.css";
import { useNavigate, useOutletContext } from "react-router-dom";

type User = {
  id: number;
  email: string;
  is_admin: boolean;
  name?: string;
};

type Auth = {
  user: User;
  token: string;
};

function FormUser() {
  const { setAuth } = useOutletContext() as {
    setAuth: (auth: Auth | null) => void;
  };

  const [isLogin, setIsLogin] = useState(true); // Définition de l'état isLogin

  // Références des champs
  const signupNameRef = useRef<HTMLInputElement>(null);
  const signupEmailRef = useRef<HTMLInputElement>(null);
  const signupPasswordRef = useRef<HTMLInputElement>(null);

  const loginEmailRef = useRef<HTMLInputElement>(null);
  const loginPasswordRef = useRef<HTMLInputElement>(null);

  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null,
  );

  const navigate = useNavigate();

  const handleLoginClick = () => setIsLogin(true); // Active le formulaire de connexion
  const handleSignUpClick = () => setIsLogin(false); // Active le formulaire d'inscription

  // Validation email
  const loginValidateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Gestion de la soumission du formulaire d'inscription
  const handleSignupSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    if (
      !signupNameRef.current ||
      !signupEmailRef.current ||
      !signupPasswordRef.current
    ) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: signupNameRef.current.value,
            email: signupEmailRef.current.value,
            password: signupPasswordRef.current.value,
          }),
        },
      );

      if (response.status === 201) {
        alert("Compte créé avec succès !");
        setAuth(null);
        navigate("/");
      } else {
        alert("Erreur lors de la création du compte.");
      }
    } catch (err) {
      alert("Une erreur s'est produite. Veuillez réessayer.");
      console.error(err);
    }
  };

  // Gestion de la soumission du formulaire de connexion
  const handleLoginSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    const loginEmail = loginEmailRef.current?.value;
    const loginPassword = loginPasswordRef.current?.value;
    if (!loginEmail || !loginPassword) {
      setLoginErrorMessage("Veuillez remplir tous les champs.");
      return;
    }
    if (!loginValidateEmail(loginEmail)) {
      setLoginErrorMessage("L'adresse email est invalide.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: loginEmail,
            password: loginPassword,
          }),
        },
      );

      if (response.status === 200) {
        const user = await response.json();
        alert("Connexion réussie !");
        setAuth(user);
        navigate("/"); // rediriger après succès
      } else if (response.status === 401) {
        setLoginErrorMessage("Identifiants incorrects.");
      } else {
        setLoginErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (err) {
      setLoginErrorMessage("Impossible de se connecter.");
      console.error(err);
    }
  };

  return (
    <div className="formUser-container">
      <div className="form-user-toggle-buttons">
        <button
          type="button"
          className={`toggle-user-button ${!isLogin ? "is-active" : ""}`}
          onClick={handleSignUpClick}
        >
          Créer un Compte
        </button>
        <button
          type="button"
          className={`toggle-user-button ${isLogin ? "is-active" : ""}`}
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
              ref={signupNameRef}
              type="text"
              placeholder="Nom et Prénom"
              className="inputsignup"
            />
          </div>

          <div className="input-form-user">
            <input
              type="email"
              placeholder="Adresse Email"
              ref={signupEmailRef}
              className="inputsignup"
            />
          </div>

          <div className="input-form-user">
            <input
              type="password"
              placeholder="Mot de passe"
              ref={signupPasswordRef}
              className="inputsignup"
            />
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
              ref={loginEmailRef}
              className="inputlogin"
            />
          </div>

          <div className="input-form-user">
            <input
              type="password"
              placeholder="Mot de passe"
              ref={loginPasswordRef}
              className="inputlogin"
            />
          </div>

          {loginErrorMessage && <p className="error">{loginErrorMessage}</p>}

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

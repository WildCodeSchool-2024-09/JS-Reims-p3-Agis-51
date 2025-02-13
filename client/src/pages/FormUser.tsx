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

  const [isLogin, setIsLogin] = useState(true);

  const signupEmailRef = useRef<HTMLInputElement>(null);
  const signupPasswordRef = useRef<HTMLInputElement>(null);

  const loginEmailRef = useRef<HTMLInputElement>(null);
  const loginPasswordRef = useRef<HTMLInputElement>(null);

  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null,
  );

  const navigate = useNavigate();

  const handleLoginClick = () => setIsLogin(true);
  const handleSignUpClick = () => setIsLogin(false);

  const loginValidateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignupSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    if (!signupEmailRef.current || !signupPasswordRef.current) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signupEmailRef.current.value,
          password: signupPasswordRef.current.value,
        }),
      });

      navigate("/compte");
    } catch (err) {
      alert("Une erreur s'est produite. Veuillez réessayer.");
      console.error(err);
    }
  };

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
          credentials: "include",
        },
      );

      if (response.status === 200) {
        const data = await response.json();
        setAuth(data);
        navigate("/profile");
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

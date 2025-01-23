import "./Tarif-60euros.css";
import { useNavigate } from "react-router-dom";
const Tarif60 = () => {
  const navigate = useNavigate();
  return (
    <div className="tarif-60">
      <h1>Tarif à 60 € / heure M.O</h1>
      <p>
        Si vous êtes un particulier imposable, une entreprise, un organisme, une
        institution… veuillez prendre directement contact avec nos services afin
        de prendre rendez-vous pour un diagnostic du véhicule.
      </p>

      <h2>Un acte de solidarité</h2>
      <p>
        Faire le choix de faire entretenir ou réparer votre véhicule dans notre
        garage est un acte de solidarité pour l’emploi et la mobilité des
        personnes précaires.
      </p>

      <p>
        Le diagnostic est gratuit, et vous pouvez nous joindre au 03.26.02.82.99
      </p>

      <button type="button" onClick={() => navigate("/reparation")}>
        Retour
      </button>
    </div>
  );
};

export default Tarif60;

import "./Tarif-29euros.css";
import { useNavigate } from "react-router-dom";

const Tarif29 = () => {
  const navigate = useNavigate();
  return (
    <div className="tarif-29">
      <h1>Tarif à 29 € / heure M.O</h1>
      <p>
        Si vous bénéficiez du tarif à 29€ l’heure de main d ‘œuvre, il vous
        faudra tout d’abord prendre contact avec nos services pour fixer un
        rendez-vous pour un diagnostic du véhicule.
      </p>

      <h2>Justificatifs nécessaires</h2>
      <ul>
        <li>
          <h3>Minima sociaux, recherche d’emploi ou de formation</h3>
          <ul>
            <li>
              Avis de situation (attestation de stage, de formation, de
              recherche d’emploi…)
            </li>
            <li>Justificatif de ressources (du dernier mois)</li>
            <li>Carte grise et justificatif d’assurance à votre nom</li>
          </ul>
        </li>
        <li>
          <h3>Ressources inférieures à 950€ par mois</h3>
          <ul>
            <li>Justificatif de ressources (du dernier mois)</li>
            <li>Carte grise et justificatif d’assurance à votre nom</li>
          </ul>
        </li>
        <li>
          <h3>Étudiants boursiers</h3>
          <ul>
            <li>Carte d’étudiant</li>
            <li>Notification de bourse (année en cours)</li>
            <li>Carte grise et justificatif d’assurance à votre nom</li>
          </ul>
        </li>
      </ul>

      <p>
        Le diagnostic est gratuit, et vous pouvez nous joindre au 03.26.02.82.99
      </p>
      <button type="button" onClick={() => navigate("/reparation")}>
        Retour
      </button>
    </div>
  );
};

export default Tarif29;

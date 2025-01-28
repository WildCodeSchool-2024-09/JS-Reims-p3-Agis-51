import "./Tarif-45euros.css";
import { useNavigate } from "react-router-dom";
const Tarif45 = () => {
  const navigate = useNavigate();
  return (
    <div className="tarif-45">
      <h2>Tarif à 45 € / heure M.O</h2>
      <p>
        Si vous bénéficiez du tarif à 45€ l’heure de main d ‘œuvre, il vous
        faudra tout d’abord prendre contact avec nos services pour fixer un
        rendez-vous pour un diagnostic du véhicule.
      </p>

      <h3>Justificatifs nécessaires</h3>

      <h3>Personne non imposable</h3>
      <ul>
        <li>
          Avis de non-imposition (même nom, même adresse que sur la carte grise)
        </li>
        <li>Carte grise et justificatif d’assurance à votre nom</li>
      </ul>
      <h3>Association</h3>
      <ul>
        <li>Carte grise au nom de l’association</li>
      </ul>
      <h3>Étudiant non boursier</h3>
      <ul>
        <li>Carte étudiant (année en cours)</li>
        <li>Carte grise et justificatif d’assurance à votre nom</li>
      </ul>

      <p>
        Le diagnostic est gratuit, et vous pouvez nous joindre au 03.26.02.82.99
      </p>
      <button type="button" onClick={() => navigate("/tarifs-reparations")}>
        Retour
      </button>
    </div>
  );
};

export default Tarif45;

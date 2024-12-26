import "./Reparation.css";
import { Link, useNavigate } from "react-router-dom";

function Reparation() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/TarifsReparations");
  };

  return (
    <div className="reparations-page">
      <h1>Entretien et Réparations</h1>
      <p>
        Le garage d’insertion réalise l’entretien et les réparations mécaniques
        de votre véhicule, quelle que soit la marque.
      </p>
      <p>
        Notre atelier est équipé de deux ponts deux colonnes et d’un pont quatre
        colonnes, ainsi que de tout le matériel professionnel nécessaire à
        l’ensemble des travaux d’entretien courant et de réparations mécaniques
        des véhicules légers et utilitaires, quelle que soit la marque.
      </p>
      <h2>Notre objectif</h2>
      <p>
        Garantir un véhicule fiable en termes de sécurité et propre pour
        l’environnement.
      </p>

      <h2>Nos prestations</h2>
      <ul>
        <li>
          Vidange (forfait filtre+huile+joint), entretien, climatisation
          (forfait), révision
        </li>
        <li>Réglage mise au point moteur</li>
        <li>Diagnostic électronique</li>
        <li>Pneumatique</li>
        <li>Géométrie, parallélisme</li>
        <li>Freinage</li>
        <li>Suspensions</li>
        <li>Démarrage</li>
        <li>Éclairage</li>
        <li>Échappement</li>
        <li>Boite de vitesse</li>
        <li>Distribution</li>
        <li>Embrayage</li>
      </ul>

      <p>
        Tous les travaux sont réalisés par nos salariés polyvalents sous le
        contrôle d’un chef d’atelier, technicien diplômé et expérimenté, et sont
        garantis par une assurance professionnelle garage.
      </p>

      <h2>Informations pour le rendez-vous</h2>
      <p>
        Le jour du rendez-vous, merci de déposer votre véhicule :
        <ul>
          <li>Dans un état de propreté correct</li>
          <li>Avec un niveau de carburant suffisant</li>
          <li>Sans effets personnels</li>
        </ul>
      </p>
      <button className="tarif-button" type="button" onClick={handleClick}>
        {" "}
        Consulter nos tarifs
        <Link to="/TarifsReparations">
        </Link>
      </button>
    </div>
  );
}

export default Reparation;

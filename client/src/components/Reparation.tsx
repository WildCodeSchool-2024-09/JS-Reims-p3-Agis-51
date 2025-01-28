import "./Reparation.css";
import { Link } from "react-router-dom";

function Reparation() {
  return (
    <div className="reparations-page">
      <h2 className="reparations-title">Entretien et Réparations</h2>
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
      <h3>Notre objectif</h3>
      <p>
        Garantir un véhicule fiable en termes de sécurité et propre pour
        l’environnement.
      </p>

      <h3>Nos prestations</h3>
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

      <h3>Informations pour le rendez-vous</h3>
      <section className="tarifs">
        <p> Le jour du rendez-vous, merci de déposer votre véhicule :</p>
        <ul>
          <li>Dans un état de propreté correct</li>
          <li>Avec un niveau de carburant suffisant</li>
          <li>Sans effets personnels</li>
        </ul>
        <Link className="tarif-button" to="/tarifs-reparations">
          Consulter nos tarifs
        </Link>
      </section>
    </div>
  );
}

export default Reparation;

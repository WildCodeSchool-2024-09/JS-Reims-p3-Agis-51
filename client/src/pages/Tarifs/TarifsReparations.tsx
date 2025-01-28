import "./TarifsReparations.css";
import { Link } from "react-router-dom";

const TarifsReparations = () => {
  return (
    <div className="forfait-reparations-page">
      <h2>Un Garage Solidaire au Service de l’Emploi et de la Mobilité</h2>
      <p>
        Les services d’AGIS 51 sont ouverts à <strong>TOUS</strong>. De par sa
        spécificité de garage solidaire, l’association propose des tarifs
        adaptés en fonction des ressources de ses clients.
      </p>

      <h2>Nos Tarifs</h2>

      <div className="tarif">
        <h3>Tarif 1 : 29€/heure MO</h3>
        <p>
          Ce tarif est réservé aux personnes bénéficiaires des minima sociaux (
          <strong>RSA, ASS, AAH…</strong>) engagées dans une démarche
          d’insertion professionnelle, ainsi que :
        </p>
        <ul>
          <li>
            Personnes avec des ressources inférieures à 950€/mois (demandeurs
            d’emploi, apprentis, stagiaires...)
          </li>
          <li>Étudiants boursiers</li>
          <li>Résidants marnais</li>
        </ul>
        <Link className="procedure-link" to="/tarif29">
          Lien vers la procédure à 29€
        </Link>
      </div>

      <div className="tarif">
        <h3>Tarif 2 : 45€/heure MO</h3>
        <p>Ce tarif est réservé aux :</p>
        <ul>
          <li>Personnes non imposables</li>
          <li>Étudiants non boursiers</li>
          <li>Associations</li>
        </ul>
        <Link className="procedure-link" to="/tarif45">
          Lien vers la procédure à 45€
        </Link>
      </div>

      <div className="tarif">
        <h3>Tarif 3 : 60€/heure MO</h3>
        <p>
          Ce tarif s’applique aux personnes ne rentrant pas dans les deux
          premières catégories, notamment :
        </p>
        <ul>
          <li>Particuliers</li>
          <li>Entreprises</li>
          <li>Institutions</li>
        </ul>
        <p>
          Des remises sont accordées pour les salariés des entreprises
          adhérentes à <strong>ECORES</strong>.
        </p>
        <Link className="procedure-link" to="/tarif60">
          Lien vers la procédure à 60€
        </Link>
      </div>

      <h2>Nos Forfaits</h2>
      <p>Nous proposons des forfaits adaptés à vos besoins, notamment :</p>
      <ul>
        <li>Forfait Vidange</li>
        <li>Forfait Parallélisme</li>
        <li>Forfait Climatisation</li>
      </ul>
      <p>
        <strong>Pour tous renseignements, appelez au :</strong>{" "}
        <a href="tel:0326028299">03.26.02.82.99</a>
      </p>
    </div>
  );
};

export default TarifsReparations;

import "/.Tarif-45euros.css";

const Tarif45 = () => {
  return (
    <div className="tarif-45">
      <h1>Tarif à 45 € / heure M.O</h1>
      <p>Si vous bénéficiez du tarif à 45€ l’heure de main d ‘œuvre, il vous faudra tout d’abord prendre contact avec nos services pour fixer un rendez-vous pour un diagnostic du véhicule.</p>

      <h2>Justificatifs nécessaires</h2>
      <ul>
        <li>
          <h3>Personne non imposable</h3>
          <ul>
            <li>Avis de non-imposition (même nom, même adresse que sur la carte grise)</li>
            <li>Carte grise et justificatif d’assurance à votre nom</li>
          </ul>
        </li>
        <li>
          <h3>Association</h3>
          <ul>
            <li>Carte grise au nom de l’association</li>
          </ul>
        </li>
        <li>
          <h3>Étudiant non boursier</h3>
          <ul>
            <li>Carte étudiant (année en cours)</li>
            <li>Carte grise et justificatif d’assurance à votre nom</li>
          </ul>
        </li>
      </ul>

      <p>Le diagnostic est gratuit, et vous pouvez nous joindre au 03.26.02.82.99</p>
    </div>
  );
};

export default Tarif45;
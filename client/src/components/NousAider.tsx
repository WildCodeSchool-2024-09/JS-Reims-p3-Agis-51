import "./NousAider.css";
import aidernous from "../assets/images/aider-nous.jpg";
import aidernous2 from "../assets/images/aider-nous2.jpg";
import Form from "./form";

const DonationForm = () => {
  return (
    <div className="donation-container">
      <h1 className="donation-title">Nous Aider</h1>
      <p>
        Vous pouvez faire un don solidaire à l&apos;association, qu&apos;il soit
        financier ou matériel.
        <br /> <h3>Exemple :</h3> Vous envisagez de vous séparer de votre
        voiture, faites en don à l&apos;association. Nos techniciens
        contrôleront le véhicule et effectueront les réparations nécessaires
        avant de le proposer à la location ou à la vente et permettre ainsi à
        des personnes en difficulté d&apos;accéder à un emploi.
      </p>
      <h2 className="donation-title2">
        Pour faire une donation, vous devez remplir le formulaire ci-dessous ⬇️
      </h2>
      <Form />
      <div className="donation-img">
        <img src={aidernous} alt="aider-nous" />
        <img src={aidernous2} alt="aider-nous" />
      </div>
    </div>
  );
};

export default DonationForm;

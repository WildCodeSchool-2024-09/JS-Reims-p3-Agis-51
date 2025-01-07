import "./Home.css";
import banner from "../../assets/images/banner.jpg";

const Home = () => {
  return (
    <div className="banner-images">
      <div>
        <img src={banner} alt="Banner" className="banner-icon" />
      </div>
      <div className="info">
        <h1> AGIS 51 </h1>
        <p>
          L’Association Garage pour l’Insertion et la Solidarité 51 a été créée
          en 2013 et son atelier de maintenance et de réparation automobile
          fonctionne depuis le début de l’année 2014.
        </p>
        <p>
          Conventionnée par l’Etat comme « Atelier Chantier d’Insertion »,
          l’association s’est donnée une double mission :
        </p>
        <ul>
          <li>L’insertion professionnelle</li>
          <li>La mobilité pour l’emploi</li>
        </ul>
        <p>Ce projet est soutenu par l’Union Européenne.</p>
      </div>
    </div>
  );
};

export default Home;

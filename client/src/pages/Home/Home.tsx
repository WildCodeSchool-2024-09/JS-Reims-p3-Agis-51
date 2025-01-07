import "./Home.css";

const Home = () => {
  return (
    <div className="banner-images">
      <img
        src="/assets/images/banner.jpg"
        alt="Banner"
        className="banner-icon"
      />
      <div className="info">
        <h1> "Bienvenue à l'AGIS 51" </h1>
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
          <li>l’insertion professionnelle</li>
          <li>la mobilité pour l’emploi</li>
        </ul>
        <p>Ce projet est soutenu par l’Union Européenne.</p>
      </div>
    </div>
  );
};

export default Home;

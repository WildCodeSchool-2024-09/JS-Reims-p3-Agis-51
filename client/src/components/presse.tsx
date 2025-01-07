import "./presse.css";

function Presse() {
  return (
    <div>
      <h1>Articles de presse</h1>

      <div className="article-container">
        <div className="article">
          <h2>Un garage pour trouver la voie</h2>
          <p>
            C'est un garage solidaire qui a été inauguré hier chemin
            Saint-Léonard à Reims. Sa mission est double : favoriser l'insertion
            professionnelle et la mobilité pour l'emploi.
            <br />
            <button type="button">Lire l'article</button>
          </p>
        </div>
        <div className="article">
          <h2>Titre de l'article</h2>
          <p>Contenu de l'article</p>
        </div>
        <div className="article">
          <h2>Titre de l'article</h2>
          <p>Contenu de l'article</p>
        </div>
        <div className="article">
          <h2>Titre de l'article</h2>
          <p>Contenu de l'article</p>
        </div>
      </div>
    </div>
  );
}

export default Presse;

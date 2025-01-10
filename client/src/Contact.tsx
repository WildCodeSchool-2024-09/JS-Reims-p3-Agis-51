import "./App.css";
import "./Contact.css";
import Agis51 from "./assets/images/Agis51-map.png";
import Message from "./components/form";

function Contact() {
  return (
    <>
      <div>
        <h1> Contactez nous</h1>
        <p>
          <h3>Horaires d’ouvertures :</h3> du lundi au vendredi De 8h30 à 12h et
          de 13h30 à 17h tél : 03 26 02 82 99 <h3>Adresse :</h3> ZI. Farman La
          Pompelle Chemin de Saint Léonard 51100 REIMS
        </p>
        <div className="map-img">
          <img src={Agis51} alt="map" />
        </div>
      </div>

      <nav className="navbar">
        <ul>
          <div>
            <a
              href="https://www.facebook.com/AGIS51"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*  */}
            </a>
          </div>
        </ul>
      </nav>

      <main className="text-box">
        <section>
          <div>
            <Message />
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;

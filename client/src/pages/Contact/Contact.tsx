import "./Contact.css";
import Message from "../../components/form";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <header>
          <h1 className="logo">Contactez nous</h1>
        </header>
        <main>
          <div className="text-box">
            <p>
              Contact Horaires d’ouvertures : du lundi au vendredi De 8h30 à 12h
              et de 13h30 à 17h
              <br />
              <br /> tél : 03 26 02 82 99 <br /> <br />
              Adresse : ZI. Farman La Pompelle Chemin de Saint Léonard 51100
              REIMS
            </p>
          </div>
          <section>
            <div>
              <Message />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Contact;

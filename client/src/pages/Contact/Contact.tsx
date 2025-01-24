import "./Contact.css";
import Message from "../../components/form";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <header>
          <h2 className="contact-title">Contactez nous</h2>
        </header>
        <main>
          <div className="text-box">
            <h2 className="title-contact">Horaires d’ouvertures</h2>
            <p>
              Contact Horaires d’ouvertures : du lundi au vendredi De 8h30 à 12h
              et de 13h30 à 17h
            </p>
            <p>Téléphone : 03 26 02 82 99</p>
            <h2 className="title-contact">Localisation</h2>
            <p>
              Adresse : ZI. Farman La Pompelle Chemin de Saint Léonard 51100
              REIMS
            </p>
            <iframe
              title="Map of AGIS 51 location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.6537164970796!2d4.094994076071846!3d49.22609397138449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e976c682fa9977:0xfb17dd9b11ba3fde!2sAGIS 51 - Association Garage pour l&#39;Insertion et la Solidarité!5e0!3m2!1sfr!2sfr!4v1737637426824!5m2!1sfr!2sfr"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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

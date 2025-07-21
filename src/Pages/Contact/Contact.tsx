import "./Contact.css";
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
    <Helmet>
  <title>Contact - Prenez rendez-vous avec Pattounes Mania</title>
  <meta
    name="description"
    content="Vous avez une question ou souhaitez réserver un service ? Contactez Pattounes Mania à Carquefou dès maintenant."
  />
  <link rel="canonical" href="https://www.pattounesmania.com/contact" />
</Helmet>
    <main className="contact2-wrapper">
      <h1 className="contact2-title">🐾 Contact Pattounes Mania</h1>
      <p className="contact2-intro">
        Vous avez une question, besoin d’un conseil ou souhaitez en savoir plus ? 
        Je vous réponds avec plaisir ! 💌
      </p>

      <section className="contact2-cards">
        <article className="contact2-card">
          <div className="icon-circle phone">
            <span role="img" aria-label="phone">📞</span>
          </div>
          <a href="tel:+33668097748" className="contact2-link">06 68 09 77 48</a>
        </article>

        <article className="contact2-card">
          <div className="icon-circle mail">
            <span role="img" aria-label="email">📧</span>
          </div>
          <a 
            href="mailto:pattounesmania@gmail.com?subject=Demande%20d'information" 
            className="contact2-link"
          >
            pattounesmania@gmail.com
          </a>
        </article>

        <article className="contact2-card">
  <div className="icon-circle location">
    <span role="img" aria-label="location">📍</span>
  </div>
  <address className="contact2-text">
    1C Impasse du Chemin des Dames<br />
    44470 Carquefou<br />
    France
  </address>
</article>
      </section>

      <section className="contact2-map">
        <p>🗺️ Carte en cours d’intégration...</p>
      </section>

      <section className="contact2-hours">
        <h2>⏰ Horaires</h2>
        <ul>
          <li>🐾 Lundi - Samedi : 9h30 - 13h / 14h - 19h</li>
          <li>🐾 Dimanche : Fermé</li>
        </ul>
      </section>
    </main>
  </>
  );
}
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import "./Pension.css";

export default function Pension() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(".fade-in");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Helmet>
  <title>Pension pour NAC à Carquefou - Pattounes Mania</title>
  <meta
    name="description"
    content="Offrez un hébergement sécurisé et confortable à vos NAC : pension pour lapins, rongeurs et petits mammifères à Carquefou, près de Nantes."
  />
  <link rel="canonical" href="https://www.pattounesmania.com/pension" />
</Helmet>
    <main className="pension-page">
      <section className="pension-hero-alt fade-in">
  <img className="pension-hero-bg animated-bg" src="/Pattounes-Mania-Shop.png" alt="Lapin décoratif" />
        <div className="pension-hero-bubble hover-effect">
          <h1>🐰 Bienvenue chez Pattounes Mania - Pension !</h1>
          <p>
            La première pension de la région 100 % dédiée aux lapins et rongeurs.<br />
            Un lieu conçu avec passion, fondé sur des connaissances solides et une vraie expérience.
          </p>
        </div>
      </section>

      <section className="pension-timeline fade-in">
        <div className="timeline-line" />
        <div className="timeline-content">
          <span className="timeline-icon">💡</span>
          <div>
            <h2>Une idée née d’un véritable besoin</h2>
            <p>
              Combien de fois ai-je entendu :<br />
              <em>« Vous ne connaîtriez pas quelqu’un de confiance pour garder mon lapin pendant mes vacances ? »</em><br />
              Ces nombreuses demandes ont fait germer l’idée d’un hôtel spécialisé pour NACs : une première dans la région !
            </p>
          </div>
        </div>
      </section>

      <section className="pension-section grid-style fade-in">
        <h2>✨ Ce que nous offrons</h2>
        <ul>
          <li>🏡 Des chambres adaptées à chaque pensionnaire (seul ou en groupe)</li>
          <li>🧸 Un environnement personnalisable avec ses objets familiers</li>
          <li>🕊️ Une installation progressive et douce</li>
          <li>🚫 Aucun mélange d’animaux : sécurité avant tout</li>
          <li>🧼 Nettoyage deux fois par jour minimum</li>
          <li>👀 Surveillance attentive et signalement de tout changement</li>
        </ul>
      </section>

      <section className="pension-section last-section fade-in">
        <h2>💖 Ici, chaque animal compte</h2>
        <p>
          Chez Pattounes Mania, chaque pensionnaire est traité comme un membre de
          la famille. Vous pouvez partir en toute sérénité :<br />
          <strong>on veille sur vos compagnons comme sur les nôtres.</strong>
        </p>
      </section>
      <section className="reservation-cta fade-in">
  <h2>📅 Réservez dès maintenant</h2>
  <p>
    Offrez à votre compagnon un séjour confortable et sécurisé chez Pattounes Mania.<br />
    Contactez-nous par e-mail à <a href="mailto:pattounesmania@gmail.com">pattounesmania@gmail.com</a> <br /> ou
    par téléphone au : <a href="tel:+33668097748" className="contact2-link"><strong>06 68 09 77 48</strong></a>
  </p>
</section>
    </main>
    </>
  );
}
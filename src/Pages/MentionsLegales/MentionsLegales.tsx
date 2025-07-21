import './MentionsLegales.css';
import { Helmet } from 'react-helmet-async';

const MentionsLegales = () => {
  return (
    <>
    <Helmet>
  <title>Mentions légales - Pattounes Mania</title>
  <meta
    name="description"
    content="Consultez les mentions légales du site Pattounes Mania : informations légales, propriété intellectuelle et conditions d’utilisation."
  />
  <link rel="canonical" href="https://www.pattounesmania.com/mentions-legales" />
</Helmet>
    <main className="legal-main">
      <h1 className="legal-title">📄 Mentions Légales</h1>

      <section className="legal-section">
        <h2>👩‍💼 Éditeur du site</h2>
        <p>
          <strong>Pattounes Mania</strong><br />
          1C Impasse du Chemin des Dames, 44470 Carquefou<br />
          SIRET : 944 246 008 00014<br />
          pattounesmania@gmail.com<br />
          06 68 09 77 48
        </p>
      </section>

      <section className="legal-section">
        <h2>🧑‍💻 Hébergeur</h2>
        <p>
          OVH SAS<br />
          2 rue Kellermann – 59100 Roubaix – France<br />
          www.ovh.com
        </p>
      </section>

      <section className="legal-section">
        <h2>🔐 Données personnelles</h2>
        <p>
          Aucune donnée personnelle n’est collectée via ce site sans votre consentement. Aucune information n’est revendue ou utilisée à des fins commerciales. Le formulaire de contact utilise uniquement vos données pour répondre à vos messages.
        </p>
      </section>

      <section className="legal-section">
        <h2>🛡️ Confidentialité & Cookies</h2>
        <p>
          Ce site est une vitrine informative et ne collecte aucune donnée personnelle. Aucun cookie, traceur ou outil d’analyse n’est utilisé. Si des outils externes comme une carte interactive sont ajoutés à l’avenir, cette politique sera mise à jour en conséquence.
        </p>
      </section>

      <section className="legal-section">
        <h2>⚖️ Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur le site Pattounes Mania (textes, images, logos, etc.) sont la propriété exclusive de la fondatrice sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>
      </section>

      <section className="legal-section">
        <h2>📆 Dernière mise à jour</h2>
        <p>29 juin 2025</p>
      </section>
    </main>
    </>
  );
};

export default MentionsLegales;
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./NotFound.css";

const NotFound = () => {
  return (
    <>
    <Helmet>
  <title>Page non trouvée - Pattounes Mania</title>
  <meta name="robots" content="noindex" />
</Helmet>
    <section className="notfound-wrapper">
      <section className="notfound-box">
        <h1>404</h1>
        <p className="main">Oh non ! Page introuvable 🐾</p>
        <p className="sub">
          Oups, la page que vous cherchez n’existe pas ou a été déplacée.
        </p>
        <Link to="/">← Retour à l’accueil</Link>
      </section>
    </section>
    </>
  );
};

export default NotFound;
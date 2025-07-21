import { useState } from "react";
import { Helmet } from 'react-helmet-async';

import Modal from "../../Components/Modal/Modal";
import "./Home.css";

export default function Home() {
  const [modalType, setModalType] = useState<"contact" | "social" | null>(null);

  return (
    <>
    
    <Helmet>
  <title>Pattounes Mania - Boutique & Pension pour NAC à Carquefou</title>
  <meta
    name="description"
    content="Bienvenue chez Pattounes Mania, spécialiste des NAC à Carquefou : boutique, pension, et services dédiés aux lapins, rongeurs, reptiles et oiseaux."
  />
  <link rel="canonical" href="https://www.pattounesmania.com/" />
</Helmet>
    <main className="home-wrapper">
      <section className="hero">
        <h1>Notre site est actuellement en construction.</h1>
        <img src="/Logo-Pattounes-Mania.png" alt="Logo Pattounes Mania" className="logo animated-logo" />
        <p className="subtitle">
          Votre concept store 100% NAC prépare un joli cocon pour vos compagnons. 🐰🐍🦜 
        </p>
        <p className="description">Boutique pour lapins, rongeurs, reptiles et oiseaux : alimentation & accessoires
</p>
<p className="description">
Pension/hôtel dédiée aux lapins & rongeurs</p>
        <p className="infos">
          En attendant, suivez-nous sur nos réseaux ou contactez-nous :
        </p>
        <section className="cta-buttons">
          <button className="btn violet" onClick={() => setModalType("contact")}>
            Nous contacter
          </button>
          <button className="btn blue" onClick={() => setModalType("social")}>
            Suivez-nous
          </button>
        </section>

        <p className="coming-soon">À très bientôt sur notre site officiel !</p>
      </section>

     {modalType === "contact" && (
  <Modal title="Contact" onClose={() => setModalType(null)}>
    <p>📧 <a
  href={`mailto:pattounesmania@gmail.com?subject=${encodeURIComponent(
    "Demande d'information - Pattounes Mania"
  )}&body=${encodeURIComponent(
    "Bonjour,\n\nJe souhaite obtenir des informations concernant vos services et produits.\n\nMerci d'avance,\n[Votre nom]"
  )}`}
>
  pattounesmania@gmail.com
</a></p>
    <p>📞 <a href="tel:+33668097748">
06 68 09 77 48</a></p>
  </Modal>
)}

{modalType === "social" && (
  <Modal title="Réseaux sociaux de Pattounes Mania" onClose={() => setModalType(null)}>
    <p>📸 <a href="https://www.instagram.com/pattounes_mania?utm_source=ig_web_button_share_sheet&igsh=cm5ub3o4enp3c29z" target="_blank" rel="noopener noreferrer">Instagram</a></p>
    <p>📘 <a href="https://www.facebook.com/profile.php?id=61575911197430&sk=about" target="_blank" rel="noopener noreferrer">Facebook</a></p>
  </Modal>
)}
    </main>
    </>
  );
}

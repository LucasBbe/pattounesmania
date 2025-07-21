import "./About.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".histoire-block");
    const reveal = () => {
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          section.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
<>

    <Helmet>
  <title>L’histoire de Pattounes Mania - Fondatrice passionnée des NAC</title>
  <meta
    name="description"
    content="Découvrez le parcours de Jagoda, fondatrice de Pattounes Mania, ancienne ASV spécialisée NAC, et sa passion pour les nouveaux animaux de compagnie."
  />
  <link rel="canonical" href="https://www.pattounesmania.com/histoire" />
</Helmet>
    <section className="histoire-container">
      <section className="histoire-banner" data-aos="fade-right">
        <h1>L'histoire de Pattounes Mania</h1>
        <h2>Une aventure née de passion et de tendresse pour les NAC.</h2>
      </section>

      <section className="histoire-block" data-aos="fade-up" data-aos-delay="100">
        <section className="histoire-img left" data-aos="fade-up" data-aos-delay="150">
          <img
            src="/Jagoda-lapin.jpg"
            alt="Jagoda, fondatrice de Pattounes Mania"
          />
        </section>
        <section className="histoire-content" data-aos="fade-right" data-aos-delay="200">
          <h2>Qui suis-je ?</h2>
          <p>
            Je suis Jagoda, fondatrice de Pattounes Mania. Avant de me lancer dans cette belle aventure,
            j’ai exercé pendant cinq ans le métier d’Assistante Spécialisée Vétérinaire (ASV) exclusive NAC.
            Un métier passionnant qui exige rigueur, engagement personnel et une grande patience.
          </p>
          <p>
            J’ai eu la chance de travailler aux côtés de meilleurs vétérinaires spécialisés en NAC,
            ce qui m’a permis de développer une connaissance approfondie des besoins, des fragilités et des comportements propres à chaque espèce.
          </p>
        </section>
      </section>

      <section className="histoire-block reverse" data-aos="fade-up" data-aos-delay="300">
        <section className="histoire-img2 right" data-aos="fade-right" data-aos-delay="350">
          <img
            src="/hamster.jpg"
            alt="Passion NAC"
          />
        </section>
        <section className="histoire-content" data-aos="fade-left" data-aos-delay="400">
          <h2>Une passion devenue projet</h2>
          <p>
            Passionnée de NAC depuis toujours, j’ai constaté au fil des années qu’aucune structure véritablement spécialisée
            dans les animaux dits « exotiques » n’existait aux alentours de Nantes.
          </p>
          <p>
            C’est ainsi qu’est née l’idée de créer un lieu entièrement dédié aux NAC : une boutique spécialisée pour lapins,
            rongeurs, reptiles et oiseaux, associée à une pension/hôtel dédiée aux lapins et rongeurs et un service de pet-sitting réservé aux reptiles et oiseaux.
          </p>
        </section>
      </section>

      <div className="histoire-background-strip" />

      <section className="histoire-block" data-aos="fade-up" data-aos-delay="500">
        <section className="histoire-img2 left" data-aos="fade-up" data-aos-delay="550">
          <img src="/Pattounes-Mania-Share.png" alt="Produits NAC" />
        </section>
        <section className="histoire-content" data-aos="fade-left" data-aos-delay="600">
          <h2>Un constat partagé</h2>
          <p>
            Tout au long de ma carrière, j’ai constaté une problématique : il est difficile de trouver des produits adaptés aux NAC.
            Les propriétaires commandent souvent en ligne, sans conseils spécialisés ni visibilité sur la qualité.
          </p>
          <p>
            Le même constat s’applique à la garde : confier ses NAC à des personnes non formées peut générer stress ou risques pour leur bien-être.
          </p>
        </section>
      </section>

      <section className="histoire-block reverse" data-aos="fade-up" data-aos-delay="700">
        <section className="histoire-img right" data-aos="fade-right" data-aos-delay="750">
          <img src="/Pattounes-Mania-Building.png" alt="Pension NAC" />
        </section>
        <section className="histoire-content" data-aos="fade-left" data-aos-delay="800">
          <h2>La naissance de Pattounes Mania</h2>
          <p>
            C’est dans cet esprit qu’est né Pattounes Mania : un lieu cocooning, 100% dédié aux NAC,
            avec pension pour lapins/rongeurs, et pet-sitting pour reptiles et oiseaux.
          </p>
          <p>
            Aujourd’hui, le concept store a ouvert ses portes à Carquefou,
            avec une offre spécialisée, chaleureuse et pensée pour le bien-être de vos compagnons.
          </p>
        </section>
      </section>

  <section className="histoire-summary" data-aos="fade-up" data-aos-delay="900">
  <h2>Ce que Pattounes Mania vous propose</h2>
  <section className="histoire-services">
    <Link to="/boutique" className="service-card" data-aos="zoom-in" data-aos-delay="950">
      <div className="service-icon">🛍️</div>
      <h3>Boutique spécialisée</h3>
      <p>
        Alimentation rigoureuse pour chaque espèce, équipements techniques pour reptiles, extrudés pour oiseaux…
        accompagnés de conseils personnalisés.
      </p>
    </Link>
    <Link to="/pension" className="service-card" data-aos="zoom-in" data-aos-delay="1000">
      <div className="service-icon">🐰</div>
      <h3>Pension pour NAC</h3>
      <p>
        Chambres confortables et sécurisées pour lapins et rongeurs, surveillance quotidienne et environnement
        personnalisé.
      </p>
    </Link>
    <Link to="/pet-sitting" className="service-card" data-aos="zoom-in" data-aos-delay="1050">
      <div className="service-icon">🦎🦜</div>
      <h3>Pet-sitting à domicile</h3>
      <p>
        Pour reptiles, oiseaux et petits mammifères, un service de garde à domicile rassurant et respectueux de leur rythme.
      </p>
    </Link>
  </section>

  <section className="histoire-redirection-note" data-aos="fade-up" data-aos-delay="1100">
    <p>
      Cliquez sur une carte pour accéder directement au service correspondant (boutique, pension ou pet-sitting).
    </p>
  </section>
</section>
    </section>
</>
  );
}
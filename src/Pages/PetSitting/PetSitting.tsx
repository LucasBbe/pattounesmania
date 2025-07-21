import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './PetSitting.css';

export default function PetSitting() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <Helmet>
  <title>Pet-sitting pour NAC - Reptiles, Oiseaux & Petits Mammifères</title>
  <meta
    name="description"
    content="Service de garde à domicile pour NAC : reptiles, oiseaux et petits mammifères. Confiance et respect du rythme naturel de vos animaux."
  />
  <link rel="canonical" href="https://www.pattounesmania.com/pet-sitting" />
</Helmet>
    <main className="petsitting-page">
      <section className="petsitting-hero">
        <img
          src="https://hamster-guide.fr/wp-content/uploads/2025/02/arrivee-foyer-lapin.jpg"
          alt="Pet-sitting à domicile"
          className="hero-image"
        />
        <section className="hero-inner" data-aos="fade-up">
          <h1>🐾 Le service de Pet-sitting</h1>
          <p>Confort, confiance et bienveillance pour vos compagnons à plumes, poils ou écailles.</p>
        </section>
      </section>

      <section className="petsitting-section" data-aos="fade-up">
        <section className="section-content">
          <img src="/serpent.jpeg" alt="Serpent sur un tapis dans une maison" className="section-img" />
          <section>
            <h2>🐍🦜 Reptiles et oiseaux à domicile</h2>
            <p>
              Parce que certains NAC supportent mal les changements d’environnement – ou qu’il est tout simplement déconseillé de les déplacer – 
              <strong> Pattounes Mania vous propose un service de pet-sitting à domicile</strong>, dans un périmètre défini autour de la pension.
            </p>
            <p>
              Ce service permet à vos compagnons de rester dans leur cadre familier, tout en bénéficiant de soins attentifs et adaptés. 
              <strong> Je viens m’occuper de votre compagnon directement chez lui</strong>, là où il se sent bien.
            </p>
            <p>
              Service aussi disponible pour <strong>lapins et rongeurs</strong>, selon les disponibilités.
            </p>
          </section>
        </section>
      </section>

      <section className="petsitting-section" data-aos="fade-up">
        <section className="section-content reverse">
          <img src="/Jagoda-perroquet-eclectus.jpeg" alt="Confiance et sérénité" className="section-img" />
          <section>
            <h2>🎀 Une relation de confiance</h2>
            <p>
              Chez <strong>Pattounes Mania</strong>, chaque animal est considéré comme un membre de la famille.
              Vous pouvez partir en toute sérénité : <em>on veille sur vos compagnons comme si c’étaient les nôtres.</em>
            </p>
          </section>
        </section>
      </section>
    </main>
    </>
  );
}
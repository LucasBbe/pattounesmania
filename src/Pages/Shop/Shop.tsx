import "./Shop.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

export default function Shop() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
}, []);

  return (
    <>
    <Helmet>
  <title>Boutique spécialisée NAC - Alimentation & Accessoires</title>
  <meta
    name="description"
    content="Découvrez notre boutique NAC à Carquefou : alimentation adaptée, accessoires techniques et conseils pour lapins, rongeurs, reptiles et oiseaux."
  />
  <link rel="canonical" href="https://www.pattounesmania.com/boutique" />
</Helmet>
      <main className="boutique-page">
        <section className="boutique-hero-side" >
  <section className="hero-content-side" >
    <section className="hero-text-side" data-aos="fade-right"> 
      <h1>Bienvenue chez Pattounes Mania - boutique !</h1>
      <p>
        Nous sommes la première boutique de la région 100 % dédiée aux Nouveaux
        Animaux de Compagnie – petits mammifères, reptiles et oiseaux – où chaque
        produit est rigoureusement sélectionné sur la base de connaissances scientifiques
        et d’une solide expérience de terrain.
      </p>
    </section>
    <div className="hero-image-side" data-aos="fade-left"/>
  </section>
</section>

      <section className="boutique-section" data-aos="fade-up">
        <h2>🐰 Tout a été pensé pour vos lapins et rongeurs </h2>
        <p className="boutique-section-description">
          Nous proposons du foin bio et local, bon pour la santé digestive et dentaire des herbivores, aux granulés riches en fibres et friandises naturelles sans additifs ni sucres ajoutés.
        </p>
        
        <section className="product-grid" >
          <section className="product-card" data-aos="fade-left">
            <img src="https://th.bing.com/th/id/OIP.g6I0w87zjbdKiNoR80cByAHaF6?w=640&h=511&rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="Foin bio local" />
            <p className="boutique-section-description">Foin bio local</p>
            <p className="product-description">
              Origine locale, riche en fibres longues, pour favoriser l'usure dentaire et une digestion optimale.
            </p>
          </section>
          <section className="product-card" data-aos="fade-up">
            <img src="https://static.wixstatic.com/media/7388d0_e405211053234e84b9768154f60bb07b~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/7388d0_e405211053234e84b9768154f60bb07b~mv2.jpg" alt="Granulés riches en fibres" />
            <p className="boutique-section-description">Granulés 20% fibres</p>
            <p className="product-description">
              Mélange pressé sans céréales, contenant au moins 20 % de fibres, idéal pour les herbivores.
            </p>
          </section>
          <section className="product-card" data-aos="fade-left">
            <img src="https://static.wixstatic.com/media/61102a_78c1c5bbdb894254a704dcdcde363ebb~mv2_d_4928_3264_s_4_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/61102a_78c1c5bbdb894254a704dcdcde363ebb~mv2_d_4928_3264_s_4_2.jpg" alt="Foin bio local" />
            <p className="boutique-section-description">Mélange Complet</p>
            <p className="product-description">
              Alimentation scientifiquement formulée pour les petits rongeurs (hamsters, souris, rats, gerbilles), où chaque ingrédient est dosé selon les besoins nutritionnels réels de l’animal.
            </p>
          </section>
          <section className="product-card" data-aos="fade-right">
            <img src="/friandises-sechees.jpg" alt="Friandises séchées naturelles" />
            <p className="boutique-section-description">Friandises séchées naturelles</p>
            <p className="product-description">
              À base de légumes et fruits séchés, sans additifs ni sucres ajoutés – pour faire plaisir sans compromettre la santé.
            </p>
          </section>
        </section>
        <p className="note-section" data-aos="fade-up">
          De plus, nous avons créé une alimentation scientifiquement formulée pour les <strong>hamsters, souris, rats et gerbilles</strong>,
          où chaque ingrédient est dosé selon leurs <span className="highlight">besoins nutritionnels réels</span>.
        </p>
      </section>

      <section className="boutique-section" data-aos="fade-up">
        <h2>🦎 Des équipements spécialisés pour reptiles</h2>
        <p className="boutique-section-description">
          Côté reptiles, la sélection comprend des accessoires techniques issus de marques de référence telles que Habistat, Arcadia et Reptile Systems. Tous les produits ont été choisis sur recommandation d’herpétologue, afin de garantir un environnement parfaitement adapté aux besoins physiologiques des reptiles.
        </p>
        <section className="product-grid">
          <section className="product-card2" data-aos="fade-up">
            <img src="/materiel-reptile.jpg" alt="Matériel adapté pour serpent" />
            <p className="boutique-section-description">Matériel adapté</p>
            <p className="product-description">
              Permet de reproduire un habitat au plus proche de celui de votre animal en adaptant des équipements adéquats. 
            </p>
          </section>
          <section className="product-card2" data-aos="fade-right">
            <img src="/photo-insectes.avif" alt="Insectes vivants" />
            <p className="boutique-section-description">Insectes vivants</p>
            <p className="product-description">
              Essentiels à une alimentation équilibrée, les insectes vivants contribuent à un bon métabolisme tout en préservant l’instinct de chasse naturel de votre animal.
            </p>
          </section>
          <section className="product-card2" data-aos="fade-right">
            <img src="/substrat-reptile.jpg" alt="Substrat" />
            <p className="boutique-section-description">Substrat de terrarium</p>
            <p className="product-description">
              Élément clé du confort et de la santé de votre reptile, les substrats adaptés permettent de recréer un environnement naturel, favorisent les bons comportements (comme le creusage ou la thermorégulation) et participent à une hygiène optimale du terrarium.
            </p>
          </section>
        </section>
        <p className="note-section" data-aos="fade-up">
          Découvrez des équipements testés par des experts et adaptés aux <strong>besoins spécifiques des reptiles exotiques</strong>, pour une maintenance optimale.
        </p>
      </section>

      <section className="boutique-section" data-aos="fade-up">
        <h2>🐦 Une gamme complète pour oiseaux</h2>
        <p className="boutique-section-description">
          Notre rayon oiseaux met l’accent sur la vente d’extrudés complets, formulés pour couvrir l’ensemble des besoins nutritionnels de vos compagnons à plumes. Pour varier leur quotidien, vous trouverez également des compléments sains et équilibrés. Une sélection spécifique pour les oiseaux de basse-cour est également disponible en boutique.
        </p>
        <section className="product-grid">
          <section className="product-card2" data-aos="fade-right">
            <img src="/extrudes-perroquet.jpg" alt="Extrudés complets" />
            <p className="boutique-section-description">Extrudés complets</p>
            <p className="product-description">
              Alimentation complète, équilibrée et enrichie en vitamines, adaptée aux espèces exotiques et perroquets.
            </p>
          </section>
          <section className="product-card2" data-aos="fade-left">
            <img src="/melange-complet-oiseau.jpg" alt="Compléments équilibrés" />
            <p className="boutique-section-description">Mélange équilibré</p>
            <p className="product-description">
              En supplément d'une nourriture bien équilibrée, ces mélanges permettent d'enrichir la ration et de diversifier l'alimentation de votre oiseau.
            </p>
          </section>
          <section className="product-card2" data-aos="fade-left">
            <img src="/alimentation-oiseau-basse-cour.jpg" alt="Alimentation oiseaux de basse-cour" />
            <p className="boutique-section-description">Alimentation oiseaux de basse-cour</p>
            <p className="product-description">
               Une gamme complète d’aliments naturels pour oiseaux de basse-cour, conçue pour soutenir leur métabolisme et respecter leurs comportements instinctifs.
            </p>
          </section>
        </section>
        <p className="note-section" data-aos="fade-up">
          Des aliments et compléments adaptés à <strong>toutes les espèces d’oiseaux domestiques</strong>, du perroquet à la poule !
        </p>
      </section>

      <section className="boutique-conseil" data-aos="fade-up">
        <h2 data-aos="fade-left">🎀 Des conseils personnalisés</h2>
        <p data-aos="fade-up">
          Chaque produit est accompagné de conseils précis, adaptés aux besoins de vos compagnons.
          Notre mission : garantir leur bien-être… et votre sérénité !
        </p>
      </section>
    </main>
    </>
  );
}
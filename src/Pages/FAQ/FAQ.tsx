import { useState } from "react";
import { Helmet } from 'react-helmet-async';

import "./Faq.css";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "🐰 Qui suis-je et pourquoi avoir créé Pattounes Mania ?",
    answer:
      "Je suis une ancienne ASV spécialisée NAC, avec plusieurs années d’expérience. J’ai créé Pattounes Mania pour offrir un espace 100 % pensé pour les besoins des lapins, rongeurs, reptiles et oiseaux.",
  },
  {
    question: "🛍️ Quels produits trouve-t-on en boutique ?",
    answer:
      "Une sélection rigoureuse d’aliments, friandises naturelles, équipements spécialisés (Habistat, Arcadia…), accessoires pour le bien-être des NACs, et des conseils personnalisés.",
  },
  {
    question: "🐹 Comment fonctionne la pension pour lapins et rongeurs ?",
    answer:
      "Chaque pensionnaire a un espace individuel, propre, confortable et sécurisé. Les habitats sont adaptés à leurs besoins, avec surveillance et soins personnalisés.",
  },
  {
    question: "🦎 Le pet-sitting à domicile, c’est pour qui ?",
    answer:
      "Pour les animaux sensibles au changement comme les reptiles et oiseaux, mais aussi certains rongeurs. Ils restent dans leur environnement et je me déplace pour les soins.",
  },
  {
    question: "📦 Puis-je commander à distance ?",
    answer:
      "Actuellement, la vente se fait uniquement en boutique. Cependant, n’hésitez pas à nous contacter si vous souhaitez réserver un produit ou obtenir un conseil à distance.",
  },
  {
    question: "💳 Comment se passe le paiement ?",
    answer: "Tous les paiements se font uniquement en boutique, pas de règlement en ligne. Nous acceptons les paiements par carte, espèces, téléphone (sans contact) ainsi que par chèque."
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
    <Helmet>
  <title>FAQ - Questions fréquentes sur nos services NAC</title>
  <meta
    name="description"
    content="Retrouvez ici les réponses aux questions les plus fréquentes sur la pension, le pet-sitting et notre boutique spécialisée NAC."
  />
  <link rel="canonical" href="https://www.pattounesmania.com/faq" />
</Helmet>
    <section className="faq-container">
      <h1 className="faq-title">FAQ – Questions fréquentes 🐾</h1>
      {questions.map((item, index) => (
        <section key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            aria-controls={`answer-${index}`}
          >
            {item.question}
          </button>
          <div
            id={`answer-${index}`}
            className={`faq-answer ${openIndex === index ? "open" : ""}`}
          >
            {openIndex === index && <p>{item.answer}</p>}
          </div>
        </section>
      ))}
    </section>
    </>
  );
}
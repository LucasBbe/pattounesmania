import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-container">
        <section className="footer-section">
          <h4>Informations</h4>
          <ul>
            <li><p>📍</p> <p>1C Impasse du Chemin des Dames, 44470 Carquefou, Loire-Atlantique</p></li>
            <li><p>📧</p> <a
            href="mailto:pattounesmania@gmail.com?subject=Demande%20d'information">
            pattounesmania@gmail.com
          </a></li>
            <li><p>📞</p> <a href="tel:+33668097748">06 68 09 77 48</a></li>
          </ul>
        </section>

        <section >
          <h4>Liens utiles</h4>
          <ul className="useful-links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
          </ul>
        </section>

        <section className="footer-section">
          <h4>Suivez-nous</h4>
          
        <div className="social-icons">
         <a href="https://www.facebook.com/profile.php?id=61575911197430&sk=about" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
           <div className="social-circle">
             <img src="/Logo-facebook.png" alt="Facebook" />
           </div>
         </a>
         <a href="https://www.instagram.com/pattounes_mania?utm_source=ig_web_button_share_sheet&igsh=cm5ub3o4enp3c29z" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
           <div className="social-circle">
             <img src="/Logo-Instagram.png" alt="Instagram" />
           </div>
         </a>
       </div>
        </section>
      </section>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pattounes Mania. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Header.css";

export default function Header() {
  const [isConceptClicked, setIsConceptClicked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleConcept = () => {
    setIsConceptClicked(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsConceptClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header className="site-header">
      <section className="header-container">
        <div className="site-logo">Pattounes Mania</div>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">Accueil</NavLink>
          <NavLink to="/histoire" className="nav-link">Notre histoire</NavLink>

          <section className="dropdown" ref={dropdownRef}>
            <span className="nav-link dropdown-toggle" onClick={toggleConcept}>
              Concept <span className={`arrow ${isConceptClicked ? "rotate" : ""}`}>❯</span>
            </span>
            <div className={`dropdown-menu ${isConceptClicked ? "show" : ""}`}>
              <Link to="/pension" className="dropdown-item" >Pension</Link>
              <Link to="/boutique" className="dropdown-item" >Boutique</Link>
              <Link to="/pet-sitting" className="dropdown-item">Pet-sitting</Link>
            </div>
          </section>
        </nav>
      </section>
    </header>
  );
}
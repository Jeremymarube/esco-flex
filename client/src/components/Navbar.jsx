"use client"

import { useState } from "react";

const NAV_LINKS = ["Home", "About", "Collection", "Why Us", "Testimonials", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Jost:wght@300;400;500&display=swap');

        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 72px;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          background: #FFFFFF;
          box-shadow: 0 1px 0 rgba(44,36,22,0.08);
        }

        .nav-logo {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #2C2416;
          text-decoration: none;
          letter-spacing: 0.01em;
        }
        .nav-logo span { color: #C8922A; }

        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .nav-links a {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: #2C2416;
          text-decoration: none;
          position: relative;
          transition: color 0.2s;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 1px;
          background: #C8922A;
          transition: width 0.3s ease;
        }
        .nav-links a:hover { color: #C8922A; }
        .nav-links a:hover::after { width: 100%; }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
        }
        .hamburger span {
          display: block;
          width: 24px; height: 1.5px;
          background: #2C2416;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .mobile-menu {
          position: fixed;
          top: 72px; left: 0; right: 0;
          background: #fff;
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 24px 24px 32px;
          box-shadow: 0 8px 24px rgba(44,36,22,0.1);
          transform: translateY(-8px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s, transform 0.25s;
        }
        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .mobile-menu a {
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2C2416;
          text-decoration: none;
          padding: 14px 0;
          border-bottom: 1px solid rgba(44,36,22,0.06);
          transition: color 0.2s;
        }
        .mobile-menu a:last-child { border-bottom: none; }
        .mobile-menu a:hover { color: #C8922A; }

        @media (max-width: 900px) {
          .nav { padding: 0 24px; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className="nav">
        <a href="#home" className="nav-logo">Esco<span>Flex</span></a>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
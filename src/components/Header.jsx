// Header.jsx
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header ${open ? "open" : ""}`}>
      <div className="header__inner">
        <div className="brand">
          <div className="brand__logo">
            {/* Logo do React */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React Logo"
              width="32"
              height="32"
            />
          </div>
          <span className="brand__text">Reactzinho</span>
        </div>

        <nav className="nav" aria-label="Navegação principal">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home">Início</a>
            </li>
            <li className="nav__item">
              <a href="#features">Recursos</a>
            </li>
            <li className="nav__item">
              <a href="#pricing">Planos</a>
            </li>
            <li className="nav__item">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>

        <button
          className="burger"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="burger__bar" />
          <span className="burger__bar" />
          <span className="burger__bar" />
        </button>
      </div>

      {/* Menu para telas pequenas */}
      <div className={`mobile-menu ${open ? "mobile-menu--visible" : ""}`}>
        <ul>
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#features">Recursos</a>
          </li>
          <li>
            <a href="#pricing">Planos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

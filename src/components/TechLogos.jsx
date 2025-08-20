// src/components/TechLogos.jsx
import reactLogo from "../assets/react.svg";

function TechLogos() {
  return (
    <div className="tech-logos">
      <h1>HTML + Tailwind + JavaScript + React</h1>
      <a
        href="https://developer.mozilla.org/docs/Web/HTML"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          className="logo html"
          alt="HTML logo"
        />
      </a>

      <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          className="logo tailwind"
          alt="Tailwind CSS logo"
        />
      </a>

      <a
        href="https://developer.mozilla.org/docs/Web/JavaScript"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          className="logo js"
          alt="JavaScript logo"
        />
      </a>

      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

export default TechLogos;

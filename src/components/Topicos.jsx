import "react";
import "./TopicsGrid.css";
export default function TopicsGrid() {
  const topics = [
    {
      title: "HTML",
      links: [
        { label: "Introdução ao HTML", url: "#" },
        { label: "Tags básicas", url: "#" },
        { label: "Formulários", url: "#" },
        { label: "Semântica", url: "#" },
      ],
    },
    {
      title: "Tailwind",
      links: [
        { label: "Configuração inicial", url: "#" },
        { label: "Classes utilitárias", url: "#" },
        { label: "Responsividade", url: "#" },
        { label: "Customização", url: "#" },
      ],
    },
    {
      title: "JavaScript",
      links: [
        { label: "Variáveis e Tipos", url: "#" },
        { label: "Funções", url: "#" },
        { label: "Eventos", url: "#" },
        { label: "DOM", url: "#" },
      ],
    },
    {
      title: "React",
      links: [
        { label: "Instalação", to: "/new-content" },
        { label: "Componentes", to: "/components-info" },
        { label: "Props e State", url: "#" },
        { label: "Hooks", url: "#" },
        { label: "Gerenciamento de Estado", url: "#" },
      ],
    },
  ];

  const shadowColors = {
    HTML: "rgba(240, 101, 41, 0.7)",
    Tailwind: "rgba(56, 189, 248, 0.7)",
    JavaScript: "rgba(247, 223, 30, 0.7)",
    React: "rgba(97, 218, 251, 0.7)",
  };

  return (
    <div className="topics-container">
      <h1>Tópicos de Estudo</h1>
      <div className="topics-grid">
        {topics.map((topic, index) => {
          const shadowColor = shadowColors[topic.title] || "rgba(0, 0, 0, 0.3)";

          return (
            <div
              key={index}
              className="topic-card"
              style={{
                backgroundColor: "transparent",
                boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${shadowColor}`;
                e.currentTarget.querySelector("h2").style.color = shadowColor; // muda cor do título
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 12px rgba(0, 0, 0, 0.2)";
                e.currentTarget.querySelector("h2").style.color = shadowColor; // mantém a cor original do título
              }}
            >
              <h2 style={{ color: shadowColor }}>{topic.title}</h2>
              <ul>
                {topic.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.to}>• {link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

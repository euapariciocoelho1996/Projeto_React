import "./ComponentsInfo.css";

export default function PropsStateInfo() {
  return (
    <section className="components-container">
      <h1 className="components-title">Dica Extra: Usando Variáveis CSS</h1>

      {/* NOVO CARD */}
      <div className="component-card">
        <p>
          Você pode criar variáveis globais de cores, fontes e espaçamentos no
          CSS e usá-las em seus componentes React. Isso deixa o projeto mais
          organizado e fácil de manter.
        </p>
        <p> Exemplo usando CSS Modules:</p>
        <div className="code-block">
          <pre>
            <code>
              {/* Arquivo Heading.module.css */}
              :root {"{"}
              {"\n  "}--primary-color: #3498db;
              {"\n}"}
              {"\n\n"}
              .heading {"{"}
              {"\n  "}font-size: 2rem;
              {"\n  "}color: var(--primary-color);
              {"\n}"}
            </code>
          </pre>
        </div>
        <p>Exemplo no componente React:</p>
        <div className="code-block">
          <pre>
            <code>
              <span className="code-keyword">import</span> styles{" "}
              <span className="code-keyword">from</span>{" "}
              <span className="code-string">
                &quot;./Heading.module.css&quot;
              </span>
              {"\n\n"}
              <span className="code-keyword">function</span>{" "}
              <span className="code-function">Header</span>() {"{"}
              {"\n  "}
              <span className="code-keyword">return</span> {"("}
              {"\n    "}
              {"<header>"}
              {"\n      "}
              {"<h1 className={styles.heading}>Pomodoro Timer</h1>"}
              {"\n    "}
              {"</header>"}
              {"\n  "}
              {")"};{"\n"}
              {"}"}
              {"\n\n"}
              <span className="code-keyword">export default</span> Header;
            </code>
          </pre>
        </div>
        <p>
          💡 Dica: Crie um arquivo <strong>theme.css</strong> com suas variáveis
          globais e importe-o no <strong>index.js</strong> para usar em toda a
          aplicação.
        </p>
      </div>

      {/* Card 5 */}
      <div className="video-card">
        <h2>Aprenda Mais</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/keEUn64Ceig?si=x-HIWkkKA7uU82s0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

import "./ComponentsInfo.css";

export default function HooksInfo() {
  return (
    <section className="components-container">
      <h1 className="components-title">React Hooks</h1>
      <p className="components-subtitle">
        Hooks são funções que permitem usar estado e outras funcionalidades do
        React em componentes funcionais.
      </p>

      <div className="components-grid">
        {/* Card 1 */}
        <div className="component-card">
          <h2>👀 O que são Hooks?</h2>
          <p>
            Hooks são funções especiais do React que permitem “ligar” recursos
            como estado, efeitos colaterais e contexto em componentes
            funcionais.
          </p>
          <div className="code-block">
            <pre>
              <code>
                {`import React, { useState } from 'react';

function Exemplo() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}`}
              </code>
            </pre>
          </div>
        </div>

        {/* Card 2 */}
        <div className="component-card">
          <h2>⚡ Tipos de Hooks</h2>
          <ul>
            <li>
              <strong>useState:</strong> Gerencia estado local em componentes
              funcionais.
            </li>
            <li>
              <strong>useEffect:</strong> Executa efeitos colaterais, como
              chamadas a APIs ou assinaturas de eventos.
            </li>
            <li>
              <strong>useContext:</strong> Permite acessar o contexto do React.
            </li>
            <li>
              <strong>useRef:</strong> Cria referências mutáveis para elementos
              DOM ou valores persistentes.
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="component-card">
          <h2>🎯 Vantagens</h2>
          <ul>
            <li>Evita classes complexas</li>
            <li>Facilita reuso de lógica entre componentes</li>
            <li>Melhora legibilidade e organização do código</li>
          </ul>
          <p>
            Hooks tornam componentes funcionais poderosos, permitindo manipular{" "}
            <span className="highlight">estado</span> e{" "}
            <span className="highlight">efeitos colaterais</span>.
          </p>
        </div>

        {/* Card 4 */}
        <div className="component-card">
          <h2>😁 Exemplo Prático</h2>
          <p>
            Um contador usando <code className="inline-code">useState</code> e{" "}
            <code className="inline-code">useEffect</code>:
          </p>
          <div className="code-block">
            <pre>
              <code>
                {`import React, { useState, useEffect } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(\`Contador atualizado: \${count}\`);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Contar: {count}
    </button>
  );
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="video-card">
        <h2>Aprenda Mais</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/E-gIg2dXWv4?si=TbpQ_zJj3TgGX6o2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

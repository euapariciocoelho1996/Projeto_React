import "./ComponentsInfo.css";

export default function PropsStateInfo() {
  return (
    <section className="components-container">
      <h1 className="components-title">Props e State em React</h1>
      <p className="components-subtitle">
        Aprenda a passar dados entre componentes e gerenciar o estado interno.
      </p>

      <div className="components-grid">
        {/* Card 1 */}
        <div className="component-card">
          <h2>👀 O que são Props?</h2>
          <p>
            <strong>Props</strong> (propriedades) são dados que você passa de um
            componente pai para um componente filho. Elas são imutáveis dentro
            do componente filho.
          </p>
          <div className="code-block">
            <pre>
              <code>
                <span className="code-keyword">function</span>{" "}
                <span className="code-function">Greeting</span>({"{"}
                <span className="code-prop">nome</span>
                {"}"}) {"{"}
                {"\n  "}
                <span className="code-keyword">return</span> {"("}
                {"\n    "}
                <span className="code-tag">&lt;h1&gt;</span>
                Olá, {"{"}
                <span className="code-prop">nome</span>
                {"}"}!<span className="code-tag">&lt;/h1&gt;</span>
                {"\n  "}
                {")"};{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        {/* Card 2 */}
        <div className="component-card">
          <h2>⚡ Exemplo de Uso de Props</h2>
          <p>Passamos os dados do componente pai para o filho via atributos.</p>
          <div className="code-block">
            <pre>
              <code>
                {'<Greeting nome="João" />'}
                {"\n"}
                {'<Greeting nome="Maria" />'}
              </code>
            </pre>
          </div>
        </div>

        {/* Card 3 */}
        <div className="component-card">
          <h2>🎯 O que é State?</h2>
          <p>
            <strong>State</strong> é uma forma de armazenar dados que podem
            mudar dentro de um componente. Ao atualizar o state, o componente
            re-renderiza automaticamente.
          </p>
          <div className="code-block">
            <pre>
              <code>
                <span className="code-keyword">import</span> React, {"{"}
                <span className="code-keyword">useState</span> {"}"}
                <span className="code-keyword">from</span>{" "}
                <span className="code-string">react</span>;{"\n"}
                <span className="code-keyword">function</span>{" "}
                <span className="code-function">Counter</span>() {"{"}
                {"\n  "}
                <span className="code-keyword">const</span> [{"{"}
                <span className="code-prop">count</span>,
                <span className="code-prop">setCount</span>
                {"}"}] =<span className="code-keyword">useState</span>(0);
                {"\n\n"}
                {"  "}
                <span className="code-keyword">return</span> {"("}
                {"\n    "}
                <span className="code-tag">&lt;div&gt;</span>
                {"\n      "}
                <span className="code-tag">&lt;p&gt;</span>
                Contador: {"{"}
                <span className="code-prop">count</span>
                {"}"}
                <span className="code-tag">&lt;/p&gt;</span>
                {"\n      "}
                <span className="code-tag">&lt;button&gt;</span>
                {"{"}
                <span className="code-prop">setCount(count + 1)</span>
                {"}"}
                Incrementar
                <span className="code-tag">&lt;/button&gt;</span>
                {"\n    "}
                <span className="code-tag">&lt;/div&gt;</span>
                {"\n  "}
                {")"};{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        {/* Card 4 */}
        <div className="component-card">
          <h2>😁 Props x State</h2>
          <ul>
            <li>Props são imutáveis e vêm de componentes pais.</li>
            <li>State é mutável e gerenciado dentro do próprio componente.</li>
            <li>Ambos permitem que a interface reaja a mudanças de dados.</li>
          </ul>
          <p>
            Você pode combinar <span className="highlight">props</span> e{" "}
            <span className="highlight">state</span> para criar componentes
            dinâmicos e reutilizáveis.
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
      </div>
    </section>
  );
}

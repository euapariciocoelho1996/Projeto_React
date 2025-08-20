import "./ComponentsInfo.css";

export default function ComponentsInfo() {
  return (
    <section className="components-container">
      <h1 className="components-title">React Components</h1>
      <p className="components-subtitle"></p>

      <div className="components-grid">
        {/* Card 1 */}
        <div className="component-card">
          <h2>👀 O que são?</h2>
          <p>
            Um componente React é uma função ou classe que retorna elementos JSX
            representando parte da interface. Eles permitem dividir o projeto em
            partes menores.
          </p>
          <div className="code-block">
            <pre>
              <code>
                <span className="code-keyword">function</span>{" "}
                <span className="code-function">HelloWorld</span>() {"{"}
                {"\n"}
                {"  "}
                <span className="code-keyword">return</span> {"("}
                {"\n"}
                {"    "}
                <span className="code-tag">&lt;h1&gt;</span>
                Olá, mundo!
                <span className="code-tag">&lt;/h1&gt;</span>
                {"\n"}
                {"  "}
                {")"};{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        {/* Card 2 */}
        <div className="component-card">
          <h2>⚡ Tipos de Componentes</h2>
          <p>Existem dois tipos principais de componentes em React:</p>
          <ul>
            <li>
              <strong>Funcionais:</strong> Simples, modernos e utilizam{" "}
              <code className="inline-code">Hooks</code>.
            </li>
            <li>
              <strong>De Classe:</strong> Mais antigos, usados em projetos
              legados.
            </li>
          </ul>
          <div className="code-block">
            <pre>
              <code>
                <span className="code-keyword">import</span> React{" "}
                <span className="code-keyword">from</span>{" "}
                <span className="code-string">react</span>;{"\n"}
                {"\n"}
                {"  "}
                <span className="code-keyword">return</span> {"("}
                {"\n"}
                {"    "}
                <span className="code-tag">&lt;button&gt;</span>
                Clique aqui!
                <span className="code-tag">&lt;/button&gt;</span>
                {"\n"}
                {"  "}
                {")"};{"\n"}
                {"}"}
                {"\n"}
                {"\n"}
                <span className="code-keyword">export default</span> Button;
              </code>
            </pre>
          </div>
        </div>

        {/* Card 3 */}
        <div className="component-card">
          <h2>🎯 Vantagens</h2>
          <ul>
            <li>Reutilização de código</li>
            <li>Maior organização</li>
            <li>Melhor performance</li>
          </ul>
          <p>
            Além disso, componentes podem se comunicar usando{" "}
            <span className="highlight">props</span> e{" "}
            <span className="highlight">estado</span>.
          </p>
          <div className="code-block">
            <pre>
              <code>
                <span className="code-keyword">function</span>{" "}
                <span className="code-function">Card</span>({"{"}
                <span className="code-prop">titulo</span>,
                <span className="code-prop">descricao</span>
                {"}"}) {"{"}
                {"\n"}
                {"  "}
                <span className="code-keyword">return</span> {"("}
                {"\n"}
                {"    "}
                <span className="code-tag">&lt;div&gt;</span>
                {"\n"}
                {"      "}
                <span className="code-tag">&lt;h2&gt;</span>
                {"{"}
                <span className="code-prop">titulo</span>
                {"}"}
                <span className="code-tag">&lt;/h2&gt;</span>
                {"\n"}
                {"      "}
                <span className="code-tag">&lt;p&gt;</span>
                {"{"}
                <span className="code-prop">descricao</span>
                {"}"}
                <span className="code-tag">&lt;/p&gt;</span>
                {"\n"}
                {"    "}
                <span className="code-tag">&lt;/div&gt;</span>
                {"\n"}
                {"  "}
                {")"};{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        <div className="component-card">
          <h2>😁 Exemplo de Componente</h2>
          <ul>
            <li>Exibe informações de usuário</li>
            <li>Pode ser reutilizado em diferentes páginas</li>
            <li>Facilita a manutenção do código</li>
          </ul>
          <p>
            Podemos passar dados para o componente usando{" "}
            <span className="highlight">props</span>.
          </p>
          <div className="code-block">
            <pre>
              <code>
                <span className="code-keyword">function</span>{" "}
                <span className="code-function">UserProfile</span>({"{"}
                <span className="code-prop">nome</span>,
                <span className="code-prop">idade</span>
                {"}"}) {"{"}
                {"\n"}
                {"  "}
                <span className="code-keyword">return</span> {"("}
                {"\n"}
                {"    "}
                <span className="code-tag">&lt;div&gt;</span>
                {"\n"}
                {"      "}
                <span className="code-tag">&lt;h2&gt;</span>
                {"{"}
                <span className="code-prop">nome</span>
                {"}"}
                <span className="code-tag">&lt;/h2&gt;</span>
                {"\n"}
                {"      "}
                <span className="code-tag">&lt;p&gt;</span>
                {"Idade: "}
                {"{"}
                <span className="code-prop">idade</span>
                {"}"}
                <span className="code-tag">&lt;/p&gt;</span>
                {"\n"}
                {"    "}
                <span className="code-tag">&lt;/div&gt;</span>
                {"\n"}
                {"  "}
                {")"};{"\n"}
                {"}"}
              </code>
            </pre>
          </div>

          <h3>Exemplo de Uso:</h3>
          <div className="code-block">
            <pre>
              <code>
                {'<UserProfile nome="João" idade={30} />'}
                {"\n"}
                {'<UserProfile nome="Maria" idade={25} />'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

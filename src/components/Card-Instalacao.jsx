// Componente único que exibe os cards
import "./Card-instalacao.css";

const CardsGridInstalacao = () => {
  return (
    <div className="cards-grid">
      {/* Card 1 */}
      <div className="card">
        <h2>
          <img
            className="card-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            alt="Node.js Logo"
          />
          Instale o <strong className="node">Node.js</strong>
        </h2>
        <p>
          Para começar a desenvolver, é necessário instalar o{" "}
          <strong className="node">Node.js</strong> no seu computador. Baixe a
          versão mais recente no site oficial:{" "}
          <a
            href="https://www.nodejs.tech/pt-br/download"
            target="_blank"
            rel="noopener noreferrer"
          >
            nodejs.tech/pt-br/download
          </a>
          .
        </p>
      </div>

      {/* Card 2 */}
      <div className="card">
        <h2>
          <img
            className="card-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            alt="VSCode Logo"
          />
          Instale o <strong className="vscode">VSCode</strong>
        </h2>
        <p>
          O <strong className="vscode">Visual Studio Code</strong> é um editor
          leve e poderoso, perfeito para desenvolver em várias linguagens. Baixe
          a versão mais recente no site oficial:{" "}
          <a
            href="https://code.visualstudio.com/download"
            target="_blank"
            rel="noopener noreferrer"
          >
            code.visualstudio.com/download
          </a>
          .
        </p>
      </div>

      {/* Card 3 */}
      <div className="card">
        <h2>
          <svg
            className="card-icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path
              fill="#ccc"
              d="M34.826,29.763l2.455-1.121l-2.706-7.077l-3.097-0.555l-4.704-5.92l-0.639-4.13L20.72,7.83	l-0.638,3.397l-4.704,0.488L12.28,8.69l-2.71,3.96l2.46,3.95v6.39l-2.46,1.12l2.71,7.08l3.1,0.55l4.7,5.92l0.64,4.14l5.41,3.12	l0.643-3.392l4.707-0.488l3.09,3.02l2.71-3.952l-2.455-3.955V29.763z M23.427,31.684l-3.907-4.908l0-5.308l3.907-0.397l3.903,4.909	l0.004,5.306L23.427,31.684z"
            ></path>
          </svg>
          Extensões Essenciais no VSCode
        </h2>
        <p>
          Para melhorar sua produtividade e qualidade de código, instale as
          extensões:{" "}
          <strong className="tailwind">Tailwind CSS IntelliSense</strong>,{" "}
          <strong className="prettier">Prettier</strong> e{" "}
          <strong className="eslint">ESLint</strong>.
        </p>
        <p>
          <strong>Passo a passo para configurar Prettier e ESLint:</strong>
        </p>
        <ol>
          <li>
            No VSCode, abra as <strong>Configurações (Settings)</strong>.
          </li>
          <li>
            Procure por <strong>Format On Save</strong> e habilite a opção.
          </li>
          <li>
            Em <strong>Default Formatter</strong>, selecione{" "}
            <strong>Prettier</strong>.
          </li>
          <li>
            Certifique-se de que a extensão <strong>ESLint</strong> está ativa
            para validar o código em tempo real.
          </li>
          <li>
            Agora, ao salvar, o Prettier formata e o ESLint verifica problemas
            automaticamente.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CardsGridInstalacao;

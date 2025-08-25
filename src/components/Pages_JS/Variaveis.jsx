import "./Variaveis.css";

const VariaveisJS = () => {
  return (
    <div className="variaveis">
      <h1>Variáveis e Tipos em JavaScript</h1>
      <p>
        Em JavaScript, variáveis são usadas para armazenar dados que podem ser
        manipulados e utilizados ao longo do código. Podemos declarar variáveis
        usando <span className="inline-code">var</span>,{" "}
        <span className="inline-code">let</span> e{" "}
        <span className="inline-code">const</span>. Cada uma tem regras
        diferentes de escopo e mutabilidade:
      </p>

      <ul>
        <li>
          <strong className="inline-code">var:</strong> Escopo global ou de
          função. Pode ser redeclarada.
        </li>
        <li>
          <strong className="inline-code">let:</strong> Escopo de bloco. Pode
          ser atualizada, mas não redeclarada no mesmo bloco.
        </li>
        <li>
          <strong className="inline-code">const:</strong> Escopo de bloco. Não
          pode ser atualizada nem redeclarada. Serve para valores constantes.
        </li>
      </ul>

      <h2>Tipos de Dados Primitivos</h2>
      <p>
        JavaScript possui alguns tipos de dados primitivos, que são os mais
        comuns para armazenar informações simples:
      </p>

      <div className="code-block">
        <pre>
          <code>
            <span className="code-comment">
              {"// String: texto entre aspas"}
            </span>
            {"\n"}const nome ={" "}
            <span className="code-string">{"// Francisco"}</span>;{"\n"}
            console.log(nome);{" "}
            <span className="code-comment">{'// "Francisco"'}</span>
            {"\n\n"}
            <span className="code-comment">
              {"// Number: números inteiros ou decimais"}
            </span>
            {"\n"}let idade = <span className="code-string">{"30"}</span>;{"\n"}
            let altura = <span className="code-string">{"1.75"}</span>;{"\n"}
            console.log(idade, altura);{" "}
            <span className="code-comment">{"// 30 1.75"}</span>
            {"\n\n"}
            <span className="code-comment">
              {"// Boolean: verdadeiro ou falso"}
            </span>
            {"\n"}let ativo = <span className="code-keyword">true</span>;{"\n"}
            console.log(ativo);{" "}
            <span className="code-comment">{"// true"}</span>
            {"\n\n"}
            <span className="code-comment">
              {"// Null: ausência intencional de valor"}
            </span>
            {"\n"}let vazio = <span className="code-keyword">null</span>;{"\n"}
            console.log(vazio);{" "}
            <span className="code-comment">{"// null"}</span>
            {"\n\n"}
            <span className="code-comment">
              {"// Undefined: variável declarada sem valor"}
            </span>
            {"\n"}let indefinido;{"\n"}
            console.log(indefinido);{" "}
            <span className="code-comment">{"// undefined"}</span>
          </code>
        </pre>
      </div>

      <h2>Tipos de Dados Compostos</h2>
      <p>
        Além dos tipos primitivos, JavaScript permite armazenar múltiplos
        valores em estruturas mais complexas:
      </p>

      <div className="code-block">
        <pre>
          <code>
            <span className="code-comment">{"// Array: lista de valores"}</span>
            {"\n"}let frutas = [<span className="code-string">{"Maçã"}</span>,{" "}
            <span className="code-string">{"Banana"}</span>,{" "}
            <span className="code-string">{"Laranja"}</span>];{"\n"}
            console.log(frutas);{" "}
            <span className="code-comment">
              {'// ["Maçã", "Banana", "Laranja"]'}
            </span>
            {"\n\n"}
            <span className="code-comment">
              {"// Object: coleção de pares chave-valor"}
            </span>
            {"\n"}const pessoa = {"{"}
            nome: <span className="code-string">{"Ana"}</span>, idade:{" "}
            <span className="code-string">28</span>, ativo:{" "}
            <span className="code-keyword">true</span>
            {"}"};{"\n"}
            console.log(pessoa);{" "}
            <span className="code-comment">
              {"//"}{" "}
              {`const pessoa = {
  nome: 'Ana',
  idade: 28,
  ativo: true
};
console.log(pessoa); // {nome: "Ana", idade: 28, ativo: true}`}
            </span>
          </code>
        </pre>
      </div>

      <h2>Resumo</h2>
      <ul>
        <li>
          Use <span className="inline-code">let</span> para variáveis que mudam
          de valor.
        </li>
        <li>
          Use <span className="inline-code">const</span> para valores que não
          mudam.
        </li>
        <li>
          Tipos primitivos: <span className="inline-code">String</span>,{" "}
          <span className="inline-code">Number</span>,{" "}
          <span className="inline-code">Boolean</span>,{" "}
          <span className="inline-code">Null</span>,{" "}
          <span className="inline-code">Undefined</span>.
        </li>
        <li>
          Tipos compostos: <span className="inline-code">Array</span> e{" "}
          <span className="inline-code">Object</span>.
        </li>
      </ul>
    </div>
  );
};

export default VariaveisJS;

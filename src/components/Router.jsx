import "./ComponentsInfo.css";

export default function RouterDomLesson() {
  return (
    <section className="components-container">
      <h1 className="components-title">React Router DOM</h1>
      <p className="components-subtitle">
        Nesta aula vamos aprender como configurar e utilizar o{" "}
        <span className="highlight">react-router-dom</span> para criar rotas no
        nosso projeto React.
      </p>

      <div className="components-grid">
        {/* Card 1 */}
        <div className="component-card">
          <h2>⚡ Exemplo de Uso</h2>
          <p>
            Abaixo temos um exemplo de como configurar o{" "}
            <span className="highlight">BrowserRouter</span>,{" "}
            <span className="highlight">Routes</span> e{" "}
            <span className="highlight">Route</span>:
          </p>
          <div className="code-block">
            <pre>
              <code>
                {`import TechLogos from "./components/TechLogos";
import CardsGrid from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopicsGrid from "./components/Topicos";
import NewContent from "./components/NewContent";
import ComponentsInfo from "./components/ComponentsInfo";
import PropsStateInfo from "./components/PropsStateInfo";
import HooksInfo from "./components/Hooks";
import RouterDomLesson from "./components/Router";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Fixo no topo */}
      <Routes>
        <Route path="/" element={
          <>
            <TechLogos />
            <CardsGrid />
            <TopicsGrid />
          </>
        } />
        <Route path="/new-content" element={<NewContent />} />
        <Route path="/components-info" element={<ComponentsInfo />} />
        <Route path="/props-state-info" element={<PropsStateInfo />} />
        <Route path="/hooks-info" element={<HooksInfo />} />
        <Route path="/router-info" element={<RouterDomLesson />} />
      </Routes>
      <Footer /> {/* Fixo no fim */}
    </BrowserRouter>
  );
}

export default App;`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

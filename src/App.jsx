import TechLogos from "./components/TechLogos";
import CardsGrid from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopicsGrid from "./components/Topicos";
import NewContent from "./components/NewContent";
import ComponentsInfo from "./components/ComponentsInfo";
import PropsStateInfo from "./components/PropsStateInfo";
import HooksInfo from "./components/Hooks";
import RouterDomLesson from "./components/Router";
import CompactSection from "./components/CompactSection";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Fixo no topo */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TechLogos />

              <CardsGrid />
              <TopicsGrid />
              <CompactSection />
            </>
          }
        />
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

export default App;

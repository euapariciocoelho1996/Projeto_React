import TechLogos from "./components/TechLogos";
import CardsGrid from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopicsGrid from "./components/Topicos";
import NewContent from "./components/NewContent";
import ComponentsInfo from "./components/ComponentsInfo";
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
            </>
          }
        />
        <Route path="/new-content" element={<NewContent />} />
        <Route path="/components-info" element={<ComponentsInfo />} />
      </Routes>
      <Footer /> {/* Fixo no fim */}
    </BrowserRouter>
  );
}

export default App;

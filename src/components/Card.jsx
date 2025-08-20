// Componente único que exibe os cards
import "./CardsGrid.css";

const CardsGrid = () => {
  return (
    <div className="cards-grid">
      {/* Card 1 */}
      <div className="card">
        <h2>Aprenda do Zero</h2>
        <p>
          Comece entendendo a base da web com{" "}
          <strong className="html">HTML</strong> e estilizações modernas com{" "}
          <strong className="Tail">Tailwind CSS</strong>.
        </p>
      </div>

      {/* Card 2 */}
      <div className="card">
        <h2>Avance no Frontend</h2>
        <p>
          Domine a lógica com <strong className="js">JavaScript</strong> e
          construa interfaces incríveis com{" "}
          <strong className="rc">React</strong>.
        </p>
      </div>
    </div>
  );
};

export default CardsGrid;

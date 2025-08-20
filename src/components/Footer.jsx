import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <h2>MinhaMarca</h2>
        </div>
        <ul className="footer__links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} MinhaMarca. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

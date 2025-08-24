import "./Footer.css";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <h2>Reactizinho+</h2>
        </div>
        <ul className="footer__links">
          <li>
            <a
              href="https://www.instagram.com/euapariciocoelho_/"
              target="_blank"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/franciscoaparicio/"
              target="_blank"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/euapariciocoelho1996" target="_blank">
              <Github />
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

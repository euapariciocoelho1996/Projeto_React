import "./CompactSection.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
export default function CompactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // duração da animação em ms
  }, []);
  return (
    <section className="compact-section">
      <h2 className="section-title"></h2>
      <div className="section-card">
        <div>
          <h2 data-aos="fade-down-right" style={{ textAlign: "center" }}>
            SAIBA <span>MAIS!</span>
          </h2>
          <p className="section-description" data-aos="fade-up-left">
            Aprofunde seus conhecimentos com este vídeo sobre React!
          </p>
        </div>
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NhUr8cwDiiM?si=ofde4v4CjY63TSrm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

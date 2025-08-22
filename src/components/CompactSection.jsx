import "./CompactSection.css";

// eslint-disable-next-line react/prop-types
export default function CompactSection() {
  return (
    <section className="compact-section">
      <h2 className="section-title"></h2>
      <div className="section-card">
        <div>
          <h2>
            SAIBA <span>MAIS!</span>
          </h2>
          <p className="section-description">
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

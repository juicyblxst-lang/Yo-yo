import { useState } from 'react';
import { siteConfig } from './site.config';

function DownloadLink({ className = '' }) {
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    setStarted(true);
    window.setTimeout(() => setStarted(false), 1600);
  };

  return (
    <a
      className={`download-link ${className}`}
      href={siteConfig.pdf}
      download={siteConfig.pdfDownloadName}
      onClick={handleClick}
      aria-label={`${siteConfig.cta} — download PDF`}
    >
      <span>{started ? 'Downloading…' : siteConfig.cta}</span>
      <span className="arrow" aria-hidden="true">→</span>
    </a>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <button className="icon-button menu-button" type="button" aria-label="Menu">
          <span />
          <span />
          <span />
        </button>

        <div className="brand-lockup" aria-label={siteConfig.brand}>
          <img
            className="brand-mark"
            src={siteConfig.logoImage}
            alt=""
          />
          <span>{siteConfig.headerLabel}</span>
        </div>

        <button className="icon-button search-button" type="button" aria-label="Search">
          <span className="search-ring" aria-hidden="true" />
        </button>
      </header>

      <section className="hero" aria-label={`${siteConfig.brand} artwork`}>
        <img src={siteConfig.heroImage} alt={siteConfig.heroAlt} />
        <div className="hero-overlay" />
      </section>

      <main className="content">
        <div className="content-copy">
          <p className="eyebrow">{siteConfig.eyebrow}</p>
          <h1>{siteConfig.title}</h1>
          <p className="description">{siteConfig.description}</p>

          <DownloadLink className="inline-cta" />
        </div>

        <DownloadLink className="bottom-cta" />
      </main>
    </div>
  );
}

export default App;

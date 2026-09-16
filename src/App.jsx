import { useState } from 'react';
import { siteConfig } from './site.config';

function DocumentLink({ className = '' }) {
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    setStarted(true);
    window.setTimeout(() => setStarted(false), 1600);
  };

  return (
    <a
      className={`document-link ${className}`}
      href={siteConfig.pdf}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      aria-label={`${siteConfig.cta} — open Lighter whitepaper`}
    >
      <span>{started ? 'Opening…' : siteConfig.cta}</span>
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
          <img className="brand-logo" src={siteConfig.logoImage} alt="Lighter" />
          <span>{siteConfig.headerLabel}</span>
        </div>

        <button className="icon-button search-button" type="button" aria-label="Search">
          <span className="search-ring" aria-hidden="true" />
        </button>
      </header>

      <section className="hero" aria-label={`${siteConfig.brand} artwork`}>
        <img src={siteConfig.heroImage} alt={siteConfig.heroAlt} />
      </section>

      <main className="content">
        <div className="content-copy">
          <p className="eyebrow">{siteConfig.eyebrow}</p>
          <h1>{siteConfig.title}</h1>
          <p className="description">{siteConfig.description}</p>

          <DocumentLink className="inline-cta" />
        </div>

        <DocumentLink className="bottom-cta" />
      </main>
    </div>
  );
}

export default App;

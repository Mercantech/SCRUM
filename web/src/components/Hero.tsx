import { site } from "../content/scrum"

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__atmosphere" aria-hidden="true" />
      <nav className="hero__nav">
        <a className="hero__brand-link" href="https://www.mercantec.dk/" rel="noreferrer">
          <img
            src="/mercantec-logo.svg"
            alt="Mercantec"
            className="hero__logo"
            width={160}
            height={46}
          />
        </a>
        <span className="hero__org">{site.org}</span>
      </nav>
      <div className="hero__content">
        <p className="hero__brand">{site.brand}</p>
        <h1 className="hero__title">{site.tagline}</h1>
        <p className="hero__lede">{site.intro}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#scrum">
            Centrale dele
          </a>
          <a className="btn btn--ghost" href="#forloeb">
            H1–H6
          </a>
        </div>
      </div>
    </header>
  )
}

import { site } from "../content/scrum"
import type { Theme } from "../hooks/useTheme"
import { ThemeToggle } from "./ThemeToggle"

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

export function Hero({ theme, onToggleTheme }: Props) {
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
        <div className="hero__nav-end">
          <span className="hero__org">{site.org}</span>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
      <div className="hero__content">
        <p className="hero__brand">{site.brand}</p>
        <h1 className="hero__title">{site.tagline}</h1>
        <p className="hero__lede">{site.intro}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#hvad-er-scrum">
            Start fra nul
          </a>
          <a className="btn btn--ghost" href="#maalpinde">
            Målpinde 6239 & 6278
          </a>
        </div>
      </div>
    </header>
  )
}

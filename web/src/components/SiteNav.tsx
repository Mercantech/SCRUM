import { nav } from "../content/scrum"
import type { Theme } from "../hooks/useTheme"
import { ThemeToggle } from "./ThemeToggle"

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

export function SiteNav({ theme, onToggleTheme }: Props) {
  return (
    <nav className="site-nav" aria-label="Sektionsnavigation">
      <div className="site-nav__inner">
        <div className="site-nav__links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </nav>
  )
}

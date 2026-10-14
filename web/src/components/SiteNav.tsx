import { nav } from "../content/scrum"

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Sektionsnavigation">
      <div className="site-nav__inner">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

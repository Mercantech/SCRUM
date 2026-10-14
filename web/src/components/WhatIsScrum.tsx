import { officialLinks, whatIsScrum } from "../content/scrum"
import { Reveal } from "./Reveal"

export function WhatIsScrum() {
  return (
    <section id="hvad-er-scrum" className="section">
      <Reveal>
        <p className="section__eyebrow">Start her</p>
        <h2 className="section__title">Hvad er Scrum — helt kort?</h2>
        <p className="section__lede">{whatIsScrum.plain}</p>
      </Reveal>

      <div className="split">
        <Reveal>
          <ul className="check-list">
            {whatIsScrum.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <aside className="callout">
            <h3>{whatIsScrum.analogy.title}</h3>
            <p>{whatIsScrum.analogy.body}</p>
          </aside>
        </Reveal>
      </div>

      <Reveal>
        <div className="official">
          <h3>Officielle kilder</h3>
          <ul>
            {officialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
                <span>{link.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

import { maalPinde } from "../content/scrum"
import { Reveal } from "./Reveal"

export function Maalpinde() {
  return (
    <section id="maalpinde" className="section section--tint">
      <Reveal>
        <p className="section__eyebrow">Dækning</p>
        <h2 className="section__title">Målpinde — 6239 & 6278</h2>
        <p className="section__lede">
          Brug listen som tjekliste. Hvert punkt linker til sektionen på siden,
          hvor emnet forklares.
        </p>
      </Reveal>

      <div className="maal-grid">
        {maalPinde.map((fag) => (
          <Reveal key={fag.code}>
            <article className="maal">
              <header>
                <span className="maal__code">{fag.code}</span>
                <h3>{fag.title}</h3>
                <p>{fag.weeks}</p>
              </header>
              <ol>
                {fag.items.map((item) => (
                  <li key={item.id}>
                    <span className="maal__id">#{item.id}</span>
                    <p>{item.text}</p>
                    <div className="maal__links">
                      {item.anchors.map((a) => (
                        <a key={a} href={a}>
                          Se sektion
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

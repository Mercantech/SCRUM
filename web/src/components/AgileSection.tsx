import { agileManifesto, agileTools } from "../content/scrum"
import { Reveal } from "./Reveal"

export function AgileSection() {
  return (
    <section id="agile" className="section section--tint">
      <Reveal>
        <p className="section__eyebrow">6278 · Agile</p>
        <h2 className="section__title">Agile-manifestet</h2>
        <p className="section__lede">
          {agileManifesto.intro}{" "}
          <a href="https://agilemanifesto.org/" target="_blank" rel="noreferrer">
            agilemanifesto.org
          </a>
        </p>
      </Reveal>

      <div className="manifesto">
        {agileManifesto.values.map((v, i) => (
          <Reveal key={v.left} delay={i * 50}>
            <article className="manifesto__row">
              <div className="manifesto__pair">
                <strong>{v.left}</strong>
                <span className="manifesto__over">frem for</span>
                <em>{v.right}</em>
              </div>
              <p>{v.why}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="footnote">{agileManifesto.footnote}</p>

      <div id="agile-principper" className="stack">
        <Reveal>
          <h3 className="stack__heading">12 Agile-principper (kort)</h3>
          <p className="section__lede section__lede--tight">
            Den fulde tekst findes på{" "}
            <a
              href="https://agilemanifesto.org/principles.html"
              target="_blank"
              rel="noreferrer"
            >
              agilemanifesto.org/principles
            </a>
            .
          </p>
        </Reveal>
        <ol className="principle-grid">
          {agileManifesto.principlesShort.map((p, i) => (
            <Reveal key={p} delay={(i % 4) * 40}>
              <li>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{p}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <div id="agile-redskaber" className="stack">
        <Reveal>
          <h3 className="stack__heading">Almindelige Agile-redskaber</h3>
        </Reveal>
        <div className="chip-grid">
          {agileTools.map((t, i) => (
            <Reveal key={t.name} delay={i * 40}>
              <article className="chip">
                <h4>{t.name}</h4>
                <p>{t.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

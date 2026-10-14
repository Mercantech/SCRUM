import { requirements } from "../content/scrum"
import { Reveal } from "./Reveal"

export function Requirements() {
  return (
    <section id="krav" className="section section--tint">
      <Reveal>
        <p className="section__eyebrow">6239 · IT-kravsspecifikation</p>
        <h2 className="section__title">Fra behov til krav</h2>
        <p className="section__lede">{requirements.intro}</p>
      </Reveal>

      <div className="method-grid">
        {requirements.methods.map((m, i) => (
          <Reveal key={m.name} delay={i * 50}>
            <article className="method">
              <h3>{m.name}</h3>
              <p className="method__visual">{m.visual}</p>
              <p>{m.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <article className="usecase">
          <h3>{requirements.useCaseExample.title}</h3>
          <div className="usecase__meta">
            <span>
              Aktør: <strong>{requirements.useCaseExample.actor}</strong>
            </span>
            <span>
              Mål: <strong>{requirements.useCaseExample.goal}</strong>
            </span>
          </div>
          <div className="usecase__cols">
            <div>
              <h4>Hovedforløb</h4>
              <ol>
                {requirements.useCaseExample.main.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
            <div>
              <h4>Alternative forløb</h4>
              <ul>
                {requirements.useCaseExample.alt.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Reveal>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">Kravspec i tre trin</h3>
        </Reveal>
        <div className="steps">
          {requirements.specSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="step">
                <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="accepttest" className="stack">
        <Reveal>
          <article className="accept">
            <h3>{requirements.acceptTest.title}</h3>
            <p>{requirements.acceptTest.body}</p>
            <div className="accept__box">
              <p className="accept__label">Eksempel (Given / When / Then)</p>
              <ol>
                {requirements.acceptTest.example.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>
          </article>
        </Reveal>
      </div>

      <div id="uml" className="stack">
        <Reveal>
          <h3 className="stack__heading">{requirements.uml.title}</h3>
          <p className="section__lede section__lede--tight">{requirements.uml.body}</p>
        </Reveal>
        <div className="uml-visual" aria-hidden="true">
          <div className="uml-actor">Elev</div>
          <div className="uml-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="uml-cases">
            <span>Login</span>
            <span>Opret opgave</span>
            <span>Se liste</span>
          </div>
          <div className="uml-system">Studie-app</div>
        </div>
        <div className="chip-grid">
          {requirements.uml.types.map((t, i) => (
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

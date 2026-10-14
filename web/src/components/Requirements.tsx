import { useState } from "react"
import { requirements } from "../content/scrum"
import { Reveal } from "./Reveal"

export function Requirements() {
  const [method, setMethod] = useState(0)
  const [specStep, setSpecStep] = useState(0)
  const [umlType, setUmlType] = useState(0)
  const currentMethod = requirements.methods[method]
  const currentSpec = requirements.specSteps[specStep]
  const currentUml = requirements.uml.types[umlType]

  return (
    <section id="krav" className="section section--tint">
      <Reveal>
        <p className="section__eyebrow">6239 · IT-kravsspecifikation</p>
        <h2 className="section__title">Fra behov til krav</h2>
        <p className="section__lede">{requirements.intro}</p>
      </Reveal>

      <Reveal>
        <div className="krav-pipe" aria-label="Fra behov til accepttest">
          {requirements.pipeline.map((p, i) => (
            <div key={p.label} className="krav-pipe__item" style={{ ["--k" as string]: p.color }}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{p.label}</strong>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">Metoder til at finde krav</h3>
          <p className="section__lede section__lede--tight">
            Fire klassiske greb — fra idé til dokumenteret interaktion. Klik dig
            igennem dem.
          </p>
        </Reveal>

        <Reveal>
          <div className="krav-methods" role="tablist" aria-label="Kravmetoder">
            {requirements.methods.map((m, i) => (
              <button
                key={m.name}
                type="button"
                role="tab"
                aria-selected={method === i}
                className={`krav-method-btn${method === i ? " is-active" : ""}`}
                style={{ ["--k" as string]: m.color }}
                onClick={() => setMethod(i)}
              >
                {m.name}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal key={currentMethod.name}>
          <article
            className="krav-method-panel"
            style={{ ["--k" as string]: currentMethod.color }}
          >
            <div>
              <h4>{currentMethod.name}</h4>
              <p>{currentMethod.body}</p>
              <p className="krav-method-panel__do">
                <span>Gør det</span>
                {currentMethod.do}
              </p>
              <p className="krav-method-panel__ex">
                <span>Eksempel</span>
                {currentMethod.example}
              </p>
            </div>
            <div className="krav-flow" aria-hidden="true">
              {currentMethod.visual.map((step, i) => (
                <div key={`${step}-${i}`} className="krav-flow__step">
                  <span>{step}</span>
                  {i < currentMethod.visual.length - 1 ? (
                    <em aria-hidden="true">→</em>
                  ) : null}
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal>
        <article className="krav-usecase">
          <header>
            <div>
              <p className="ex-board__kicker">{requirements.useCaseExample.id}</p>
              <h3>{requirements.useCaseExample.title}</h3>
            </div>
            <div className="krav-usecase__meta">
              <span>
                Aktør <strong>{requirements.useCaseExample.actor}</strong>
              </span>
              <span>
                Mål <strong>{requirements.useCaseExample.goal}</strong>
              </span>
            </div>
          </header>
          <div className="krav-usecase__conds">
            <div>
              <span>Precondition</span>
              <p>{requirements.useCaseExample.pre}</p>
            </div>
            <div>
              <span>Postcondition</span>
              <p>{requirements.useCaseExample.post}</p>
            </div>
          </div>
          <div className="krav-usecase__cols">
            <div className="krav-usecase__main">
              <h4>Hovedforløb</h4>
              <ol>
                {requirements.useCaseExample.main.map((s, i) => (
                  <li key={s}>
                    <span>{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="krav-usecase__alt">
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
          <p className="section__lede section__lede--tight">
            Fra kundens ønske til noget I kan byde på — og analysere kritisk.
          </p>
        </Reveal>

        <Reveal>
          <div className="krav-types">
            {requirements.reqTypes.map((t) => (
              <article key={t.name} style={{ ["--k" as string]: t.color }}>
                <h4>{t.name}</h4>
                <p>{t.body}</p>
                <p className="krav-types__ex">{t.example}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="krav-steps" role="tablist" aria-label="Kravspec trin">
            {requirements.specSteps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={specStep === i}
                className={`krav-steps__btn${specStep === i ? " is-active" : ""}`}
                style={{ ["--k" as string]: s.color }}
                onClick={() => setSpecStep(i)}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal key={currentSpec.title}>
          <article
            className="krav-step-panel"
            style={{ ["--k" as string]: currentSpec.color }}
          >
            <h4>{currentSpec.title}</h4>
            <p>{currentSpec.body}</p>
            <ul>
              {currentSpec.checklist.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="krav-step-panel__ex">
              <span>Eksempel</span>
              {currentSpec.example}
            </p>
          </article>
        </Reveal>
      </div>

      <div id="accepttest" className="stack">
        <Reveal>
          <article className="krav-accept">
            <div className="krav-accept__intro">
              <p className="ex-board__kicker">Leverance</p>
              <h3>{requirements.acceptTest.title}</h3>
              <p>{requirements.acceptTest.body}</p>
            </div>
            <div className="krav-gwt">
              {requirements.acceptTest.steps.map((s) => (
                <div key={s.key} style={{ ["--k" as string]: s.color }}>
                  <span>
                    {s.key}
                    <small>{s.da}</small>
                  </span>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <ul className="krav-accept__tips">
              {requirements.acceptTest.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>

      <div id="uml" className="stack">
        <Reveal>
          <h3 className="stack__heading">{requirements.uml.title}</h3>
          <p className="section__lede section__lede--tight">{requirements.uml.body}</p>
        </Reveal>

        <Reveal>
          <div className="krav-uml-tabs" role="tablist" aria-label="UML typer">
            {requirements.uml.types.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={umlType === i}
                className={umlType === i ? "is-active" : ""}
                style={{ ["--k" as string]: t.color }}
                onClick={() => setUmlType(i)}
              >
                {t.name}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal key={currentUml.name}>
          <article
            className="krav-uml-panel"
            style={{ ["--k" as string]: currentUml.color }}
          >
            <div>
              <h4>{currentUml.name}</h4>
              <p>{currentUml.body}</p>
            </div>
            <div className="krav-uml-sample" aria-hidden="true">
              <p>{currentUml.sample}</p>
            </div>
          </article>
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
      </div>
    </section>
  )
}

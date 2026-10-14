import { useState } from "react"
import { stages, type StageId } from "../content/scrum"
import { Reveal } from "./Reveal"

export function Stages() {
  const [active, setActive] = useState<StageId>("h4")
  const current = stages.find((s) => s.id === active) ?? stages[0]

  return (
    <section id="forloeb" className="section section--tint">
      <Reveal>
        <p className="section__eyebrow">Hovedforløb</p>
        <h2 className="section__title">Fra H1 til H6</h2>
        <p className="section__lede">
          Vi introducerer Scrum gradvist. Det store hop er H4: roller, kravspec
          og metodik i dybden. På H5 og H6 er roller frivillige.
        </p>
      </Reveal>

      <Reveal>
        <div className="timeline" role="tablist" aria-label="Hovedforløb">
          {stages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              role="tab"
              aria-selected={active === stage.id}
              className={`timeline__step${stage.highlight ? " timeline__step--jump" : ""}${active === stage.id ? " timeline__step--active" : ""}`}
              onClick={() => setActive(stage.id)}
            >
              <span className="timeline__label">{stage.label}</span>
              {stage.highlight ? <span className="timeline__badge">Hop</span> : null}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal key={current.id} className="stage-panel">
        <h3>
          {current.label}
          <span> — {current.title}</span>
        </h3>
        <ul>
          {current.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

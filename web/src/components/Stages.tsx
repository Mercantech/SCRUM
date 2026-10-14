import { useState } from "react"
import { roles, stages, type StageId } from "../content/scrum"
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
          Vi introducerer SCRUM gradvist. Det store hop er H4, hvor roller
          bliver et krav. På H5 og H6 er roller frivillige igen.
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
              {stage.highlight ? (
                <span className="timeline__badge">Hop</span>
              ) : null}
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

      <div className="roles" id="roller">
        <Reveal>
          <h3 className="stack__heading">Roller (primært H4)</h3>
          <p className="section__lede section__lede--tight">
            På H4 skal roller være besat og rotere. På H1–H3 og H5–H6 er de ikke
            et krav — men forståelsen er god at have.
          </p>
        </Reveal>
        <div className="roles__grid">
          {roles.map((role, i) => (
            <Reveal key={role.name} delay={i * 50}>
              <article className="role">
                <span className="role__short">{role.short}</span>
                <h4>{role.name}</h4>
                <p>{role.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

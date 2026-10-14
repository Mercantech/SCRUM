import { stagePhases } from "../content/scrum"
import { Reveal } from "./Reveal"

export function Stages() {
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
        <div className="phase-track" aria-hidden="true">
          <span>H1</span>
          <span>H2</span>
          <span>H3</span>
          <span className="phase-track__jump">H4</span>
          <span>H5</span>
          <span>H6</span>
        </div>
      </Reveal>

      <div className="phase-grid">
        {stagePhases.map((phase, i) => (
          <Reveal key={phase.id} delay={i * 70}>
            <article
              className={`phase-card${phase.highlight ? " phase-card--jump" : ""}`}
            >
              <header className="phase-card__head">
                <div className="phase-card__levels">
                  {phase.levels.map((level) => (
                    <span key={level}>{level}</span>
                  ))}
                </div>
                {phase.highlight ? (
                  <span className="phase-card__badge">Hop</span>
                ) : null}
              </header>
              <p className="phase-card__range">{phase.range}</p>
              <h3>{phase.title}</h3>
              <p className="phase-card__summary">{phase.summary}</p>
              <ul>
                {phase.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

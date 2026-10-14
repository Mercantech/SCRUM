import { stagePhases } from "../content/scrum"
import { Reveal } from "./Reveal"

export function Stages() {
  return (
    <section id="forloeb" className="section section--tint">
      <Reveal>
        <p className="section__eyebrow">Hovedforløb</p>
        <h2 className="section__title">Fra H1 til H6</h2>
        <p className="section__lede">
          Scrum kommer gradvist. På H1–H3 øver I rytmen uden formelle roller.
          På H4 kommer hoppet: I er både kunde og udvikler, arbejder med roller,
          og går i dybden med kravspec (6239) og programmeringsmetodik (6278).
          På H5–H6 er roller frivillige igen — men vanerne skal blive.
        </p>
      </Reveal>

      <div className="phase-stack">
        {stagePhases.map((phase, i) => (
          <Reveal key={phase.id} delay={i * 60}>
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
                  <span className="phase-card__badge">Hoppet</span>
                ) : null}
              </header>

              <p className="phase-card__range">{phase.range}</p>
              <h3>{phase.title}</h3>
              <p className="phase-card__summary">{phase.summary}</p>

              <p className="phase-card__goal">
                <span>Mål</span>
                {phase.goal}
              </p>

              {phase.byLevel ? (
                <div className="phase-levels">
                  {phase.byLevel.map((item) => (
                    <div key={item.level} className="phase-levels__item">
                      <strong>{item.level}</strong>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {phase.blocks ? (
                <div className="phase-blocks">
                  {phase.blocks.map((block) => (
                    <div key={block.title} className="phase-block">
                      <h4>{block.title}</h4>
                      <p>{block.body}</p>
                      {block.items ? (
                        <ul>
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="phase-card__checklist">
                <h4>Det I skal kunne</h4>
                <ul>
                  {phase.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <p className="phase-card__tip">
                <span>Tip</span>
                {phase.tip}
              </p>

              {phase.links ? (
                <nav className="phase-card__links" aria-label={`Links for ${phase.range}`}>
                  {phase.links.map((link) => (
                    <a key={link.href} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

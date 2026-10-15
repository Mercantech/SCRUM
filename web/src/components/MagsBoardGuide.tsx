import { magsBoard } from "../content/scrum"
import { Reveal } from "./Reveal"

export function MagsBoardGuide() {
  return (
    <div id="mags-board" className="stack mags-board">
      <Reveal>
        <p className="section__eyebrow">Best practice</p>
        <h3 className="stack__heading">{magsBoard.title}</h3>
        <p className="section__lede section__lede--tight">{magsBoard.intro}</p>
        <div className="mags-board__cta">
          <a
            className="btn btn--primary"
            href={magsBoard.href}
            target="_blank"
            rel="noreferrer"
          >
            Åbn live board
          </a>
          <a
            className="btn btn--ghost"
            href={magsBoard.repoHref}
            target="_blank"
            rel="noreferrer"
          >
            Template-repo
          </a>
        </div>
      </Reveal>

      <Reveal>
        <div className="mags-views" aria-label="Project views">
          {magsBoard.views.map((view) => (
            <article
              key={view.name}
              className="mags-view"
              style={{ ["--k" as string]: view.color }}
            >
              <header>
                <span>View</span>
                <h4>{view.name}</h4>
              </header>
              <p>{view.body}</p>
              <code>{view.filter}</code>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mags-status" aria-label="Status-kolonner">
          <p className="mags-board__label">Status-flow</p>
          <ol className="mags-status__track">
            {magsBoard.statuses.map((s, i) => (
              <li key={s.name} style={{ ["--k" as string]: s.color }}>
                {i > 0 ? <span className="mags-status__arrow" aria-hidden="true" /> : null}
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.rule}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="mags-status__optional">
            <strong>{magsBoard.optionalReview.name}:</strong>{" "}
            {magsBoard.optionalReview.body}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <p className="mags-board__label">Ugens ceremonier på boardet</p>
        <div className="mags-ceremonies">
          {magsBoard.ceremonies.map((c) => (
            <article
              key={c.title}
              className="mags-ceremony"
              style={{ ["--k" as string]: c.color }}
            >
              <header>
                <span className="mags-ceremony__day">{c.day}</span>
                <span className="mags-ceremony__time">{c.time}</span>
              </header>
              <h4>{c.title}</h4>
              <ul>
                {c.agenda.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mags-ceremony__out">
                <span>Output</span>
                {c.output}
              </p>
            </article>
          ))}
        </div>
      </Reveal>

      <div className="mags-rules">
        {magsBoard.rules.map((rule, i) => (
          <Reveal key={rule.title} delay={i * 40}>
            <article className="mags-rule">
              <h4>{rule.title}</h4>
              <p>{rule.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mags-setup">
          <h4>Sådan sætter I det op</h4>
          <ol>
            {magsBoard.setup.map((s) => (
              <li key={s.step}>
                <span>{s.step}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </div>
  )
}

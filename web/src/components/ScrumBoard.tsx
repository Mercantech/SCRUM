import { boardExample } from "../content/scrum"
import { Reveal } from "./Reveal"

const kindLabel: Record<string, string> = {
  feature: "Feature",
  bug: "Bug",
  chore: "Chore",
}

export function ScrumBoard() {
  return (
    <Reveal>
      <div className="ex-board" aria-label="Eksempel på Scrum-board">
        <header className="ex-board__header">
          <div>
            <p className="ex-board__kicker">{boardExample.subtitle}</p>
            <h3>{boardExample.title}</h3>
            <p className="ex-board__goal">
              <span>Sprintmål</span>
              {boardExample.sprintGoal}
            </p>
          </div>
          <div className="ex-board__team" aria-label="Team">
            {boardExample.team.map((m) => (
              <div key={m.name} className="ex-avatar" style={{ ["--avatar" as string]: m.color }}>
                <span className="ex-avatar__dot" aria-hidden="true">
                  {m.name.slice(0, 1)}
                </span>
                <span>
                  {m.name}
                  <small>{m.role}</small>
                </span>
              </div>
            ))}
          </div>
        </header>

        <div className="ex-board__stats">
          {boardExample.stats.map((s) => (
            <div key={s.label} className="ex-stat">
              <span>{s.label}</span>
              <strong>{s.value}</strong>
            </div>
          ))}
        </div>

        <div className="ex-board__cols">
          {boardExample.columns.map((col) => (
            <div
              key={col.id}
              className={`ex-col ex-col--${col.id}`}
              style={{ ["--col" as string]: col.color }}
            >
              <div className="ex-col__head">
                <h4>{col.name}</h4>
                <span className="ex-col__count">{col.tickets.length}</span>
              </div>
              <p className="ex-col__hint">{col.hint}</p>
              <ul className="ex-tickets">
                {col.tickets.map((t) => (
                  <li key={t.id} className={`ex-ticket ex-ticket--${t.kind}`}>
                    <div className="ex-ticket__top">
                      <span className="ex-ticket__id">{t.id}</span>
                      <span className="ex-ticket__kind">{kindLabel[t.kind]}</span>
                    </div>
                    <p className="ex-ticket__title">{t.title}</p>
                    <div className="ex-ticket__meta">
                      <span className="ex-ticket__pts">
                        {t.points > 0 ? `${t.points} SP` : "Ceremoni"}
                      </span>
                      {t.assignee ? (
                        <span className="ex-ticket__who">{t.assignee}</span>
                      ) : null}
                    </div>
                    {t.note ? <p className="ex-ticket__note">{t.note}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ex-learn">
          {boardExample.learn.map((item) => (
            <article key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

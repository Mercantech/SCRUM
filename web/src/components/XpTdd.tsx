import { useState } from "react"
import { scenario, tdd, xp } from "../content/scrum"
import { Reveal } from "./Reveal"

export function XpTdd() {
  const [activity, setActivity] = useState(0)
  const [tddStep, setTddStep] = useState(0)
  const currentActivity = xp.activities[activity]
  const currentTdd = tdd.cycle[tddStep]

  return (
    <section id="xp-tdd" className="section">
      <Reveal>
        <p className="section__eyebrow">6278 · XP & TDD</p>
        <h2 className="section__title">Extreme Programming & TDD</h2>
        <p className="section__lede">{xp.intro}</p>
      </Reveal>

      <Reveal>
        <div className="xp-compare">
          {xp.compare.map((side) => (
            <article
              key={side.side}
              className="xp-compare__side"
              style={{ ["--xp" as string]: side.color }}
            >
              <h3>{side.side}</h3>
              <ul>
                {side.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
          <div className="xp-compare__plus" aria-hidden="true">
            +
          </div>
        </div>
      </Reveal>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">Fire grundlæggende aktiviteter</h3>
          <p className="section__lede section__lede--tight">
            XP beskriver softwareudvikling som en cyklus: lytte → designe → kode →
            teste — og gentag.
          </p>
        </Reveal>

        <Reveal>
          <div className="xp-flow" role="tablist" aria-label="XP aktiviteter">
            {xp.activities.map((a, i) => (
              <button
                key={a.name}
                type="button"
                role="tab"
                aria-selected={activity === i}
                className={`xp-flow__step${activity === i ? " is-active" : ""}`}
                style={{ ["--xp" as string]: a.color }}
                onClick={() => setActivity(i)}
              >
                <span className="xp-flow__n">{i + 1}</span>
                <strong>
                  {a.name}
                  <small>{a.da}</small>
                </strong>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal key={currentActivity.name}>
          <article
            className="xp-spotlight"
            style={{ ["--xp" as string]: currentActivity.color }}
          >
            <div className="xp-spotlight__n" aria-hidden="true">
              {activity + 1}
            </div>
            <div>
              <h4>
                {currentActivity.name}
                <span> · {currentActivity.da}</span>
              </h4>
              <p>{currentActivity.body}</p>
              <p className="xp-spotlight__ex">
                <span>Eksempel</span>
                {currentActivity.example}
              </p>
            </div>
          </article>
        </Reveal>
      </div>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">Pair programming</h3>
          <p className="section__lede section__lede--tight">
            To hjerner, én maskine. Rollerne skifter — begge skal både køre og
            navigere.
          </p>
        </Reveal>
        <Reveal>
          <div className="xp-pair">
            {xp.pairRoles.map((r) => (
              <article
                key={r.role}
                className="xp-pair__role"
                style={{ ["--xp" as string]: r.color }}
              >
                <span className="xp-pair__badge">{r.role}</span>
                <p>{r.body}</p>
              </article>
            ))}
            <div className="xp-pair__machine" aria-hidden="true">
              <div className="xp-pair__screen">
                <span />
                <span />
                <span />
              </div>
              <p>1 maskine · skift hvert 15. min</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">XP-praksisser</h3>
        </Reveal>
        <div className="xp-practices">
          {xp.practices.map((p, i) => (
            <Reveal key={p.name} delay={i * 45}>
              <article
                className="xp-practice"
                style={{ ["--xp" as string]: p.color }}
              >
                <h4>{p.name}</h4>
                <p>{p.body}</p>
                <p className="xp-practice__tip">
                  <span>Tip</span>
                  {p.tip}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="tdd" className="stack tdd-lab">
        <Reveal>
          <p className="section__eyebrow">Test først</p>
          <h3 className="stack__heading">Test Driven Development</h3>
          <p className="section__lede section__lede--tight">{tdd.intro}</p>
        </Reveal>

        <Reveal>
          <div className="tdd-track" role="tablist" aria-label="TDD cyklus">
            {tdd.cycle.map((c, i) => (
              <button
                key={c.step}
                type="button"
                role="tab"
                aria-selected={tddStep === i}
                className={`tdd-track__btn${tddStep === i ? " is-active" : ""}`}
                style={{ ["--tdd" as string]: c.color }}
                onClick={() => setTddStep(i)}
              >
                <span>{i + 1}</span>
                {c.step}
                <small>{c.da}</small>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal key={currentTdd.step}>
          <div
            className="tdd-stage"
            style={{ ["--tdd" as string]: currentTdd.color }}
          >
            <div className="tdd-stage__info">
              <p className="tdd-stage__step">
                {currentTdd.step}
                <span> · {currentTdd.da}</span>
              </p>
              <p>{currentTdd.body}</p>
              <p className="tdd-stage__note">{currentTdd.note}</p>
            </div>
            <pre className="tdd-stage__code">
              <code>{currentTdd.code}</code>
            </pre>
          </div>
        </Reveal>

        <div className="tdd-why">
          {tdd.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 40}>
              <article>
                <h4>{w.title}</h4>
                <p>{w.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="scenarie" className="stack">
        <Reveal>
          <h3 className="stack__heading">{scenario.title}</h3>
          <p className="section__lede section__lede--tight">{scenario.story}</p>
        </Reveal>
        <div className="xp-scenario">
          {scenario.days.map((d, i) => (
            <Reveal key={d.day} delay={i * 55}>
              <article
                className="xp-scenario__day"
                style={{ ["--xp" as string]: d.color }}
              >
                <header>
                  <h4>{d.day}</h4>
                  <span>{d.label}</span>
                </header>
                <ul>
                  {d.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

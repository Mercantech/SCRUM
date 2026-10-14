import { scenario, tdd, xp } from "../content/scrum"
import { Reveal } from "./Reveal"

export function XpTdd() {
  return (
    <section id="xp-tdd" className="section">
      <Reveal>
        <p className="section__eyebrow">6278 · XP & TDD</p>
        <h2 className="section__title">Extreme Programming & TDD</h2>
        <p className="section__lede">{xp.intro}</p>
      </Reveal>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">Fire grundlæggende aktiviteter</h3>
        </Reveal>
        <div className="xp-cycle">
          {xp.activities.map((a, i) => (
            <Reveal key={a.name} delay={i * 50}>
              <article className="xp-step">
                <span>{String(i + 1)}</span>
                <h4>
                  {a.name}
                  <em> · {a.da}</em>
                </h4>
                <p>{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="chip-grid">
        {xp.practices.map((p, i) => (
          <Reveal key={p.name} delay={i * 40}>
            <article className="chip">
              <h4>{p.name}</h4>
              <p>{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div id="tdd" className="stack">
        <Reveal>
          <h3 className="stack__heading">Test Driven Development</h3>
          <p className="section__lede section__lede--tight">{tdd.intro}</p>
        </Reveal>
        <div className="tdd-cycle">
          {tdd.cycle.map((c, i) => (
            <Reveal key={c.step} delay={i * 60}>
              <article className={`tdd-step tdd-step--${c.step.toLowerCase()}`}>
                <h4>{c.step}</h4>
                <p>{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <ul className="check-list">
          {tdd.why.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </div>

      <div id="scenarie" className="stack">
        <Reveal>
          <h3 className="stack__heading">{scenario.title}</h3>
          <p className="section__lede section__lede--tight">{scenario.story}</p>
        </Reveal>
        <div className="scenario">
          {scenario.days.map((d, i) => (
            <Reveal key={d.day} delay={i * 60}>
              <article className="scenario__day">
                <h4>{d.day}</h4>
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
